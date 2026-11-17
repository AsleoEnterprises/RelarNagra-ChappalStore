import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Menu, X, Phone, MapPin } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../utils/whatsapp';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Top micro announcement bar */}
      <div className="bg-[#1C1917] text-stone-200 text-xs py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <span className="hidden sm:inline font-light tracking-wide text-stone-300">
            Heritage Footwear from Bapu Bazar, Jaipur · Est. 2002
          </span>
          <span className="mx-auto sm:mx-0 font-medium text-[#F7E7CE]">
            Wedding Orders &amp; PAN-India WhatsApp Delivery
          </span>
          <div className="hidden md:flex items-center gap-4 text-stone-300 font-mono text-[11px]">
            <a
              href={`tel:+${STORE_PHONE_NUMBER}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E29D52]" />
              +91 98296 98603
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-zone Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-full bg-[#8E2828] text-[#F7E7CE] flex items-center justify-center font-serif text-lg font-bold shadow-sm ring-1 ring-[#8E2828]/20 group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
              Relax Nagra Store
            </span>
            <span className="text-[10px] tracking-wider uppercase text-stone-500 font-medium">
              Jaipur Handcrafted Footwear
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#catalog"
            className="hover:text-[#8E2828] transition-colors whitespace-nowrap shrink-0"
          >
            Footwear Catalog
          </a>
          <a
            href="#craftsmanship"
            className="hover:text-[#8E2828] transition-colors whitespace-nowrap shrink-0"
          >
            Artisan Heritage
          </a>
          <a
            href="#wholesale"
            className="hover:text-[#8E2828] transition-colors whitespace-nowrap shrink-0"
          >
            Wholesale &amp; Weddings
          </a>
          <a
            href="#visit-store"
            className="hover:text-[#8E2828] transition-colors whitespace-nowrap shrink-0"
          >
            Visit Bapu Bazar
          </a>
        </nav>

        {/* Zone 3: Actions (Cart & Direct WhatsApp) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="Open Inquiry Bag"
            className="relative p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8E2828] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href={`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent('Namaste Relax Nagra Store Jaipur! I want to inquire about footwear in your catalog.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg shadow-sm transition-all hover:shadow active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Inquiry</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 md:hidden rounded-lg hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF7F2] px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8E2828]"
            >
              Footwear Catalog
            </a>
            <a
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8E2828]"
            >
              Artisan Heritage
            </a>
            <a
              href="#wholesale"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8E2828]"
            >
              Wholesale &amp; Wedding Bulk
            </a>
            <a
              href="#visit-store"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8E2828]"
            >
              Store Location &amp; Directions
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent('Namaste Relax Nagra Store Jaipur! I want to inquire about footwear in your catalog.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:+${STORE_PHONE_NUMBER}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-stone-700 border border-stone-300 rounded-lg hover:bg-stone-50"
            >
              <Phone className="w-4 h-4 text-stone-500" />
              Call +91 98296 98603
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
