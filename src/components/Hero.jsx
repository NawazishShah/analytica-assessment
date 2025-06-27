import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock } from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="hero"
      className="bg-light min-h-[80vh] flex items-center justify-center py-12 md:py-16 lg:py-24 light-gradient-bg"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-500 mb-2"
          >
            Applying Data Science
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="heading h1 mb-4 lg:mb-6"
          >
            And Techniques<br className="hidden sm:block" />with Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-500 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. Kept easy or sons my it done.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            href="#about"
            className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-white text-base lg:text-lg bg-gradient-to-r from-accent to-accent-dark shadow-lg hover:from-accent-dark hover:to-accent transition"
          >
            Get Started
            <span className="inline-block bg-white/20 rounded-full p-1">
              <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
            </span>
          </motion.a>
        </div>
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <motion.img
            style={{ y: imageY, transformOrigin: 'center center' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            src="/images/hero-image.png"
            alt="Data Science Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl h-auto hover:scale-110 transition-transform duration-300 ease-out cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
