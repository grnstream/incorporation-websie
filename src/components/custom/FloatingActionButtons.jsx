import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactWidget = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '94722899111';
    const message = 'Hello! I would like to get in touch.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    // Replace with your phone number
    const phoneNumber = '+94112515756';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-1 right-2 md:right-10 md:top-1/2 transform -translate-y-1/2 z-50 flex flex-row md:flex-col gap-5">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
        
        {/* Tooltip */}
        <div className="absolute right -full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-15"></div>
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="group relative bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Call us"
      >
        <Phone size={24} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-15"></div>
      </button>
    </div>
  );
};

export default FloatingContactWidget;