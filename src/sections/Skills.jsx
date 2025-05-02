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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  }

  const barVariants = {
    hidden: { width: 0 },
    visible: level => ({ 
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" } 
    }),
  }

  return (
    <section id="skills" className="section">
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
            I've worked with a variety of technologies and methodologies throughout my career.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                {skillCategory.category}
              </h3>

              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress bg-gradient-to-r from-primary-500 to-secondary-500"
                        custom={skill.level}
                        variants={barVariants}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
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