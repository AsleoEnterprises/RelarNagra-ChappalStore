import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react';
import {
  STORE_NAME,
  STORE_ADDRESS,
  STORE_PHONE_NUMBER,
  STORE_EMAIL,
  GOOGLE_MAPS_URL
} from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Heritage Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#8E2828] text-[#F7E7CE] flex items-center justify-center font-serif text-base font-bold">
                R
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                {STORE_NAME}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed font-light">
              Crafting authentic Rajasthani leather Nagras, Royal Sherwani Juttis, and pure leather Kolhapuri chappals in Jaipur’s historic Bapu Bazar since 2002.
            </p>

            <div className="flex items-center gap-3 pt-1 text-xs text-stone-400">
              <span className="text-[#F7E7CE] font-semibold">Wholesale &amp; Retail</span>
              <span>·</span>
              <span>PAN-India Delivery</span>
              <span>·</span>
              <span>UPI / Cards / Cash</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Catalog Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  All Footwear Collections
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Rajasthani Khussa Nagras
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Groom Sherwani Juttis
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Pure Leather Kolhapuris
                </a>
              </li>
              <li>
                <a href="#wholesale" className="hover:text-white transition-colors">
                  Bulk Wedding Troupe Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Bapu Bazar Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bapu Bazar Showroom
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0 mt-0.5" />
                <span>{STORE_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0" />
                <a href={`tel:+${STORE_PHONE_NUMBER}`} className="hover:text-white font-mono">
                  +91 98296 98603 / +91 96493 93204
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0" />
                <a href={`mailto:${STORE_EMAIL}`} className="hover:text-white">
                  {STORE_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${STORE_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-400 font-medium"
                >
                  Direct WhatsApp: +91 98296 98603
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Relax Nagra &amp; Chappal Store, Jaipur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              Google Maps Listing
            </a>
            <span>·</span>
            <span>Bapu Bazar, Jaipur 302003</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Handcrafted with <Heart className="w-3 h-3 text-[#B33A3A] fill-current" /> in Rajasthan
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
