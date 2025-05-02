import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Extract unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  const handleFilterClick = (category) => {
    setActiveFilter(category)
    
    if (category === 'All') {
      setFilteredProjects(projects)
      return
    }
    
    const filtered = projects.filter(project => project.category === category)
    setFilteredProjects(filtered)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  }

  return (
    <section id="portfolio" className="section bg-gray-50 dark:bg-dark-300/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title pb-4">My Portfolio</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills and experience in creating innovative and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleFilterClick(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group rounded-xl overflow-hidden bg-white dark:bg-dark-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="text-lg" />
                      </a>
                      <a
                        href={project.link}
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
                        aria-label="Live Preview"
                      >
                        <FiExternalLink className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio