import { motion } from "framer-motion"
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      content: "Indore, India",
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      content: (
        <a
          href="mailto:sozarkar7@gmail.com"
          className="hover:text-primary-500"
        >
          sozarkar7@gmail.com
        </a>
      ),
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      content: (
        <a href="tel:+919009004976" className="hover:text-primary-500">
          +91 9009004976
        </a>
      ),
    },
  ]

  const socialIcons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Shriyansh900",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/shriyansh-ozarkar/",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter />,
      link: "https://x.com/Shriyansh_26",
      label: "Twitter",
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/shriyansh_26/",
      label: "Instagram",
    },
  ]

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-dark-300/20">
      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title pb-4">Contact Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Get in Touch Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialIcons.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-200
                    hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300
                    transition-colors duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
