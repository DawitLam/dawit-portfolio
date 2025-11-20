import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Publications from '@/components/Publications'
import Achievements from '@/components/Achievements'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden">
      {/* Colorful Tech-Focused Background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        {/* Vibrant tech gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-cyan-900 dark:to-purple-900"></div>
        
        {/* Tech-inspired animated patterns */}
        <div className="absolute inset-0">
          {/* Colorful floating orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-300/40 to-blue-400/40 dark:from-cyan-600/40 dark:to-blue-700/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-300/50 to-pink-400/50 dark:from-purple-600/50 dark:to-pink-700/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-300/45 to-teal-400/45 dark:from-emerald-600/45 dark:to-teal-700/45 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-300/35 to-red-400/35 dark:from-orange-600/35 dark:to-red-700/35 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-6000"></div>
          
          {/* Tech circuit-inspired pattern */}
          <div className="absolute inset-0 opacity-10 dark:opacity-15" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #06b6d4 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px),
              radial-gradient(circle at 50% 10%, #10b981 2px, transparent 2px),
              radial-gradient(circle at 10% 75%, #f59e0b 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
          
          {/* Dynamic grid pattern */}
          <div className="absolute inset-0 opacity-10 dark:opacity-15" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 45%, rgba(6, 182, 212, 0.2) 50%, transparent 55%),
              linear-gradient(-45deg, transparent 45%, rgba(139, 92, 246, 0.2) 50%, transparent 55%),
              linear-gradient(90deg, transparent 45%, rgba(16, 185, 129, 0.15) 50%, transparent 55%)
            `,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content with backdrop blur */}
      <div className="relative z-10 backdrop-blur-[1px]">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Achievements />
        <Projects />
        <Resume />
        <Contact />
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
