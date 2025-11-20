"use client"

import Link from 'next/link'

const Resume = () => {
  // QR Code data - you can replace this with your actual resume URL
  const resumeUrl = "https://dawitgulta.vercel.app" // Replace with your actual deployed URL
  
  // Generate QR code URL using a free service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(resumeUrl)}&bgcolor=ffffff&color=000000&format=png&margin=10`
  
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="resume-heading">
      {/* Colorful tech background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-orange-50/80 dark:from-purple-900/80 dark:via-pink-900/80 dark:to-orange-900/80 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 40%, #8b5cf6 2px, transparent 2px),
          radial-gradient(circle at 70% 60%, #ec4899 2px, transparent 2px),
          radial-gradient(circle at 50% 80%, #f59e0b 2px, transparent 2px)
        `,
        backgroundSize: '100px 100px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="resume-heading" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
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
                    alt="QR code linking to Dawit Gulta's portfolio website at dawitgulta.vercel.app" 
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
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    aria-label="View interactive portfolio homepage"
                  >
                    View Portfolio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Connect with Dawit on LinkedIn"
                  >
                    Connect on LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label="View Dawit's code repositories on GitHub"
                  >
                    View Code
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label="View Dawit's data visualizations on Tableau Public"
                  >
                    View Dashboards
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-4">
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
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border mb-3">
                    <p className="font-mono text-green-700 dark:text-green-300 font-semibold text-sm">dawitgulta@gmail.com</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href="mailto:dawitgulta@gmail.com?subject=Portfolio Inquiry&body=Hi Dawit, I found your portfolio and would like to connect."
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-1.5 rounded-lg font-medium transition-all duration-300 text-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      aria-label="Send email to dawitgulta@gmail.com"
                    >
                      Open Email
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('dawitgulta@gmail.com');
                        alert('Email copied!');
                      }}
                      className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      aria-label="Copy email address to clipboard"
                    >
                      Copy
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
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
                    Professional PDF resume for download and sharing
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href="/Gulta,Dawit_Resume.pdf"
                      download
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      aria-label="Download Dawit Gulta's resume as PDF"
                    >
                      📄 Download Resume
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                    <a
                      href="/api/resume-with-qr"
                      download
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                      aria-label="Download resume with embedded QR code as PDF"
                    >
                      📱 Resume with QR Code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
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