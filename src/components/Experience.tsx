'use client'

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
      ]
    },
    {
      title: "Teaching Assistant",
      company: "York University - School of Information Technology (ITEC)",
      location: "Toronto, Canada",
      period: "2023 - 2025",
      description: "Provided comprehensive academic and technical support for database management and system integration courses. Facilitated student learning through hands-on system administration and curriculum development.",
      achievements: [
        "Tutored and taught database management courses, helping students master SQL, relational database design, and query optimization",
        "Provided system integration support including VPN configuration, Oracle database setup, and enterprise system administration",
        "Marked assignments and exams, providing detailed feedback to improve student learning outcomes",
        "Designed and created course plans and learning materials for information systems courses",
        "Invigilated exams and maintained academic integrity protocols"
      ]
    },
    {
      title: "Graduate Research Assistant & MA Graduate",
      company: "York University - MA Information Systems & Technology",
      location: "Toronto, Canada",
      period: "2022 - June 2025",
      description: "Completed advanced research in machine learning optimization and statistical methods. Contributed to open-source projects and developed novel algorithms for data analysis. Graduated with MA in Information Systems & Technology.",
      achievements: [
        "Improved Dual Annealing optimization algorithm in SciPy library",
        "Implemented Cohen's d effect size statistical method for SciPy",
        "Conducted comprehensive analysis of medical datasets using advanced statistical methods",
        "Maintained high academic standing while contributing to multiple research projects"
      ]
    },
    {
      title: "System Developer & AI Consultant",
      company: "African-Canadian Christian Network (ACCN)",
      location: "Toronto, Canada",
      period: "2021 - Present",
      description: "Providing technical leadership and AI consulting for educational technology and business process automation. Developed full-stack applications and intelligent systems for robotics education and enterprise automation.",
      achievements: [
        "Developed full-stack web application for FRC robotics scouting system using React and Next.js, enabling real-time match data collection and analysis",
        "Created custom Learning Management System (LMS) with integrated AI curriculum implementation for mechanical engineering education",
        "Automated business processes using Salesforce and Power Automate, improving workflow efficiency and data management",
        "Designed and implemented AI curriculum integration strategies for robotics and technology programs",
        "Mentored students in programming, data science, AI, and robotics technologies"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A track record of impactful contributions across research, healthcare technology, 
            and educational initiatives, with expertise in machine learning and data science.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600" aria-hidden="true"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:ml-auto md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-0 transform md:translate-x-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
                  {exp.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  {exp.location}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-3">
                  {exp.period}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 dark:text-gray-300 text-xs flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
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
