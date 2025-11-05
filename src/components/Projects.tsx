const Projects = () => {
  const projects = [
    {
      title: "York University Data Visualization - Demographics & Hip Pain Analysis",
      description: "Comprehensive Tableau dashboard analyzing demographics and hip pain patterns. Created as part of York University's data visualization team, showcasing advanced analytics and interactive visualizations for healthcare insights.",
      technologies: ["Tableau Public", "Data Analysis", "Healthcare Analytics", "Interactive Dashboards"],
      liveDemo: "https://public.tableau.com/app/profile/dawit.gulta/viz/YorkUniversityDataVisualizationteam/Overview-DemographicsandHipPain#1",
      github: "Data Visualization Project",
      features: [
        "Interactive demographic analysis dashboard",
        "Hip pain pattern visualization and insights",
        "Multi-dimensional data exploration capabilities",
        "Professional healthcare data presentation"
      ],
      category: "Data Visualization"
    },
    {
      title: "Spine Fracture Risk Assessment ML System",
      description: "End-to-end machine learning system for clinical fracture risk assessment using medical imaging data. Developed as part of research at Sunnybrook Hospital.",
      technologies: ["Python", "TensorFlow", "Medical Imaging", "DICOM", "Clinical Data"],
      github: "https://github.com/DawitLam/data-science-portfolio",
      features: [
        "Deep learning models for medical image analysis",
        "DICOM image processing and feature extraction",
        "Clinical decision support system integration",
        "Statistical validation with clinical outcomes"
      ],
      category: "Medical AI"
    },
    {
      title: "FRC Robotics Scouting Application",
      description: "Comprehensive scouting system for FIRST Robotics Competition (FRC 2026 - INTO THE DEEP) developed for Team 7712 ACCN-Umoja. Features real-time data collection, analysis, and sharing capabilities.",
      technologies: ["React", "Next.js", "TypeScript", "Vercel", "PWA"],
      liveDemo: "https://scouting-7712.vercel.app/#home",
      github: "Custom Development",
      features: [
        "Real-time match data collection and analysis",
        "Data export and sharing capabilities", 
        "Progressive Web App (PWA) for offline functionality",
        "Responsive design for tablets and mobile devices"
      ],
      category: "Web Application"
    },
    {
      title: "Umoja Robotics Learning Management System",
      description: "Comprehensive educational platform for mechanical engineering curriculum in robotics. Features student progress tracking, interactive lessons, assessments, and forum discussions.",
      technologies: ["React", "GitHub Pages", "Educational Technology", "Curriculum Design"],
      liveDemo: "https://accn-umoja-robotics-7712.github.io/Umoja-Mechanical-Curriculum-/",
      github: "https://github.com/accn-umoja-robotics-7712/Umoja-Mechanical-Curriculum-",
      features: [
        "7-week structured mechanical engineering curriculum",
        "Student progress tracking and assessment system",
        "Interactive lessons with hands-on activities",
        "Discussion forum and resource library"
      ],
      category: "Educational Platform"
    },
    {
      title: "Improvements to Dual Annealing in SciPy",
      description: "A restart-based version of Hill Climbing with local search optimization algorithm, resembling a memetic algorithm approach for enhanced global optimization performance.",
      technologies: ["Python", "SciPy", "Optimization Algorithms", "Statistical Computing"],
      github: "https://github.com/DawitLam/Improvements_to_Dual_Annealing_in_SciPy",
      features: [
        "Enhanced global optimization algorithm",
        "Memetic algorithm implementation",
        "Improved convergence performance",
        "Open-source contribution to SciPy ecosystem"
      ],
      category: "Open Source"
    },
    {
      title: "Cohen's d Effect Size Implementation",
      description: "Statistical effect size implementation for SciPy library, providing standardized measure of the difference between two group means in terms of standard deviation.",
      technologies: ["Python", "SciPy", "Statistical Analysis", "Effect Size Calculation"],
      github: "https://github.com/DawitLam/cohens-d-scipy",
      features: [
        "Standardized effect size calculation",
        "Integration with SciPy statistical functions",
        "Comprehensive documentation and examples",
        "Unit tests and validation against established methods"
      ],
      category: "Statistical Tools"
    },
    {
      title: "Medical Deep Learning Analysis Portfolio",
      description: "Comprehensive portfolio showcasing deep learning applications in medical data analysis, including image processing, classification, and predictive modeling.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Medical Imaging", "Deep Learning"],
      github: "https://github.com/DawitLam/deeplearning_analysis",
      features: [
        "Medical image classification models",
        "Deep neural network architectures",
        "Performance evaluation and validation",
        "Clinical application case studies"
      ],
      category: "Deep Learning"
    }
  ]

  const categories = ["All", "Data Visualization", "Medical AI", "Web Application", "Educational Platform", "Open Source", "Statistical Tools", "Deep Learning"]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of impactful projects spanning medical AI, educational technology, 
            open-source contributions, and statistical computing innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 dark:text-gray-300 text-xs flex items-start">
                        <span className="text-blue-500 mr-2 mt-1 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "Custom Development" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.github === "Custom Development" && (
                    <span className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-center py-2 px-4 rounded text-sm">
                      Private Repo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/DawitLam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects