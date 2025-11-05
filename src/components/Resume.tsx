import Link from 'next/link'

const Resume = () => {
  // QR Code data - you can replace this with your actual resume URL
  const resumeUrl = "https://dawit.vercel.app" // Replace with your actual deployed URL
  
  // Generate QR code URL using a free service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(resumeUrl)}&bgcolor=ffffff&color=000000&format=png&margin=10`
  
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Colorful tech background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-orange-50/80 dark:from-purple-900/80 dark:via-pink-900/80 dark:to-orange-900/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 40%, #8b5cf6 2px, transparent 2px),
          radial-gradient(circle at 70% 60%, #ec4899 2px, transparent 2px),
          radial-gradient(circle at 50% 80%, #f59e0b 2px, transparent 2px)
        `,
        backgroundSize: '100px 100px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Digital Resume & Portfolio Access
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Quick access to my professional profile for recruiters and networking. 
            Scan the QR code or use the direct links below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-gradient-to-r from-purple-400 to-pink-400 max-w-md mx-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  📱 Scan to Access Portfolio
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Perfect for networking events & business cards
                </p>
              </div>
              
              {/* QR Code */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code to Portfolio" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  🌐 {resumeUrl}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                    Mobile Optimized
                  </span>
                  <span className="bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                    Always Updated
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
                    Interactive
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Assets Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              💼 Professional Resources
            </h3>
            
            {/* Portfolio Link */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-200 dark:border-cyan-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  🌐
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Interactive Portfolio
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Complete showcase of projects, publications, and technical skills
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    View Portfolio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* LinkedIn Profile */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  💼
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    LinkedIn Profile
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Professional network and career timeline
                  </p>
                  <a
                    href="https://www.linkedin.com/in/dawit-lambebo-gulta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    Connect on LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Profile */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-slate-800 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  👨‍💻
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    GitHub Repository
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Code samples, open-source contributions, and project repositories
                  </p>
                  <a
                    href="https://github.com/DawitLam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    View Code
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Tableau Dashboard */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  📊
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Data Visualizations
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Interactive Tableau dashboards and data analysis work
                  </p>
                  <a
                    href="https://public.tableau.com/app/profile/dawit.gulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    View Dashboards
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  ✉️
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email Contact
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Direct professional communication
                  </p>
                  <a
                    href="mailto:dawitgulta@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Dawit,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    Send Email
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Downloadable Resume */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  📄
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Downloadable Resume
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    PDF resume with QR code for easy sharing
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href="/api/resume-with-qr"
                      download
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      📱 With QR Code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                    <a
                      href="/Dawit_Gulta_resume.pdf"
                      download
                      className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      📄 Original
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Resume