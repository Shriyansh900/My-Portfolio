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
      link: "https://www.linkedin.com/in/shriyansh26/",
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
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="max-w-lg mx-auto"
>
  <div className="bg-white dark:bg-dark-100 rounded-xl 
    shadow-lg border border-gray-200 dark:border-dark-300
    p-6"
  >
    {/* Heading */}
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
      Get in Touch
    </h3>

    {/* Contact Info */}
    <div className="space-y-4">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          
          {/* Icon */}
          <div className="w-9 h-9 flex items-center justify-center 
            rounded-full bg-blue-50 dark:bg-blue-900/20 
            text-blue-600 text-lg"
          >
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              {item.title}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="my-5 border-t border-gray-200 dark:border-dark-300" />

    {/* Social */}
    <div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Follow Me
      </p>

      <div className="flex gap-3">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-gray-100 dark:bg-dark-200
              text-gray-600 dark:text-gray-300
              hover:bg-gray-200 dark:hover:bg-dark-300
              transition"
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
