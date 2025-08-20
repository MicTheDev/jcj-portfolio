# Johnnie's Portfolio Website

A modern, responsive portfolio website showcasing Johnnie's work as a writer, producer, and director. Built with Next.js, Material-UI, and GSAP for smooth animations.

## Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- **Material-UI Components**: Professional UI components and theming
- **External Works Integration**: Displays IMDB credits and external links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: Material-UI (MUI) v5
- **Animations**: GSAP with ScrollTrigger
- **Styling**: MUI Theme + Custom CSS
- **TypeScript**: Full type safety
- **Responsive**: Mobile-first design approach

## Content Sections

1. **Hero Section**: Introduction with call-to-action
2. **About Section**: Bio and background information
3. **Works Section**: Notable productions and achievements
4. **External Works**: IMDB credits and external links
5. **Scripts Portfolio**: Complete list of written works
6. **Contact Section**: Motto and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd johnnie-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
johnnie-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with MUI theme
│   │   ├── page.tsx        # Main portfolio page
│   │   └── globals.css     # Global styles
│   └── components/
│       └── ExternalWorks.tsx # External works component
├── public/
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine instructions
└── package.json
```

## Customization

### Theme Colors
Edit the theme in `src/app/layout.tsx` to customize colors, typography, and component styles.

### Content
Update the content in `src/app/page.tsx` to modify bio, works, and scripts information.

### External Links
Modify the `ExternalWorks.tsx` component to add or update external work references.

## SEO Features

- Meta tags for social sharing
- Open Graph and Twitter Card support
- Sitemap.xml for search engines
- Robots.txt for crawling instructions
- Semantic HTML structure
- Optimized heading hierarchy

## Performance

- Next.js App Router for optimal performance
- GSAP animations with ScrollTrigger for smooth scrolling
- Optimized images and lazy loading
- Responsive design for all devices

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for Johnnie's portfolio use. All rights reserved.

## Contact

For questions about this portfolio website, please contact the developer.

---

Built with ❤️ using Next.js, Material-UI, and GSAP
