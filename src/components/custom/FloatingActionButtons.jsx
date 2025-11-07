import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router';

const FloatingContactWidget = () => {
  const location = useLocation();
  if (location.pathname === '/incobot') {
    return null;
  }
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '+94722899111';
    const message = 'Hello! I would like to get in touch.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+94112223326';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
     <div className="fixed bottom-4 right-4 md:bottom-auto md:right-10 md:top-1/2 md:transform md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-3 md:gap-5 justify-center">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
        
        {/* Tooltip - positioned above on mobile, left on desktop */}
        <div className="absolute bottom-full mb-2 right-1/2 transform -translate-x-1/2 md:bottom-auto md:mb-0 md:right-full md:mr-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 bg-gray-800 text-white text-xs md:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-15"></div>
      </button>
      
      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="group relative bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        
        {/* Tooltip - positioned above on mobile, left on desktop */}
        <div className="absolute bottom-full mb-2 right-1/2 transform -translate-x-1/2 md:bottom-auto md:mb-0 md:right-full md:mr-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 bg-gray-800 text-white text-xs md:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Now
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-15"></div>
      </button>
    </div>
  );
};

export default FloatingContactWidget;