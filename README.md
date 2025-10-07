# Bharath Engineerings - Industrial & Feed Machinery Website

A modern, responsive website for Bharath Engineerings, a leading manufacturer of industrial and feed machinery since 1990.

## Features

- **Modern Design**: Clean, professional UI matching the company's brand identity
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with SEO best practices including meta tags, structured data, and semantic HTML
- **Performance**: Optimized for fast loading and smooth user experience
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Technology Stack

- **React.js**: Modern JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **HTML5**: Semantic markup for better SEO and accessibility
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with logo and menu
│   ├── Hero.js            # Hero section with main heading and CTAs
│   ├── Features.js        # Key features/value propositions
│   ├── Products.js        # Product showcase section
│   └── Footer.js          # Footer with company info and links
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports

public/
├── index.html            # HTML template with SEO meta tags
├── manifest.json         # PWA manifest
└── robots.txt           # Search engine crawler instructions
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bharath-engineerings
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines and social media
- **Structured Data**: JSON-LD structured data for better search engine understanding
- **Semantic HTML**: Proper HTML5 semantic elements
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Proper canonical URL structure
- **Robots.txt**: Search engine crawler instructions

## Performance Optimizations

- **Lazy Loading**: Images are lazy-loaded for better performance
- **Optimized Images**: SVG placeholders for faster initial load
- **Minified CSS**: Tailwind CSS is purged and minified
- **Code Splitting**: React components are optimized for code splitting
- **Preconnect**: External font preconnections for faster loading

## Accessibility Features

- **ARIA Labels**: Proper ARIA labels for screen readers
- **Keyboard Navigation**: Full keyboard navigation support
- **Color Contrast**: WCAG AA compliant color contrast ratios
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Alt Text**: Descriptive alt text for all images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Deployment

The application can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Static website hosting with CloudFront

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'bharath-blue': '#1e3a8a',
  'bharath-yellow': '#fbbf24',
  'bharath-dark': '#1e293b',
}
```

### Content

Update the content in the respective component files:
- Company information in `Header.js` and `Footer.js`
- Hero content in `Hero.js`
- Features in `Features.js`
- Products in `Products.js`

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@bharathengineerings.com
- Phone: +91 98765 43210
