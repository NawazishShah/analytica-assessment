import React from "react";
import "../index.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, MessageCircleCodeIcon } from "lucide-react";
import useSectionInView from "../hooks/useSectionInView";

const features = [
  {
    title: "Big Data",
    desc: "Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.",
    img: "/images/services.png",
  },
  {
    title: "Data Analytics",
    desc: "Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.",
    img: "/images/services-2.png",
  },
  {
    title: "Business Intelligence",
    desc: "Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.",
    img: "/images/services-3.png",
  },
];

const Features = () => {
  const { ref: sectionRef, isInView: sectionInView } = useSectionInView();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="features" className="py-12 md:py-16 lg:py-24 bg-[#F4F7FC] -mt-1" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16 gap-8 lg:gap-16"
        >
          <div>
            <h2 className="heading h2 mb-4 lg:mb-6 text-gray-900">We offer a wide<br className="hidden sm:block" /> range of services</h2>
            <p className="text-gray-500 max-w-lg text-sm sm:text-base">Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-white text-base lg:text-lg bg-gradient-to-r from-accent to-accent-dark shadow-lg hover:from-accent-dark hover:to-accent transition self-start lg:self-auto"
          >
            Contact Us
            <span className="inline-block bg-white/20 rounded-full p-1">
              <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
            </span>
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.1, delay: 0.3 + idx * 0.2 }}
              className="feature-card group rounded-2xl px-6 lg:px-8 py-12 lg:py-16 flex flex-col items-center text-center shadow-lg transition-all duration-300 cursor-pointer bg-white overflow-hidden"
            >
              <motion.img 
                style={{ y: imageY, transformOrigin: 'center center' }}
                src={feature.img} 
                alt={feature.title} 
                className="w-16 h-16 lg:w-20 lg:h-20 mb-4 lg:mb-6 z-10 relative hover:scale-125 transition-transform duration-300 ease-out cursor-pointer" 
              />
              <h3 className="text-lg lg:text-xl font-bold mb-2 z-10 relative feature-card-title">{feature.title}</h3>
              <p className="mb-4 lg:mb-6 text-gray-500 text-sm lg:text-base z-10 relative feature-card-desc">{feature.desc}</p>
              <a
                href="#"
                className="feature-card-btn inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition bg-gray-100 text-gray-900 z-10 relative"
              >
                <span>Let's Talk</span>
                <span className="inline-block">
                  <MessageCircleCodeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                </span>
              </a>
              <div className="feature-card-bg absolute left-0 bottom-0 w-full h-full z-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
