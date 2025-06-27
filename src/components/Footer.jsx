import React, { useState, useEffect } from "react";
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram, 
  CircleDot, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Data Visualization",
  "Predictive Analytics",
  "Real-time Insights",
  "Custom Reporting",
  "Machine Learning",
  "Business Intelligence",
];

const social = [
  { 
    href: "#", 
    icon: <Facebook className="w-5 h-5" />, 
    name: "Facebook",
    color: "hover:bg-blue-600 hover:text-white"
  },
  { 
    href: "#", 
    icon: <Twitter className="w-5 h-5" />, 
    name: "Twitter",
    color: "hover:bg-sky-500 hover:text-white"
  },
  { 
    href: "#", 
    icon: <Youtube className="w-5 h-5" />, 
    name: "YouTube",
    color: "hover:bg-red-600 hover:text-white"
  },
  { 
    href: "#", 
    icon: <Instagram className="w-5 h-5" />, 
    name: "Instagram",
    color: "hover:bg-pink-600 hover:text-white"
  },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { ref: footerRef, isInView: footerInView } = useSectionInView();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-50 to-white pt-16 lg:pt-20 pb-8 lg:pb-12 overflow-hidden">

      <div className="absolute inset-0 bg-[url('/images/shape-2.svg')] bg-no-repeat bg-bottom bg-contain opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 lg:pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 mb-6">
              <CircleDot className="w-10 h-10 text-accent" />
              <span className="font-extrabold text-2xl text-gray-900">ANALYTICA</span>
            </motion.div>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              Empowering organizations with actionable data insights. We provide advanced analytics, 
              real-time dashboards, and secure data solutions to help businesses make smarter decisions.
            </p>
            <div className="flex gap-3">
              {social.map((socialItem, index) => (
                <motion.a
                  key={socialItem.name}
                  href={socialItem.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-md text-gray-600 transition-all duration-300 ${socialItem.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialItem.name}
                >
                  {socialItem.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg lg:text-xl text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-300 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg lg:text-xl text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <span className="flex items-center gap-2 text-gray-600 group">
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg lg:text-xl text-gray-900 mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <a href="mailto:support@analytica.com" className="text-gray-700 hover:text-accent transition-colors duration-300">
                    support@analytica.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                  <a href="tel:+44-20-7328-4499" className="text-gray-700 hover:text-accent transition-colors duration-300">
                    +44–20–7328–4499
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Office Address</p>
                  <p className="text-gray-700">
                    123 Business Street<br />
                    London, UK SW1A 1AA
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-gray-600"
            >
              © 2025 Analytica. All rights reserved. Made with ❤️ for data-driven success.
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 text-sm"
            >
              <a href="#" className="text-gray-600 hover:text-accent transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors duration-300">Cookie Policy</a>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
