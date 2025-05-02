import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/Shriyansh900', label: 'GitHub' },
    { icon: <FiTwitter />, href: 'https://x.com/Shriyansh_26', label: 'Twitter' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/shriyansh-ozarkar/', label: 'LinkedIn' },
    { icon: <FiInstagram />, href: 'https://www.instagram.com/shriyansh_26/', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-dark-100 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="flex flex-col">
              <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                Portfolio
              </a>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Crafting digital experiences that blend creativity with functionality
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-xl transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer