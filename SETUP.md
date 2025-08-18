# Portfolio Setup Guide

This guide will walk you through setting up and customizing your developer portfolio.

## 🚀 Quick Setup

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/nextjs-portfolio-template.git
cd nextjs-portfolio-template
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Content Customization

### Site Configuration (`content/site.json`)

Replace placeholder values with your information:

```json
{
  "name": "Your Full Name",
  "role": "Your Job Title",
  "location": "Your City, Country",
  "headline": "Your value proposition in one line",
  "summary": "2-3 sentences about your professional background",
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

### Skills (`content/skills.json`)

Organize your technical skills by category:

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

### Experience (`content/experience.json`)

Add your work experience:

```json
[
  {
    "title": "Senior Developer",
    "company": "Company Name",
    "location": "City, Country",
    "type": "Full-time",
    "start": "2022-01",
    "end": "Present",
    "summary": "Brief description of your role",
    "achievements": [
      "Specific achievement with metrics",
      "Another achievement with impact"
    ],
    "stack": ["React", "TypeScript", "AWS"]
  }
]
```

### Education (`content/education.json`)

Add your educational background:

```json
[
  {
    "school": "University Name",
    "degree": "Bachelor of Science in Computer Science",
    "location": "City, Country",
    "start": "2018",
    "end": "2022",
    "gpa": "3.8/4.0",
    "honors": ["Dean's List", "Magna Cum Laude"],
    "relevant_courses": ["Data Structures", "Algorithms", "Software Engineering"]
  }
]
```

## 📁 Adding Projects

### 1. Create Project MDX File

Create a new file in `content/projects/` (e.g., `my-awesome-project.mdx`):

```markdown
---
title: "My Awesome Project"
slug: "my-awesome-project"
period: "2024"
summary: "Brief description of what this project does and your role"
tags: ["Web App", "Full-stack", "Open Source"]
stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"]
links:
  repo: "https://github.com/yourusername/project"
  demo: "https://project-demo.com"
  case_study: "https://blog.com/case-study"
cover: "/projects/my-project/cover.jpg"
featured: true
impact:
  - metric: "Users"
    value: "10k+"
    context: "Monthly active users"
  - metric: "Performance"
    value: "95+ Lighthouse"
    context: "Optimized for speed"
---

## Problem

Describe the problem your project solves...

## Approach

Explain your technical approach and decisions...

## Impact

Share the results, metrics, and what you learned...
```

### 2. Add Project Images

Add your project cover image to `public/projects/my-project/cover.jpg`

Recommended image specifications:
- **Cover images**: 1200x630px (16:9 aspect ratio)
- **Screenshots**: Any size, but optimize for web
- **Format**: JPG or PNG
- **Size**: Keep under 500KB for performance

## 🎨 Customization

### Colors and Branding

1. **Update CSS variables** in `app/globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Your brand color */
  --secondary: 210 40% 96%;       /* Secondary color */
  /* ... other colors */
}
```

2. **Modify Tailwind config** in `tailwind.config.js` for additional customization.

### Logo and Images

Replace these files in the `public/` directory:
- `avatar.jpg` - Your profile photo (400x400px recommended)
- `og-image.jpg` - Social media preview image (1200x630px)
- `resume.pdf` - Your resume/CV file

### Site Metadata

Update metadata in `app/layout.tsx`:
- Page titles and descriptions
- Open Graph images
- Twitter card settings
- Google verification codes

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

Vercel will automatically:
- Build your site
- Deploy to a global CDN
- Provide HTTPS
- Enable automatic deployments

### Deploy to Netlify

1. Build the site: `npm run build`
2. Upload the `out/` folder to Netlify
3. Configure custom domain (optional)

### Deploy to Other Platforms

The portfolio works with any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Railway
- Render

## 🧪 Testing

Run tests to ensure everything works:

```bash
npm run test          # Run tests
npm run test:coverage # Run with coverage
npm run lint          # Check code quality
npm run type-check    # Verify TypeScript
```

## 📊 Performance Optimization

### Image Optimization

- Use `next/image` component (already implemented)
- Optimize images before uploading
- Use WebP format when possible

### Bundle Analysis

```bash
npm run build
npm run analyze  # If you add bundle analyzer
```

### Lighthouse Scores

Run Lighthouse audits:
```bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse
```

Target scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🔧 Advanced Configuration

### Adding Blog (Optional)

1. Create `content/blog/` directory
2. Add MDX files for blog posts
3. Update `contentlayer.config.ts` to include blog posts
4. Create blog pages in `app/blog/`

### Adding Contact Form Backend

1. Use services like Formspree, Netlify Forms, or Vercel Forms
2. Update `components/contact-form.tsx` with your endpoint
3. Add environment variables for API keys

### Analytics Integration

Add Google Analytics or other analytics:

1. Install analytics package
2. Add tracking ID to environment variables
3. Update `app/layout.tsx` with tracking code

## 🆘 Troubleshooting

### Common Issues

**Build Errors:**
- Check TypeScript errors: `npm run type-check`
- Verify all imports are correct
- Ensure all content files have valid JSON/frontmatter

**Images Not Loading:**
- Verify image paths are correct
- Check file extensions match
- Ensure images are in `public/` directory

**Styling Issues:**
- Clear `.next` cache: `rm -rf .next`
- Restart development server
- Check Tailwind CSS classes are valid

### Getting Help

- Check the [GitHub Issues](https://github.com/yourusername/nextjs-portfolio-template/issues)
- Review Next.js documentation
- Ask questions in the discussions

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Contentlayer Documentation](https://contentlayer.dev/)

---

**Need help?** Open an issue on GitHub or check the documentation!
