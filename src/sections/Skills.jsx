import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5 
      } 
    },
  }

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-300/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title pb-4">My Skills</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white dark:bg-dark-100 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-md hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-primary-50/50 dark:hover:bg-primary-900/10 border border-transparent hover:border-primary-200 dark:hover:border-primary-800 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary-500/20 before:to-secondary-500/20 before:opacity-0 before:transition-opacity hover:before:opacity-100"
            >
              <motion.div 
                className="w-12 h-12 flex items-center justify-center relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain group-hover:filter group-hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 relative z-10">
                {skill.name}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#portfolio" className="btn btn-outline">
            See My Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills