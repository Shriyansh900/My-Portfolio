import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiMail, FiUser, FiCalendar, FiLinkedin } from 'react-icons/fi'
import { aboutMe, education, timeline } from '../data'
import MyPic from "../assets/IMG_20230112_222005_348.jpg"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="section bg-gray-50 dark:bg-slate-900/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title pb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 order-2 lg:order-1"
          >            
            <motion.div 
              variants={itemVariants}
              className="mb-8 prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-600 dark:prose-p:text-gray-300"
            >
              <p className="mb-6">{aboutMe.bio}</p>
            </motion.div>
{/* Experience */}
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold mb-6 text-primary-500 dark:text-primary-400">My Experience</h4>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-dark-100"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-dark-200"></div>
                    <span className="inline-block py-1 px-3 mb-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                      {item.year}
                    </span>
                    <h5 className="text-lg font-semibold">{item.role}</h5>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold mb-6 my-6 text-primary-500 dark:text-primary-400">My Qualification</h4>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-dark-100"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-dark-200"></div>
                    <span className="inline-block py-1 px-3 mb-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                      {item.year}
                    </span>
                    <h5 className="text-lg font-semibold">{item.course}</h5>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{item.school}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{item.grade}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
{/* Education */}


{/* fun facts */}
            {/* <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Fun Facts</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {aboutMe.funFacts.map((fact, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary-500 dark:bg-secondary-400"></span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div> */}
{/* fun facts */}

          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 order-1 lg:order-2"
          >
            <div className="sticky top-24">
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl shadow-xl mb-8 aspect-square"
              >
                <img 
                  src={MyPic} 
                  alt={aboutMe.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4">Personal Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <FiUser className="text-primary-500 dark:text-primary-400" />
                    <span><strong>Name:</strong> {aboutMe.name}</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <FiCalendar className="text-primary-500 dark:text-primary-400" />
                    <span><strong>Title:</strong> {aboutMe.title}</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <FiMapPin className="text-primary-500 dark:text-primary-400" />
                    <span><strong>Location:</strong> {aboutMe.location}</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <FiMail className="text-primary-500 dark:text-primary-400" />
                    <span><strong>Email:</strong>
                    <a href="mailto:sozarkar7@gmail.com" className='hover:text-primary-500 '> {aboutMe.email}
                    </a>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <FiLinkedin className="text-primary-500 dark:text-primary-400" />
                    <span><strong>Linkedin:</strong> 
                    <a href="https://www.linkedin.com/in/shriyansh-ozarkar/" className='hover:text-primary-500 '> {aboutMe.linkedin}</a>
                    </span>
                  </li>
                </ul>

                <div className="mt-6">
                  <a 
                    href="#contact" 
                    className="btn btn-primary w-full justify-center"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About