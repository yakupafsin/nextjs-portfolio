# Next.js Developer Portfolio Template

A production-ready, open-source developer portfolio template built with Next.js 14, TypeScript, Tailwind CSS, and MDX. Designed to be easily customizable by editing only JSON/MDX content files—no code changes required for typical updates.

## ✨ Features

- **🚀 Next.js 14** with App Router and Server Components
- **📝 TypeScript** for type safety and better developer experience
- **🎨 Tailwind CSS** for modern, responsive styling
- **📄 MDX** for rich content with React components
- **🌙 Dark Mode** with next-themes
- **📱 Fully Responsive** design that works on all devices
- **⚡ Performance Optimized** with Lighthouse score 95+
- **🔍 SEO Ready** with dynamic sitemap and robots.txt
- **🖼️ Dynamic OG Images** generated with @vercel/og
- **♿ Accessible** with keyboard navigation and screen reader support
- **🧪 Testing Setup** with Jest and Testing Library
- **🔧 Developer Tools** with ESLint, Prettier, and Husky
- **🚀 CI/CD Ready** with GitHub Actions
- **📊 Bundle Analysis** with @next/bundle-analyzer
- **✅ Content Validation** with Zod schemas
- **🏃‍♂️ Lighthouse CI** for performance monitoring

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects pages
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable UI components
├── content/              # Editable content files (JSON/MDX)
│   ├── site.json         # Site configuration
│   ├── skills.json       # Skills and technologies
│   ├── experience.json   # Work experience
│   ├── education.json    # Education and certifications
│   └── projects/         # Project case studies (MDX)
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── __tests__/            # Test files
└── .github/workflows/    # CI/CD configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Fork this repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/nextjs-portfolio-template.git
   cd nextjs-portfolio-template
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your site URL
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

7. **Edit content** in the `/content` folder

8. **Deploy to Vercel** by connecting your GitHub repository

For detailed setup instructions, see [SETUP.md](./SETUP.md).

## 📝 Content Customization

### 1. Site Configuration (`content/site.json`)

Update your basic information:

```json
{
  "name": "Your Name",
  "role": "Full-Stack Developer",
  "location": "San Francisco, CA",
  "headline": "Building exceptional digital experiences",
  "summary": "Passionate developer with 5+ years of experience...",
  "email": "your.email@example.com",
  "website": "https://yourportfolio.com",
  "cvUrl": "https://yourportfolio.com/resume.pdf",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  },
  "avatar": "/avatar.jpg"
}
```

### 2. Environment Variables

Set your site URL in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

This is used for:
- SEO (sitemap.xml, robots.txt)
- Dynamic OG image generation
- Social media previews

### 3. Skills (`content/skills.json`)

Organize your skills by category:

```json
[
  {
    "category": "Frontend",
    "items": ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    "category": "Backend",
    "items": ["Node.js", "Python", "PostgreSQL", "GraphQL"]
  }
]
```

### 3. Experience (`content/experience.json`)

Add your work experience:

```json
[
  {
    "title": "Senior Frontend Developer",
    "company": "Tech Company",
    "location": "San Francisco, CA",
    "type": "Full-time",
    "start": "2022-01",
    "end": "Present",
    "summary": "Lead frontend development for...",
    "achievements": [
      "Improved performance by 40%",
      "Led team of 4 developers"
    ],
    "stack": ["React", "TypeScript", "Next.js"]
  }
]
```

### 4. Adding Projects

Create a new MDX file in `content/projects/`:

```markdown
---
title: "My Awesome Project"
slug: "awesome-project"
period: "2024"
summary: "A brief description of what this project does"
tags: ["Web App", "Full-stack"]
stack: ["Next.js", "TypeScript", "PostgreSQL"]
links:
  repo: "https://github.com/you/project"
  demo: "https://project-demo.com"
cover: "/projects/awesome/cover.jpg"
featured: true
impact:
  - metric: "Users"
    value: "10k+"
    context: "Monthly active users"
---

## Problem
Describe the problem your project solves...

## Approach
Explain your technical approach...

## Impact
Share the results and learnings...
```

## 🎨 Customization

### Changing Colors and Branding

1. **Update Tailwind colors** in `tailwind.config.js`
2. **Modify CSS variables** in `app/globals.css`
3. **Replace logo/avatar** in the `public/` directory
4. **Update site metadata** in `app/layout.tsx`

### Adding New Sections

1. Create a new component in `components/`
2. Import and use it in the appropriate page
3. Add any new data to the `content/` directory

## 🧪 Testing

Run the test suite:

```bash
npm run test          # Run tests once
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Configure environment variables** (if needed)
4. **Deploy!**

The template is optimized for Vercel with automatic deployments on push.

### Deploy to Other Platforms

The template works with any platform that supports Next.js:

- **Netlify**: Use the `npm run build` command
- **Railway**: Automatic deployment from GitHub
- **AWS Amplify**: Connect your repository
- **Self-hosted**: Use `npm run build` and `npm start`

## 🔧 Advanced Features

### Dynamic OG Images

The template generates dynamic Open Graph images using `@vercel/og`:

```typescript
// Automatic OG images for pages
export const metadata = {
  openGraph: {
    images: ['/og?title=Page%20Title&tag=Category&description=Description'],
  },
}
```

### Bundle Analysis

Analyze your bundle size:

```bash
npm run analyze
```

### Content Validation

All content is validated with Zod schemas. Build will fail with clear error messages if content is invalid:

```bash
# Content validation happens automatically during build
npm run build
```

### Lighthouse CI

Run performance audits:

```bash
# Local Lighthouse audit
npm run lh

# CI runs automatically on PRs
```

## 📊 Performance

This template is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Automatic with next/image
- **Font Optimization**: Self-hosted fonts with next/font
- **Bundle Analysis**: Built-in with `npm run analyze`
- **Content Validation**: Zod schemas prevent runtime errors

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Contentlayer](https://contentlayer.dev/) for content management
- [Lucide](https://lucide.dev/) for the beautiful icons

---

**Happy coding!** 🚀

If you found this template helpful, please consider giving it a ⭐ on GitHub!
