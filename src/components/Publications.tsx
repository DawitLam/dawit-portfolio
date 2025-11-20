const Publications = () => {
  const publications = [
    {
      title: "Vertebral compression Fracture Risk in Spinal Metastases Patients Following Stereotactic Body Radiotherapy Using Quantitative Imaging Data and Machine Learning",
      authors: "D Gulta, S Chen, G Klein, TD Ross, et al.",
      journal: "IEEE Conference",
      year: "2025",
      venue: "IEEE Conference on Medical Imaging",
      type: "Conference Paper",
      link: "https://ieeexplore.ieee.org/abstract/document/11177109",
      description: "Research on vertebral compression fractures (VCFs) in approximately 14% of patients with spinal metastases following treatment with Stereotactic Body Radiotherapy (SBRT). Applied machine learning techniques to quantitative imaging data for fracture risk prediction.",
      tags: ["Medical Imaging", "Machine Learning", "Radiotherapy", "Spine Fractures"]
    },
    {
      title: "Safe Activity participation Following Elective Total hip replacement: the SAFE-T investigation",
      authors: "A Shah, C Whyne, A Kiss, H Kreder, D Gulta, et al.",
      journal: "British Journal of Sports Medicine",
      year: "2025",
      venue: "BJSM - British Journal of Sports Medicine",
      type: "Journal Article",
      link: "https://bjsm.bmj.com/content/59/9/676.abstract",
      description: "Investigation into safe activity participation following total hip replacement (THR) surgery. Study focuses on evidence-based guidelines for post-surgical activity recommendations among younger individuals undergoing elective orthopaedic procedures.",
      tags: ["Orthopedic Surgery", "Clinical Research", "Patient Safety", "Hip Replacement"]
    },
    {
      title: "Improvements to Dual Annealing in SciPy",
      authors: "D Gulta, S Chen",
      journal: "IEEE Latin American Conference",
      year: "2024",
      venue: "IEEE Latin American Conference on Computational Intelligence",
      type: "Conference Paper",
      link: "https://ieeexplore.ieee.org/abstract/document/10814799",
      description: "Demonstrated that a typical implementation of Simulated Annealing in continuous domains is effectively equivalent to random search/Hill Climbing. Presented improvements to the dual annealing optimization algorithm for enhanced performance.",
      tags: ["Optimization Algorithms", "SciPy", "Computational Intelligence", "Algorithm Development"]
    }
  ]

  const conferenceEvents = [
    {
      name: "IGT x ImNO Conference Presentation",
      type: "Research Presentation",
      year: "2024",
      role: "Presenter",
      organization: "Sunnybrook Research Institute",
      description: "Presented research work at IGT x ImNO conference, advancing research and innovation in medical imaging and intervention.",
      image: "Conference presentation with research poster"
    },
    {
      name: "IEEE LA-CCI 2024",
      type: "International Conference",
      year: "2024", 
      role: "Research Presenter",
      organization: "IEEE Latin American Conference on Computational Intelligence",
      description: "Presented 'Improvements to Dual Annealing in SciPy' research paper at the IEEE Latin American Conference on Computational Intelligence.",
      image: "IEEE conference presentation"
    },
    {
      name: "York University International Education Program",
      type: "Keynote Speaker",
      year: "2024",
      role: "Featured Speaker",
      organization: "York University Internationally Educated Professionals Bridging Programs",
      description: "Delivered inspirational keynote speech to internationally educated professionals on opportunities and career development in technology and data science.",
      image: "Keynote speaking at York University"
    }
  ]

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="publications-heading">
      {/* Section background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/80 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-5" aria-hidden="true" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, #3b82f6 2px, transparent 2px),
          radial-gradient(circle at 80% 50%, #8b5cf6 2px, transparent 2px)
        `,
        backgroundSize: '80px 80px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="publications-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Peer-reviewed publications and research contributions in medical imaging, machine learning, 
            and computational intelligence, showcasing expertise in healthcare technology and algorithm development.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Published Research Papers
          </h3>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {pub.type}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 font-medium">
                        {pub.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {pub.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                      {pub.venue} • {pub.journal}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`View publication: ${pub.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Publication
                  </a>
                  <div className="text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">
                    Cited by researchers worldwide
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Conference Presentations & Speaking Engagements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {event.type.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {event.name}
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                        {event.year}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                      {event.organization}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                        {event.role}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Impact Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center" role="group" aria-label="Research impact statistics">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg" role="group" aria-label="Published papers count">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2" aria-label="3 plus published papers">3+</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Published Papers</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg" role="group" aria-label="International conferences attended">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2" aria-label="2 international conferences">2</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">International Conferences</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg" role="group" aria-label="Research presentations given">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2" aria-label="3 plus research presentations">3+</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Research Presentations</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg" role="group" aria-label="Keynote speaking engagements">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2" aria-label="1 keynote speaking engagement">1</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Keynote Speaking</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Publications