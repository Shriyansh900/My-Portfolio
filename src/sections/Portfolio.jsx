import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);

    if (category === 'All') {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects.filter(
      (project) => project.category === category,
    );
    setFilteredProjects(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
          <h2 className="section-title pb-4">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore projects that highlight my journey of transforming ideas
            into dynamic, user-centered applications.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          >
            {filteredProjects.map((project) => (
            <motion.div
  key={project.id}
  variants={itemVariants}
  className="group rounded-xl overflow-hidden bg-white dark:bg-dark-100 shadow-md hover:shadow-lg transition-all duration-300"
>
  {/* IMAGE */}
  <div className="overflow-hidden aspect-video">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  {/* CONTENT */}
  <div className="p-5 flex flex-col gap-4">
    {/* TITLE */}
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
      {project.title}
    </h3>

    {/* BUTTONS */}
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 transition"
          >
            <FiGithub /> GitHub
          </a>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition"
          >
            <FiExternalLink /> View
          </a>
        )}
      </div>

      {/* READ MORE */}
<button
  onClick={() =>
    setExpandedId(expandedId === project.id ? null : project.id)
  }
  className="text-sm text-primary-500 hover:underline"
>
  {expandedId === project.id ? 'Show Less' : 'Read More...'}
</button>
    </div>

    {/* OPTIONAL SHORT DESC */}
  <p
  className={`text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${
    expandedId === project.id ? '' : 'line-clamp-2'
  }`}
>
  {project.description}
</p>
  </div>
</motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
