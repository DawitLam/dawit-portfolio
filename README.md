# Dawit Lambebo Gulta - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing expertise in Data Science, Machine Learning, and Medical Imaging.

## 🚀 Live Demo

Visit the live portfolio: [Coming Soon - Deploy to Vercel]

## 👨‍💻 About

This portfolio website represents the professional work and expertise of Dawit Lambebo Gulta, a Data Scientist and Machine Learning Engineer specializing in:

- **Medical Imaging & AI Research**
- **Machine Learning & Deep Learning**
- **Statistical Analysis & Data Science**
- **Educational Technology Development**
- **Open Source Contributions**

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist (Vercel's font family)
- **Deployment**: Vercel (recommended)
- **Development**: VS Code with tasks configured

## 📋 Features

### 🎨 Design & User Experience
- Modern, clean, and professional design
- Fully responsive layout (mobile-first approach)
- Dark mode support
- Smooth animations and transitions
- SEO optimized with proper metadata

### 📱 Sections & Content
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Professional introduction with social links
3. **About**: Comprehensive background and research interests
4. **Skills**: Organized technical competencies by category
5. **Experience**: Timeline-based professional history
6. **Projects**: Featured work with live demos and GitHub links
7. **Contact**: Professional contact information and social links

### 🔧 Technical Features
- TypeScript for type safety
- Component-based architecture
- Responsive grid systems
- Professional color schemes
- Accessibility best practices
- Fast loading and optimized performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd dawit_dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### VS Code Tasks

Pre-configured tasks available in VS Code:
- **Start Development Server**: Background task for development
- **Build for Production**: Build the application for deployment

## 📁 Project Structure

```
dawit_dev/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Experience.tsx
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       ├── Projects.tsx
│       └── Skills.tsx
├── public/
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization Guide

### Adding New Projects
Edit `src/components/Projects.tsx` and add to the `projects` array:

```typescript
{
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/username/repo",
  liveDemo: "https://your-demo.com", // optional
  features: ["Feature 1", "Feature 2", "Feature 3"],
  category: "Your Category"
}
```

### Updating Experience
Modify `src/components/Experience.tsx` to update the `experiences` array with your professional history.

### Customizing Skills
Edit `src/components/Skills.tsx` to update the `skillCategories` array with your technical competencies.

### Personal Information
Update personal details in:
- `src/components/Hero.tsx` - Main introduction
- `src/components/About.tsx` - Professional background
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - SEO metadata

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings as instructed

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static export
- **AWS Amplify**: Connect repository for continuous deployment

## 🔗 Professional Links

- **LinkedIn**: [dawit-lambebo-gulta](https://www.linkedin.com/in/dawit-lambebo-gulta/)
- **GitHub**: [DawitLam](https://github.com/DawitLam)
- **ORCID**: [0009-0008-7853-0956](https://orcid.org/0009-0008-7853-0956)

## 📊 Key Projects Featured

1. **Spine Fracture Risk Assessment ML System** - Medical AI research
2. **FRC Robotics Scouting Application** - Real-time data collection system
3. **Umoja Robotics LMS** - Educational technology platform
4. **SciPy Optimization Improvements** - Open source contributions
5. **Statistical Analysis Tools** - Cohen's d implementation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:
1. Open an issue for suggestions
2. Submit pull requests for improvements
3. Share feedback on design or functionality

## 📧 Contact

For questions about this portfolio or professional inquiries:
- **LinkedIn**: Professional networking and opportunities
- **GitHub**: Technical discussions and collaborations

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
