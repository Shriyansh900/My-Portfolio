import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { skills } from "../data"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All")

  // 🔹 Generate tabs dynamically from skills data
  const categories = useMemo(() => {
    const unique = new Set(skills.map((skill) => skill.category))
    return ["All", ...unique]
  }, [])

  // 🔹 Filter skills
  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab)

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-300/20">
      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title pb-4">My Skills</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === category
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white dark:bg-dark-100 rounded-xl p-6 flex flex-col items-center gap-4 shadow-md hover:shadow-xl border border-transparent hover:border-primary-200 dark:hover:border-primary-800"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                  {skill.name}
                </h3>

                {skill.level && (
                  <span className="text-xs text-primary-600 dark:text-primary-400">
                    {skill.level}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Skills
