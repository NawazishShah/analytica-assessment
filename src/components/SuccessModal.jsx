import React from "react";
import { Check } from "lucide-react";

const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-8 max-w-md w-full mx-4 transform transition-all">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-green-100 mb-4 lg:mb-6">
            <Check className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Message Sent Successfully!</h3>
          <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal; 