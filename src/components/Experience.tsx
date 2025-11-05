const Experience = () => {
  const experiences = [
    {
      title: "Research Data Analyst",
      company: "Sunnybrook Hospital",
      location: "Toronto, Canada",
      period: "2023 - July 2025",
      description: "Led machine learning research in medical imaging with focus on spine fracture risk prediction. Developed deep learning models for DICOM image analysis and clinical decision support systems.",
      achievements: [
        "Developed ML models for spine fracture risk assessment using medical imaging data",
        "Collaborated with radiologists and clinicians to validate model predictions",
        "Processed and analyzed large-scale medical datasets (DICOM format)",
        "Published research findings and presented at medical conferences"
      ],
      technologies: ["Python", "TensorFlow", "Medical Imaging", "DICOM", "Statistical Analysis"]
    },
    {
      title: "Graduate Research Assistant & MSc Graduate",
      company: "York University - MSc Information Systems & Technology",
      location: "Toronto, Canada",
      period: "2022 - June 2025",
      description: "Completed advanced research in machine learning optimization and statistical methods. Contributed to open-source projects and developed novel algorithms for data analysis. Graduated with MSc in Information Systems & Technology.",
      achievements: [
        "Improved Dual Annealing optimization algorithm in SciPy library",
        "Implemented Cohen's d effect size statistical method for SciPy",
        "Conducted comprehensive analysis of medical datasets using advanced statistical methods",
        "Maintained high academic standing while contributing to multiple research projects"
      ],
      technologies: ["Python", "SciPy", "Statistical Analysis", "Algorithm Development", "Research Methods"]
    },
    {
      title: "Technical Consultant & Mentor",
      company: "African-Canadian Christian Network (ACCN)",
      location: "Toronto, Canada",
      period: "2021 - Present",
      description: "Providing technical leadership and mentorship for educational technology initiatives. Developed comprehensive learning management systems and robotics curriculum for Umoja Robotics program.",
      achievements: [
        "Built full-stack web application for FRC robotics scouting system",
        "Developed comprehensive Learning Management System (LMS) for mechanical engineering curriculum",
        "Designed and implemented AI curriculum integration strategies",
        "Mentored students in programming, data science, and robotics technologies"
      ],
      technologies: ["React", "Next.js", "Web Development", "Educational Technology", "Curriculum Development"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A track record of impactful contributions across research, healthcare technology, 
            and educational initiatives, with expertise in machine learning and data science.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-stretch mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg"></div>
              
              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? '' : 'md:mr-auto md:text-right'}`}>
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 min-h-[400px] flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      {exp.location}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {exp.period}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience