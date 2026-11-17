import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent('Namaste Relax Nagra Store Jaipur! I want to inquire about footwear in your catalog.')}`;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Inquiry with Relax Nagra Store"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#15803D] hover:bg-[#166534] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Order on WhatsApp
        </span>
      </a>
    </div>
  );
};
