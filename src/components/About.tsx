const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate data scientist and machine learning engineer dedicated to leveraging 
            technology for meaningful impact in healthcare and education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Background
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Recently completed my Master of Science in Information Systems and Technology 
                at York University (June 2025) and worked as a Research Data Analyst at Sunnybrook Hospital 
                (until July 2025), where I focused on medical imaging and spine fracture risk prediction 
                using advanced machine learning techniques.
              </p>
              <p>
                My expertise spans across data science, machine learning, deep learning, and 
                statistical analysis, with a particular focus on healthcare applications and 
                medical imaging. I&apos;m passionate about using technology to solve complex problems 
                and improve patient outcomes.
              </p>
              <p>
                Beyond my research work, I actively contribute to educational initiatives as a 
                mentor and technical consultant for the African-Canadian Christian Network (ACCN), 
                where I develop educational platforms and integrate AI curricula to empower the 
                next generation of technologists.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Research Interests
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Medical Imaging & AI
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Developing machine learning models for medical image analysis, 
                  particularly in spine fracture detection and risk assessment.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Statistical Optimization
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Contributing to open-source statistical libraries, including 
                  improvements to optimization algorithms in SciPy.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Educational Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating innovative learning platforms and integrating AI 
                  curricula to make technology education more accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About