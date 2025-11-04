# Installation Guide

## Advanced Price Transparency Platform Setup

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- HTTPS-enabled web server (for production deployment)
- Optional: Node.js 16+ (for development server)

### Quick Start - GitHub Pages (Recommended)
The application is already deployed and ready to use:

**🌐 Live Application**: [https://chriswilliams2020.github.io/Advance-Price-Transparency-for-Providers-and-Payers/](https://chriswilliams2020.github.io/Advance-Price-Transparency-for-Providers-and-Payers/)

### Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ChrisWilliams2020/Advance-Price-Transparency-for-Providers-and-Payers.git
   cd Advance-Price-Transparency-for-Providers-and-Payers
   ```

2. **Local Server (Optional)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in Browser**
   Navigate to `http://localhost:8000`

### Production Deployment

#### GitHub Pages (Current Method)
- Automatic deployment from `main` branch
- SSL certificate included
- Global CDN delivery

#### Alternative Hosting Options
- **AWS S3 + CloudFront**: Enterprise-scale static hosting
- **Netlify**: Continuous deployment with branch previews  
- **Vercel**: Zero-config deployment with performance analytics
- **Azure Static Web Apps**: Microsoft cloud integration

### Configuration

#### Environment Variables (For Enhanced Features)
```bash
# Federal Reserve API Integration
FRED_API_KEY=your_federal_reserve_api_key

# Healthcare Data Integration
FHIR_BASE_URL=https://your-fhir-server.com

# Analytics Integration
GA_TRACKING_ID=your_google_analytics_id
```

### Browser Requirements
- **Minimum**: ES6 support, CSS Grid, Flexbox
- **Optimal**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+

### Performance Optimization
- Gzip compression enabled
- Image optimization recommended
- CDN usage for global distribution
- Lighthouse score: 95+ recommended

### Security Considerations
- HTTPS required for production
- Content Security Policy implementation
- HIPAA compliance for healthcare data
- Regular security audits recommended