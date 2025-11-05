# Dawit Lambebo Gulta - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing expertise in Data Science, Machine Learning, and Medical Imaging.

## 🚀 Live Demo

Visit the live portfolio: **[https://dawitgulta.vercel.app](https://dawitgulta.vercel.app)** 🚀

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
2. **Hero Section**: Professional introduction with social links and CTA buttons
3. **About**: Comprehensive background and research interests
4. **Skills**: Organized technical competencies by category with experience metrics
5. **Experience**: Timeline-based professional history with correct dates
6. **Publications**: Real research papers with IEEE and BMJ links
7. **Achievements**: Professional accomplishments and certifications
8. **Projects**: Featured work with live demos and GitHub links
9. **Resume & QR Code**: Downloadable resume with embedded QR code functionality
10. **Contact**: Professional contact information, email links, and social profiles

### 🔧 Technical Features
- **QR Code Generation**: Automatic QR code embedding in downloadable resume
- **Email Integration**: Direct mailto links with pre-populated subject/body
- **PDF Manipulation**: Dynamic resume generation with QR codes
- **API Routes**: Custom Next.js API for resume processing
- **TypeScript**: Full type safety across all components
- **Component Architecture**: Modular, reusable React components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Colorful Tech Theme**: Vibrant gradients and animated backgrounds
- **Real Data Integration**: Actual publication links and professional information
- **SEO Optimized**: Proper metadata and semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DawitLam/dawit-portfolio.git
   cd dawit-portfolio
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
dawit-portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── resume-with-qr/
│   │   │       └── route.ts        # QR code generation API
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx               # Professional background
│       ├── Achievements.tsx        # Accomplishments
│       ├── Contact.tsx            # Contact info with email links
│       ├── Experience.tsx         # Work timeline
│       ├── Hero.tsx              # Main landing section
│       ├── Navigation.tsx        # Header navigation
│       ├── Projects.tsx          # Featured projects
│       ├── Publications.tsx      # Research papers
│       ├── Resume.tsx           # QR code & downloadable resume
│       └── Skills.tsx           # Technical competencies
├── public/
│   ├── Dawit_Gulta_resume.pdf    # Original resume file
│   └── [other assets]
├── .env.local                    # Environment variables
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

## 📊 Key Features & Highlights

### 🔬 **Real Research Integration**
- **IEEE Publications**: Direct links to published medical imaging research
- **BMJ Case Reports**: Links to actual published case studies
- **ORCID Profile**: Connected research identity verification

### 💼 **Professional Tools**
- **QR Code Resume**: Downloadable PDF with embedded portfolio QR code
- **Email Integration**: Direct contact with pre-populated professional templates
- **Timeline Accuracy**: Correct graduation (June 2025) and work dates (July 2025)

### 🎨 **Design Excellence**
- **Colorful Tech Theme**: Vibrant gradients with cyan, purple, emerald, orange
- **Interactive Elements**: Animated backgrounds, hover effects, smooth transitions
- **Mobile Optimized**: Perfect display across all device sizes

### 🚀 **Technical Innovation**
- **Dynamic PDF Generation**: Real-time QR code embedding in resume downloads
- **API Integration**: Custom Next.js API routes for document processing
- **Modern Stack**: Next.js 16, TypeScript, Tailwind CSS, PDF-lib, QR code generation

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
