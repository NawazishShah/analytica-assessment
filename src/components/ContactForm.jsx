import React from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";

const ContactForm = ({
  formRef,
  formInView,
  formData,
  errors,
  touched,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  getFieldStyle
}) => (
  <motion.div 
    ref={formRef}
    initial={{ opacity: 0, y: 60 }}
    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
    transition={{ duration: 1.1, delay: 0.3 }}
    className="lg:col-span-3"
  >
    <h2 className="heading h2 mb-8 lg:mb-12 text-black">Send a message</h2>
    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex-1">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-3 border-b-2 transition-all duration-300 outline-none text-base lg:text-lg ${getFieldStyle('name')}`}
            required
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-3 border-b-2 transition-all duration-300 outline-none text-base lg:text-lg ${getFieldStyle('email')}`}
            required
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-3 border-b-2 transition-all duration-300 outline-none text-base lg:text-lg ${getFieldStyle('phone')}`}
          />
          {errors.phone && touched.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Tell Us About Project *"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-3 border-b-2 transition-all duration-300 outline-none text-base lg:text-lg resize-none ${getFieldStyle('message')}`}
          required
        />
        {errors.message && touched.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out transform font-bold text-base lg:text-lg text-black ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:border-accent hover:bg-gray-50'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-3 h-4 w-4 lg:h-5 lg:w-5 text-accent" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span className="inline-flex items-center justify-center w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-accent text-white">
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </span>
          </>
        )}
      </button>
    </form>
  </motion.div>
);

export default ContactForm; 