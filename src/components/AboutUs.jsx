import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";

const AboutUs = () => {
  const { ref: sectionRef, isInView: sectionInView } = useSectionInView();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 relative aboutus-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-8 md:mb-12 text-center"
        >
          <p className="text-base sm:text-lg text-gray-700">
            At Analytica, our mission is to empower organizations with actionable data insights. We provide advanced analytics, real-time dashboards, and secure data solutions to help businesses make smarter, data-driven decisions and achieve sustainable growth.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.1, delay: 0.3, stagger: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-lg order-2 lg:order-1">
            <motion.img
              style={{ y: imageY, transformOrigin: 'center center' }}
              src="/images/about-us.png"
              alt="Modern office building"
              className="w-full h-full object-contain object-center hover:scale-110 transition-transform duration-300 ease-out cursor-pointer"
            />
            <div className="absolute -left-6 -top-6 w-full h-full z-0" aria-hidden="true" />
          </div>
          <div className="relative z-10 order-1 lg:order-2">
            <div className="text-gray-400 uppercase tracking-widest text-sm sm:text-base mb-2 font-semibold">Welcome to Analytica</div>
            <h2 className="heading h2 mb-4 lg:mb-6">
              We Provide Quality Analytics Service <span className="text-accent">Since 2012</span> With Pride!
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Analytica empowers organizations to unlock the full potential of their data. Our platform delivers actionable insights, beautiful dashboards, and real-time analytics to help you make smarter business decisions.
            </p>
            <p className="text-gray-700 mb-6 lg:mb-8 text-sm sm:text-base">
              With a focus on security, reliability, and customization, we partner with you to transform raw data into meaningful growth. Experience the difference of data-driven strategy with Analytica.
            </p>
            <div className="flex items-center gap-3 lg:gap-4 mt-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Jon Break"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-light"
              />
              <div>
                <div className="font-bold text-base sm:text-lg text-gray-900">Jon Break.</div>
                <div className="text-gray-500 text-xs sm:text-sm mb-1">CEO & Founder of Analytica</div>
                <div className="font-signature text-lg sm:text-xl text-accent">jon break.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 