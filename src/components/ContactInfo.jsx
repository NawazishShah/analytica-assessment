import React from "react";
import { motion } from "framer-motion";

const ContactInfo = ({ info, contactInfoRef, contactInfoInView }) => (
  <motion.div 
    ref={contactInfoRef}
    initial={{ opacity: 0, y: 60 }}
    animate={contactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
    transition={{ duration: 1.1, delay: 0.1 }}
    className="bg-white lg:col-span-2 rounded-xl shadow-xl p-6 lg:p-10 w-full max-w-md mx-auto lg:mx-0"
  >
    {info.map((item, idx) => (
      <div key={item.label}>
        <div className="flex items-start gap-4 lg:gap-5 pb-4 lg:pb-6">
          <div className="mt-1">{item.icon}</div>
          <div>
            <div className="font-bold text-lg lg:text-2xl text-black mb-1">{item.label}</div>
            <div className="text-gray-700 text-base lg:text-lg leading-relaxed">{item.content}</div>
          </div>
        </div>
        {idx !== info.length - 1 && (
          <hr className="border-t border-gray-200 mb-4 lg:mb-6" />
        )}
      </div>
    ))}
  </motion.div>
);

export default ContactInfo; 