import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { aboutMe } from "../data";
import { IoMdDownload } from "react-icons/io";
import MyPic from "../assets/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075259.webp";

const Hero = () => {
  const scrollToNextSection = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-black dark:to-blue-900/10"></div>
        {/* Abstract shapes */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-400/5"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-secondary-400/10 blur-3xl dark:bg-secondary-400/5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span
                
                className=" inline-block py-1 px-3 mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
              >
                <p>Full Stack Developer</p>
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I'm&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                {aboutMe.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-secondary-500 dark:text-secondary-400">
                Full Stack Developer
              </span>
              <span className="mx-1">crafting</span>
              <span className="text-primary-500 dark:text-primary-400">
                responsive web and mobile apps
              </span>
              <span className="mx-1">with modern tech. Passionate about</span>
              <span className="text-secondary-500 dark:text-secondary-400">
                clean code, UX, and innovation
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#portfolio" className="btn btn-outline">
                View My Work
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1xWrCg2kj19KYgKv5uzAEiOy4N5D_yuT_/view?usp=sharing"
                className="btn btn-outline items-center flex align-middle justify-center space-x-1 px-10"
              >
                <p>Resume</p>
                <IoMdDownload className="text-xl  font-bold" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-white dark:border-dark-100 shadow-xl">
              <img
                src={MyPic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          onClick={scrollToNextSection}
        >
          <FiArrowDown className="text-3xl text-gray-400 hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400 transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
