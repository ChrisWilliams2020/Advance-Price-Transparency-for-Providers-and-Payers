// Advanced Price Transparency - Interactive Features
// Enterprise Healthcare Revenue Optimization Platform

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set last updated timestamp
    updateTimestamp();
    
    // Initialize dashboard metrics animations
    animateMetrics();
    
    // Start real-time updates simulation
    startRealtimeUpdates();
    
    // Add smooth scroll behavior for navigation
    initializeSmoothScroll();
    
    // Add interactive hover effects
    initializeInteractiveElements();
    
    console.log('Advanced Price Transparency Platform Initialized');
}

// Update timestamp in footer
function updateTimestamp() {
    const timestampElement = document.getElementById('last-updated');
    if (timestampElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        timestampElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Animate metrics on scroll into view
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-value, .stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    metrics.forEach(metric => observer.observe(metric));
}

// Simulate real-time updates for dashboard metrics
function startRealtimeUpdates() {
    // Update revenue every 30 seconds
    setInterval(() => {
        updateRevenue();
    }, 30000);
    
    // Update active negotiations every 45 seconds
    setInterval(() => {
        updateNegotiations();
    }, 45000);
    
    // Pulse animation for active status badges
    setInterval(() => {
        pulseActiveBadges();
    }, 2000);
}

// Update revenue with simulated real-time changes
function updateRevenue() {
    const revenueElement = document.getElementById('current-revenue');
    if (revenueElement) {
        const currentValue = parseFloat(revenueElement.textContent.replace(/[$,]/g, ''));
        // Small realistic changes (0.5% to 2% variations)
        const changePercent = (Math.random() * 1.5 + 0.5) / 100;
        const change = Math.floor(currentValue * changePercent);
        const newValue = currentValue + change;
        
        animateValueChange(revenueElement, newValue, true);
    }
}

// Update active negotiations count
function updateNegotiations() {
    const negotiationsElement = document.getElementById('active-negotiations');
    if (negotiationsElement) {
        const currentValue = parseInt(negotiationsElement.textContent);
        const change = Math.floor(Math.random() * 5) - 2; // Random change -2 to +2
        const newValue = Math.max(8, Math.min(20, currentValue + change)); // Keep between 8-20
        
        if (newValue !== currentValue) {
            animateValueChange(negotiationsElement, newValue, false);
        }
    }
}

// Animate value changes
function animateValueChange(element, newValue, isCurrency) {
    element.style.transition = 'all 0.3s ease';
    element.style.transform = 'scale(1.1)';
    element.style.color = 'var(--success-color)';
    
    setTimeout(() => {
        if (isCurrency) {
            element.textContent = '$' + newValue.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        } else {
            element.textContent = newValue.toString();
        }
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.color = '';
        }, 300);
    }, 300);
}

// Pulse animation for active status badges
function pulseActiveBadges() {
    const badges = document.querySelectorAll('.status-badge.active');
    badges.forEach(badge => {
        badge.style.transition = 'all 0.3s ease';
        badge.style.transform = 'scale(1.05)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 300);
    });
}

// Initialize smooth scrolling for navigation links
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Add active state visual feedback
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 500);
            }
        });
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add click interaction to process stages
    const processStages = document.querySelectorAll('.process-stage');
    processStages.forEach((stage, index) => {
        stage.addEventListener('click', function() {
            showStageDetails(index + 1);
        });
        
        // Add keyboard accessibility
        stage.setAttribute('tabindex', '0');
        stage.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                showStageDetails(index + 1);
            }
        });
    });
    
    // Add hover effects to dashboard cards
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.borderLeft = '4px solid var(--primary-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = '';
        });
    });
    
    // Make data points in charts interactive
    const dataPoints = document.querySelectorAll('.data-point');
    dataPoints.forEach((point, index) => {
        point.addEventListener('mouseenter', function() {
            const value = Math.floor(Math.random() * 50000) + 20000;
            showTooltip(this, `$${value.toLocaleString()}`);
        });
        
        point.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

// Show stage details (simulated modal/alert)
function showStageDetails(stageNumber) {
    const stageNames = [
        'Real-Time Contract Analysis',
        'Market Benchmarking',
        'Automated Payer Negotiations',
        'Revenue Maximization',
        'Continuous Optimization'
    ];
    
    const stageDescriptions = [
        'AI-powered analysis of 247 payer contracts, identifying pricing gaps and optimization opportunities in real-time.',
        'Integration with Federal Reserve economic data to benchmark against regional markets and develop competitive pricing strategies.',
        'Intelligent negotiation algorithms managing 12 active payer negotiations with data-driven proposals.',
        'Dynamic pricing optimization using predictive analytics to maximize revenue and competitive positioning.',
        'Machine learning algorithms providing 24/7 performance monitoring and strategic adjustments.'
    ];
    
    // Create visual feedback
    const stage = document.querySelector(`.process-stage[data-stage="${stageNumber}"]`);
    if (stage) {
        stage.style.transition = 'all 0.3s ease';
        stage.style.backgroundColor = '#e0e7ff';
        
        setTimeout(() => {
            stage.style.backgroundColor = '';
        }, 500);
    }
    
    console.log(`Stage ${stageNumber}: ${stageNames[stageNumber - 1]}`);
    console.log(stageDescriptions[stageNumber - 1]);
}

// Tooltip functionality
let tooltipElement = null;

function showTooltip(element, text) {
    hideTooltip();
    
    tooltipElement = document.createElement('div');
    tooltipElement.className = 'custom-tooltip';
    tooltipElement.textContent = text;
    tooltipElement.style.cssText = `
        position: absolute;
        background: var(--dark-bg);
        color: white;
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 1000;
        pointer-events: none;
        box-shadow: var(--shadow-lg);
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltipElement);
    
    const rect = element.getBoundingClientRect();
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    
    // Calculate position with boundary detection
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    let top = rect.top - tooltipHeight - 10 + window.pageYOffset;
    
    // Check right boundary
    if (left + tooltipWidth > window.innerWidth - 10) {
        left = window.innerWidth - tooltipWidth - 10;
    }
    // Check left boundary
    if (left < 10) {
        left = 10;
    }
    // Check top boundary - if too close to top, show below element
    if (rect.top - tooltipHeight - 10 < 0) {
        top = rect.bottom + 10 + window.pageYOffset;
    }
    
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function hideTooltip() {
    if (tooltipElement) {
        tooltipElement.remove();
        tooltipElement = null;
    }
}

// Keyboard navigation enhancements
document.addEventListener('keydown', function(e) {
    // ESC key to close any open tooltips
    if (e.key === 'Escape') {
        hideTooltip();
    }
    
    // Quick navigation with keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                e.preventDefault();
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                e.preventDefault();
                document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

// Performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page Load Time: ${pageLoadTime}ms`);
            
            // Log to demonstrate enterprise-grade performance
            if (pageLoadTime < 2000) {
                console.log('✓ Performance: Excellent (< 2s)');
            } else if (pageLoadTime < 5000) {
                console.log('✓ Performance: Good (< 5s)');
            }
        }, 0);
    });
}
