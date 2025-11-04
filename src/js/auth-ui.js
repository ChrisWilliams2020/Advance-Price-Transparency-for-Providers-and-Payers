// Authentication UI Controller
// Manages user interface interactions for biometric authentication

export class AuthUI {
    constructor(biometricAuth) {
        this.auth = biometricAuth;
        this.currentStep = 'method-selection';
        this.selectedMethods = [];
        this.practiceData = null;
        this.init();
    }

    init() {
        console.log('🎨 Initializing Authentication UI');
        this.setupEventListeners();
        this.checkBiometricSupport();
        this.loadPracticeAccounts();
    }

    setupEventListeners() {
        // Practice selection
        const practiceSelect = document.getElementById('practice-select');
        practiceSelect?.addEventListener('change', (e) => this.handlePracticeSelection(e));

        // Authentication method buttons
        document.getElementById('fingerprint-btn')?.addEventListener('click', () => this.handleFingerprintAuth());
        document.getElementById('face-btn')?.addEventListener('click', () => this.handleFaceAuth());
        document.getElementById('voice-btn')?.addEventListener('click', () => this.handleVoiceAuth());
        document.getElementById('password-btn')?.addEventListener('click', () => this.showTraditionalAuth());

        // Main login button
        document.getElementById('login-btn')?.addEventListener('click', () => this.handleLogin());

        // 2FA inputs
        document.getElementById('tfa-code')?.addEventListener('input', (e) => this.handleTfaInput(e));
        document.getElementById('send-sms')?.addEventListener('click', () => this.sendTfaCode('sms'));
        document.getElementById('send-email')?.addEventListener('click', () => this.sendTfaCode('email'));

        // Modal handlers
        document.getElementById('close-modal')?.addEventListener('click', () => this.hideCreatePracticeModal());
        document.getElementById('cancel-practice')?.addEventListener('click', () => this.hideCreatePracticeModal());
        document.getElementById('create-practice')?.addEventListener('click', () => this.handleCreatePractice());

        // Helper links
        document.getElementById('forgot-password')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showForgotPassword();
        });
        document.getElementById('setup-biometric')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showBiometricSetup();
        });
    }

    async checkBiometricSupport() {
        const methods = ['fingerprint', 'face', 'voice'];
        
        for (const method of methods) {
            const btn = document.getElementById(`${method}-btn`);
            const status = document.getElementById(`${method}-status`);
            
            if (btn && status) {
                if (this.auth.authMethods[method === 'face' ? 'faceRecognition' : method === 'voice' ? 'voiceRecognition' : method]) {
                    btn.classList.remove('disabled');
                    status.textContent = 'Ready';
                    status.className = 'status-indicator ready';
                } else {
                    btn.classList.add('disabled');
                    status.textContent = 'Not Available';
                    status.className = 'status-indicator unavailable';
                }
            }
        }
    }

    handlePracticeSelection(event) {
        const value = event.target.value;
        
        if (value === 'create-new') {
            this.showCreatePracticeModal();
        } else if (value) {
            this.practiceData = { id: value };
            this.enableAuthenticationMethods();
        } else {
            this.disableAuthenticationMethods();
        }
    }

    enableAuthenticationMethods() {
        const authMethods = document.querySelector('.auth-methods');
        authMethods?.classList.remove('disabled');
        
        const methodBtns = document.querySelectorAll('.auth-method-btn:not(.disabled)');
        methodBtns.forEach(btn => {
            btn.disabled = false;
        });
    }

    disableAuthenticationMethods() {
        const authMethods = document.querySelector('.auth-methods');
        authMethods?.classList.add('disabled');
        
        const methodBtns = document.querySelectorAll('.auth-method-btn');
        methodBtns.forEach(btn => {
            btn.disabled = true;
        });
    }

    async handleFingerprintAuth() {
        if (!this.auth.authMethods.fingerprint) {
            this.showError('Fingerprint authentication is not available on this device');
            return;
        }

        this.setAuthStatus('Initializing fingerprint scanner...', '👆');
        
        try {
            const result = await this.auth.authenticateFingerprint();
            this.handleAuthSuccess(result);
        } catch (error) {
            this.handleAuthError('Fingerprint authentication failed: ' + error.message);
        }
    }

    async handleFaceAuth() {
        if (!this.auth.authMethods.faceRecognition) {
            this.showError('Face recognition is not available on this device');
            return;
        }

        this.showFaceInstructions();
        this.setAuthStatus('Starting camera...', '📷');
        
        try {
            const result = await this.auth.authenticateFace();
            this.hideFaceInstructions();
            this.handleAuthSuccess(result);
        } catch (error) {
            this.hideFaceInstructions();
            this.handleAuthError('Face recognition failed: ' + error.message);
        }
    }

    async handleVoiceAuth() {
        if (!this.auth.authMethods.voiceRecognition) {
            this.showError('Voice recognition is not available on this device');
            return;
        }

        this.showVoiceInstructions();
        this.setAuthStatus('Listening for voice command...', '🎤');
        
        try {
            const result = await this.auth.authenticateVoice();
            this.hideVoiceInstructions();
            this.handleAuthSuccess(result);
        } catch (error) {
            this.hideVoiceInstructions();
            this.handleAuthError('Voice authentication failed: ' + error.message);
        }
    }

    showTraditionalAuth() {
        const traditional = document.getElementById('traditional-auth');
        traditional.style.display = 'block';
        
        // Enable login button
        document.getElementById('login-btn').disabled = false;
        this.currentStep = 'traditional';
    }

    handleAuthSuccess(result) {
        this.selectedMethods.push(result);
        this.setAuthStatus(`${result.method} authentication successful!`, '✅');
        
        // Show 2FA for additional security
        setTimeout(() => {
            this.showTwoFactorAuth();
        }, 1500);
    }

    handleAuthError(message) {
        this.setAuthStatus(message, '❌');
        setTimeout(() => {
            this.hideAuthStatus();
        }, 3000);
    }

    showTwoFactorAuth() {
        const tfaSection = document.getElementById('two-factor-section');
        tfaSection.style.display = 'block';
        
        this.setAuthStatus('Please enter your 2FA code', '🔐');
        this.currentStep = '2fa';
        
        // Focus on 2FA input
        document.getElementById('tfa-code')?.focus();
    }

    handleTfaInput(event) {
        const code = event.target.value;
        if (code.length === 6) {
            this.verify2FA(code);
        }
    }

    async verify2FA(code) {
        this.setAuthStatus('Verifying 2FA code...', '⏳');
        
        try {
            const result = await this.auth.authenticateTwoFactor(code);
            this.selectedMethods.push(result);
            this.completeAuthentication();
        } catch (error) {
            this.handleAuthError('Invalid 2FA code. Please try again.');
            document.getElementById('tfa-code').value = '';
        }
    }

    completeAuthentication() {
        this.setAuthStatus('Authentication successful! Redirecting...', '🎉');
        
        setTimeout(() => {
            // Redirect to main dashboard
            window.location.href = 'index.html';
        }, 2000);
    }

    sendTfaCode(method) {
        this.setAuthStatus(`Sending ${method.toUpperCase()} code...`, '📱');
        
        // Simulate sending code
        setTimeout(() => {
            this.setAuthStatus(`Code sent via ${method.toUpperCase()}`, '✅');
        }, 1500);
    }

    showCreatePracticeModal() {
        const modal = document.getElementById('create-practice-modal');
        modal.style.display = 'flex';
    }

    hideCreatePracticeModal() {
        const modal = document.getElementById('create-practice-modal');
        modal.style.display = 'none';
        
        // Reset practice selection
        document.getElementById('practice-select').value = '';
    }

    async handleCreatePractice() {
        const form = document.getElementById('practice-form');
        const formData = new FormData(form);
        
        const practiceData = {
            name: document.getElementById('practice-name').value,
            type: document.getElementById('practice-type').value,
            npi: document.getElementById('practice-npi').value,
            address: document.getElementById('practice-address').value,
            administrators: [{
                email: document.getElementById('admin-email').value,
                role: 'primary_admin'
            }]
        };

        // Validate required fields
        if (!practiceData.name || !practiceData.type || !practiceData.npi) {
            this.showError('Please fill in all required fields');
            return;
        }

        try {
            const account = this.auth.createPracticeAccount(practiceData);
            
            // Add to dropdown
            const select = document.getElementById('practice-select');
            const option = new Option(practiceData.name, account.id);
            select.add(option);
            select.value = account.id;
            
            this.hideCreatePracticeModal();
            this.handlePracticeSelection({ target: { value: account.id } });
            
            this.showSuccess('Practice account created successfully!');
        } catch (error) {
            this.showError('Failed to create practice account: ' + error.message);
        }
    }

    loadPracticeAccounts() {
        // Load existing practice accounts from storage
        try {
            const accounts = JSON.parse(localStorage.getItem('practice_accounts') || '[]');
            const select = document.getElementById('practice-select');
            
            accounts.forEach(account => {
                const option = new Option(account.name, account.id);
                select.add(option);
            });
        } catch (error) {
            console.error('Error loading practice accounts:', error);
        }
    }

    showFaceInstructions() {
        document.getElementById('face-instructions').style.display = 'block';
    }

    hideFaceInstructions() {
        document.getElementById('face-instructions').style.display = 'none';
    }

    showVoiceInstructions() {
        document.getElementById('voice-instructions').style.display = 'block';
    }

    hideVoiceInstructions() {
        document.getElementById('voice-instructions').style.display = 'none';
    }

    setAuthStatus(message, icon) {
        const statusDiv = document.getElementById('auth-status');
        const messageDiv = statusDiv.querySelector('.status-message');
        const iconDiv = statusDiv.querySelector('.status-icon');
        
        messageDiv.textContent = message;
        iconDiv.textContent = icon;
        statusDiv.style.display = 'block';
    }

    hideAuthStatus() {
        document.getElementById('auth-status').style.display = 'none';
    }

    showError(message) {
        this.setAuthStatus(message, '❌');
        setTimeout(() => {
            this.hideAuthStatus();
        }, 4000);
    }

    showSuccess(message) {
        this.setAuthStatus(message, '✅');
        setTimeout(() => {
            this.hideAuthStatus();
        }, 3000);
    }

    showForgotPassword() {
        alert('Password recovery will be sent to your registered email address.\n\nFor enterprise accounts, contact your system administrator.');
    }

    showBiometricSetup() {
        alert('Biometric setup guide:\n\n1. Ensure your device supports biometric authentication\n2. Enable biometrics in your browser settings\n3. Follow the device-specific setup process\n\nFor technical support, contact our healthcare IT team.');
    }

    async handleLogin() {
        if (this.currentStep === 'traditional') {
            await this.handleTraditionalLogin();
        } else if (this.selectedMethods.length > 0) {
            this.completeAuthentication();
        }
    }

    async handleTraditionalLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            this.showError('Please enter both username and password');
            return;
        }

        this.setAuthStatus('Authenticating credentials...', '🔐');
        
        // Simulate traditional authentication
        setTimeout(() => {
            if (username.includes('@') && password.length >= 8) {
                this.showTwoFactorAuth();
            } else {
                this.handleAuthError('Invalid username or password');
            }
        }, 2000);
    }
}