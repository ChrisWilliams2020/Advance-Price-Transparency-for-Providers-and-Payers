// Advanced Price Transparency - Dashboard Module
// Handles all dashboard-related functionality

export class Dashboard {
    constructor() {
        this.metrics = {
            revenue: 0,
            negotiations: 0,
            contracts: 0,
            savings: 0
        };
        this.init();
    }

    init() {
        this.loadMetrics();
        this.setupEventListeners();
        this.startRealTimeUpdates();
    }

    loadMetrics() {
        // Load initial dashboard metrics
        this.metrics = {
            revenue: 2847500,
            negotiations: 12,
            contracts: 247,
            savings: 2340000
        };
        this.updateDisplay();
    }

    updateDisplay() {
        const elements = {
            revenue: document.getElementById('current-revenue'),
            negotiations: document.getElementById('active-negotiations'),
            contracts: document.getElementById('total-contracts'),
            savings: document.getElementById('total-savings')
        };

        if (elements.revenue) {
            elements.revenue.textContent = `$${this.metrics.revenue.toLocaleString()}`;
        }
        if (elements.negotiations) {
            elements.negotiations.textContent = this.metrics.negotiations.toString();
        }
        if (elements.contracts) {
            elements.contracts.textContent = this.metrics.contracts.toString();
        }
        if (elements.savings) {
            elements.savings.textContent = `$${this.metrics.savings.toLocaleString()}`;
        }
    }

    setupEventListeners() {
        // Add event listeners for dashboard interactions
        const refreshButton = document.getElementById('refresh-dashboard');
        if (refreshButton) {
            refreshButton.addEventListener('click', () => this.refreshData());
        }
    }

    startRealTimeUpdates() {
        // Simulate real-time updates every 30 seconds
        setInterval(() => {
            this.updateMetrics();
        }, 30000);
    }

    updateMetrics() {
        // Simulate realistic metric changes
        this.metrics.revenue += Math.floor(Math.random() * 50000) - 25000;
        this.metrics.negotiations += Math.floor(Math.random() * 3) - 1;
        this.metrics.contracts += Math.floor(Math.random() * 5);
        this.metrics.savings += Math.floor(Math.random() * 100000) - 50000;

        // Ensure reasonable bounds
        this.metrics.negotiations = Math.max(8, Math.min(20, this.metrics.negotiations));
        this.metrics.contracts = Math.max(200, this.metrics.contracts);
        this.metrics.savings = Math.max(1000000, this.metrics.savings);

        this.updateDisplay();
    }

    refreshData() {
        console.log('Refreshing dashboard data...');
        this.loadMetrics();
        
        // Visual feedback for refresh
        const dashboard = document.querySelector('.dashboard-grid');
        if (dashboard) {
            dashboard.style.opacity = '0.7';
            setTimeout(() => {
                dashboard.style.opacity = '1';
            }, 500);
        }
    }
}