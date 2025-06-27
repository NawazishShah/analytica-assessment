// Contact form validation utility
export function validateContactField(name, value) {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return "";
    case "email":
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return "";
    case "phone":
      if (value.trim()) {
        const cleaned = value.replace(/[^\d]/g, "");
        if (cleaned.length < 8 || cleaned.length > 15) return "Phone number must be 8-15 digits";
        const phoneRegex = /^[+]?([\d\s\-()]){8,20}$/;
        if (!phoneRegex.test(value.trim())) {
          return "Please enter a valid phone number";
        }
      }
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      return "";
    default:
      return "";
  }
}

export function validateContactForm(formData) {
  const errors = {};
  Object.keys(formData).forEach(field => {
    const error = validateContactField(field, formData[field]);
    if (error) errors[field] = error;
  });
  return errors;
} 