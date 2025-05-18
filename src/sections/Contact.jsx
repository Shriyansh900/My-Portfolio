import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      if (data.success) {
        setSubmitResult({
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error.message || "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitResult({ success: false, message: "" });
      }, 5000);
    }
  };

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
        <a className="hover:text-blue-400" href="mailto:sozarkar7@gmail.com">
          sozarkar7@gmail.com
        </a>
      ),
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      content: (
        <a className="hover:text-blue-400" href="tel:+919009004976">
          +91 9009004976
        </a>
      ),
    },
  ];

  const socialIcons = [
    {
      social: "Github",
      icon: <FaGithub />,
      link: "https://github.com/Shriyansh900",
    },
    {
      social: "Linkedin",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/shriyansh-ozarkar/",
    },
    {
      social: "x",
      icon: <FiTwitter />,
      link: "https://x.com/Shriyansh_26",
    },
    {
      social: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/shriyansh_26/",
    },
  ];

  const inputClasses =
    "w-full px-4 py-3 bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent text-gray-700 dark:text-gray-300";

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-dark-300/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title pb-4">Contact Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration
            opportunities? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialIcons.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-300 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-colors duration-300 "
                      aria-label={`Visit my ${item.social}`}
                    >
                      <i>{item.icon}</i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Send Me a Message
              </h3>

              {submitResult.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitResult.success
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-900/30"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-900/30"
                  }`}
                >
                  {submitResult.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name Here..."
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email id"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Enter your message here.."
                    required
                    className={inputClasses}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex items-center justify-center space-x-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
