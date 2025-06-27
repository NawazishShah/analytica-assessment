import React, { useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import useSectionInView from "../hooks/useSectionInView";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SuccessModal from "./SuccessModal";
import { validateContactField, validateContactForm } from "./contactValidation";

const info = [
  {
    label: "Email Address",
    icon: <Mail className="w-9 h-9 text-accent" />,
    content: <span>info@yourdomain.com</span>,
  },
  {
    label: "Make A Call",
    icon: <Phone className="w-9 h-9 text-accent" />,
    content: <span>+44–20–7328–4499</span>,
  },
  {
    label: "Send A Mail",
    icon: <Send className="w-9 h-9 text-accent" />,
    content: <span>info@yourdomain.com</span>,
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const { ref: contactInfoRef, isInView: contactInfoInView } = useSectionInView();
  const { ref: formRef, isInView: formInView } = useSectionInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateContactField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateContactField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const newErrors = validateContactForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStyle = (fieldName) => {
    const hasError = errors[fieldName] && touched[fieldName];
    const hasValue = formData[fieldName].trim();
    const isTouched = touched[fieldName];
    if (hasError) {
      return "border-red-500 bg-red-50 focus:border-red-500 focus:bg-red-50";
    } else if (hasValue && isTouched) {
      return "border-green-400 bg-green-50 focus:border-accent focus:bg-green-50";
    } else {
      return "border-gray-200 bg-transparent focus:border-accent focus:bg-transparent hover:border-gray-300";
    }
  };

  return (
    <>
      <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-8 items-start">
            <ContactInfo info={info} contactInfoRef={contactInfoRef} contactInfoInView={contactInfoInView} />
            <ContactForm
              formRef={formRef}
              formInView={formInView}
              formData={formData}
              errors={errors}
              touched={touched}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              getFieldStyle={getFieldStyle}
            />
          </div>
        </div>
      </section>
      <SuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  );
};

export default Contact;
