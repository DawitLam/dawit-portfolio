const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "MATLAB"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "OpenCV", "NLTK"]
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau Public", "Power BI"]
    },
    {
      title: "Statistical Analysis",
      skills: ["SciPy", "Statsmodels", "Cohen's d", "Hypothesis Testing", "A/B Testing"]
    },
    {
      title: "Medical Imaging",
      skills: ["DICOM Processing", "Image Segmentation", "3D Reconstruction", "Radiomics"]
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Git/GitHub"]
    },
    {
      title: "Research & Analytics",
      skills: ["Clinical Data Analysis", "Biostatistics", "Research Design", "Academic Writing"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, statistical analysis, 
            and software development, with specialized expertise in medical imaging and healthcare analytics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Specialized Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <p className="text-gray-600 dark:text-gray-300">Years in ML & Data Science</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-300">Years Database & Information Systems</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
                <p className="text-gray-600 dark:text-gray-300">Published Research Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills