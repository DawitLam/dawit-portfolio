const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities, collaborations, and meaningful projects. 
            Feel free to reach out if you&apos;d like to discuss data science, machine learning, or potential partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Toronto, Canada</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Current Status</h4>
                  <p className="text-gray-600 dark:text-gray-300">MA Graduate - York University (June 2025)</p>
                  <p className="text-gray-600 dark:text-gray-300">Available for New Opportunities</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Research Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300">Medical Imaging & ML</p>
                  <p className="text-gray-600 dark:text-gray-300">Spine Fracture Risk Prediction</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Professional Profiles</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/dawit-lambebo-gulta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/DawitLam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://orcid.org/0009-0008-7853-0956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors"
                  title="ORCID Research Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.272 0 3.781-1.784 3.781-3.722 0-2.016-1.509-3.722-3.781-3.722h-2.297z"/>
                  </svg>
                </a>
                <a
                  href="https://public.tableau.com/app/profile/dawit.gulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg transition-colors"
                  title="Tableau Public Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.654 0v2.325h2.325V0h-2.325zm0 21.352v2.324h2.325v-2.324h-2.325zM4.665 7.656v2.325h2.325V7.656H4.665zm0 7.036v2.325h2.325v-2.325H4.665zm14.017-7.036v2.325h2.325V7.656h-2.325zm0 7.036v2.325h2.325v-2.325h-2.325zM21.352 11.654H24v-2.325h-2.648v2.325zM2.648 11.654H0v-2.325h2.648v2.325zm16.706-4.008h2.325V4.665h-2.325v2.981zm-14.01 0h2.324V4.665H5.344v2.981zm14.01 7.017h2.325v-2.325h-2.325v2.325zm-14.01 0h2.324v-2.325H5.344v2.325z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600">
              {/* Hidden email for internal reference: dawit.lambebo@gmail.com */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Interested in collaboration or have questions about my work? Feel free to reach out through 
                LinkedIn for the fastest response, or connect with me on GitHub to discuss technical projects.
                I&apos;m actively seeking new opportunities in data science, machine learning, and research roles.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                    Direct Email Contact
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    For direct communication, send me an email with your inquiry or opportunities.
                  </p>
                  <a
                    href="mailto:dawitgulta@gmail.com?subject=Portfolio Inquiry&body=Hi Dawit, I found your portfolio and would like to connect."
                    className="inline-flex items-center gap-2 mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Send Email
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                    For Professional Inquiries
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Connect with me on LinkedIn for job opportunities, research collaborations, 
                    or professional networking.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/dawit-lambebo-gulta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    Message on LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-600/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">
                    For Technical Discussions
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Check out my GitHub repositories and feel free to open issues or start discussions 
                    about technical projects and open-source contributions.
                  </p>
                  <a
                    href="https://github.com/DawitLam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium"
                  >
                    Visit GitHub Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Dawit Lambebo Gulta. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Open to opportunities in Data Science, Machine Learning, and Research.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact