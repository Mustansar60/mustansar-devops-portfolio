# Mustansar Maqsood - DevOps Engineer Portfolio

A modern, ultra-responsive portfolio website built for a DevOps Engineer showcasing cloud infrastructure expertise, experience, technical skills, and completed projects.

## 🎨 Features

- **Ultra-Modern Dark Mode UI** - Glassmorphism design with vibrant cyan and blue accents
- **Infrastructure-as-Code Aesthetic** - Terminal-inspired styling and animations
- **Framer Motion Animations** - Smooth, performant transitions and entrance animations
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Component-Based Architecture** - Clean, modular React components with TypeScript
- **JSON-Driven Content** - All portfolio data stored in `/src/data/portfolio.json` for easy updates
- **Production-Ready Build** - Optimized Vite build with minimal bundle size

## 🚀 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom dark mode configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 📂 Project Structure

```
mustansar-devops-portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Hero.tsx        # Hero section with profile intro
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Skills.tsx       # Technical skills matrix
│   │   ├── Projects.tsx     # Featured projects grid
│   │   ├── Certifications.tsx # Professional credentials
│   │   ├── Footer.tsx       # Footer with links
│   │   └── index.ts         # Component exports
│   ├── data/
│   │   └── portfolio.json   # All portfolio content
│   ├── App.tsx              # Main app component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles with Tailwind
│   └── main.tsx             # React DOM entry point
├── public/                  # Static assets
├── dist/                    # Production build output
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎯 Sections

### 1. Hero Section
- Profile name and title with gradient effect
- Tagline and specialty description
- Call-to-action buttons
- Social media links
- Animated scroll indicator

### 2. Experience Section
- Work history timeline
- Company names and job titles
- Key accomplishments and highlights
- Date ranges with terminal-style formatting

### 3. Skills Section
- Technical skills organized by category:
  - Cloud & Orchestration (AWS, Kubernetes, Docker)
  - Automation & IaC (Terraform, Ansible, GitHub Actions)
  - Security & Networking (IAM, VPC, Networking)
  - Programming Languages (Python, Bash, YAML, HCL)
- Interactive skill tags with hover effects

### 4. Projects Section
- Featured DevOps projects with descriptions
- Project metrics and key technologies
- Visual project cards with icons
- Links to detailed project information

### 5. Certifications Section
- Professional credentials display
- Certification issuer and date
- Verified badges
- Interactive certification cards

### 6. Footer
- Quick navigation links
- Social media connections
- Back-to-top button
- Copyright information

## 💻 Installation & Setup

### Prerequisites
- Node.js 18+ and npm 10+

### Steps

1. **Clone the repository**
   ```bash
   cd mustansar-devops-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Updating Content

All portfolio content is stored in `/src/data/portfolio.json`. To update your portfolio:

1. Open `src/data/portfolio.json`
2. Update the relevant sections:
   - **profile**: Your name, title, tagline, and contact info
   - **experience**: Work history and accomplishments
   - **skills**: Technical expertise organized by category
   - **projects**: Featured DevOps projects
   - **certifications**: Professional credentials

3. Save the file - changes are hot-reloaded during development

Example structure:
```json
{
  "profile": {
    "name": "Your Name",
    "title": "DevOps Engineer",
    "tagline": "Your tagline",
    "specialty": "Your specialty",
    "email": "your.email@example.com",
    "github": "https://github.com/yourprofile",
    "linkedin": "https://linkedin.com/in/yourprofile"
  },
  "experience": [...],
  "skills": {...},
  "projects": [...],
  "certifications": [...]
}
```

## 🎨 Customization

### Color Scheme
Modify colors in `tailwind.config.js`:
- `accent`: Cyan (#00d9ff) - Primary accent color
- `accent-secondary`: Blue (#0066ff) - Secondary accent color
- `dark-bg`: Dark background (#0a0e27)
- `dark-card`: Card background (#1a1f3a)

### Typography
Update font settings in `index.css` or `tailwind.config.js`

### Animations
Framer Motion configurations are in each component:
- Adjust `duration` for animation speed
- Modify `transition` for easing effects
- Change `delay` values for staggered animations

### Dark Mode
The entire site uses custom CSS variables for dark mode. Modify values in `tailwind.config.js` and `index.css`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repo name as `base`
2. Run `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## 📊 Performance

- **Bundle Size**: ~335KB (gzipped: ~105KB)
- **Build Time**: ~1s
- **First Contentful Paint**: <2s
- **Lighthouse Score**: 95+ (with proper optimization)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is open source and available for personal and professional use.

## 🤝 Support

For questions or issues:
1. Check existing documentation
2. Review component code comments
3. Inspect Framer Motion and Tailwind CSS configurations

## 🎉 Credits

Built with attention to DevOps best practices and modern web development standards.

---

**Last Updated**: April 2025
**Version**: 1.0.0

