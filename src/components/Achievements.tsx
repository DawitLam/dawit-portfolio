const Achievements = () => {
  const achievements = [
    {
      type: "Education",
      title: "Master of Arts in Information Systems & Technology",
      organization: "York University",
      date: "June 2025",
      description: "Graduated with focus on machine learning, data science, and medical imaging applications",
      icon: "🎓"
    },
    {
      type: "Research",
      title: "Medical Imaging Research Completion",
      organization: "Sunnybrook Hospital",
      date: "July 2025",
      description: "Successfully completed research data analyst role focusing on spine fracture risk prediction using AI",
      icon: "🏥"
    },
    {
      type: "Open Source",
      title: "SciPy Library Contributions",
      organization: "SciPy Community",
      date: "2024",
      description: "Contributed improvements to Dual Annealing optimization and Cohen's d statistical implementations",
      icon: "🔬"
    },
    {
      type: "Leadership",
      title: "Technical Mentor & Consultant",
      organization: "ACCN - Umoja Robotics",
      date: "2021 - Present",
      description: "Leading AI curriculum development and educational platform creation for robotics programs",
      icon: "🤖"
    },
    {
      type: "Publication",
      title: "ORCID Research Profile",
      organization: "ORCID Registry",
      date: "Active",
      description: "Maintaining professional research profile with contributions to medical imaging and ML research",
      icon: "📊"
    }
  ]

  // TODO: Replace with actual conferences from LinkedIn
  const conferences = [
    {
      name: "Please provide your actual conferences from LinkedIn",
      type: "Conference Type",
      year: "Year",
      role: "Your Role (Attendee/Speaker/Presenter)",
      focus: "Conference Focus Area",
      placeholder: true
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key milestones, conference participation, and professional recognition 
            showcasing continuous growth and contribution to the data science community.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Milestones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b from-blue-500 to-purple-600"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {achievement.type.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                        {achievement.type}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {achievement.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Recognition */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Recognition & Impact
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                R
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Research Excellence
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li>• 3+ peer-reviewed publications in top-tier journals</li>
                <li>• Featured in IEEE and BMJ publications</li>
                <li>• Research focus on medical AI and optimization</li>
                <li>• International conference presentations</li>
              </ul>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                L
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Leadership & Speaking
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li>• Keynote speaker at York University programs</li>
                <li>• Technical mentor for educational initiatives</li>
                <li>• Conference presentations and research talks</li>
                <li>• Open-source contributions to SciPy library</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">MA</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Graduate Degree Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Years Research Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">6+</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Featured Projects</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">4+</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Professional Roles</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements