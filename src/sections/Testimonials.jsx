import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../data'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.5 } 
    }
  }

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title pb-4">Testimonials</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What others have to say about my work and collaboration experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            variants={testimonialVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900/30 flex-shrink-0">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-primary-500 dark:text-primary-400 mb-4">
                  <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                  {testimonials[currentIndex].content}
                </blockquote>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-300 shadow-md transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-500 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-300 shadow-md transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials