import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Truck, Star } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../utils/whatsapp';
import heroRajasthaniJuttisImg from '../assets/images/hero_rajasthani_juttis_1792143201498.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 bg-stone-100/90 border border-stone-200/80 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#B33A3A]" />
              <span>Bapu Bazar, Jaipur · Handcrafting Footwear Since 2002</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
              The Royal Heritage of Rajasthani Nagras &amp; Handcrafted Juttis
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-light">
              Relax Nagra &amp; Chappal Store brings you Jaipur's finest hand-stitched
              leather footwear. From majestic groom sherwani juttis to pure leather
              Kolhapuris, crafted with double-cushioned bite-free soles for celebratory ease.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#8E2828] hover:bg-[#722020] rounded-xl shadow-sm transition-all hover:shadow active:scale-98"
              >
                <span>Explore Footwear Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent('Namaste Relax Nagra Store! I want to inquire about custom footwear and sizing from your Jaipur store.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl shadow-xs transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-[#15803D] fill-[#15803D]" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Social Proof & GMB rating preview */}
            <div className="pt-4 flex items-center gap-6 text-xs text-stone-500 border-t border-stone-200/80">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-stone-800 tabular-nums">4.8 / 5.0</span>
                <span className="text-stone-400">on Google Business</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="hidden sm:inline-flex items-center gap-1.5 text-stone-600">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Genuine Leather &amp; Hand-stitching</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Res Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-stone-900/10 bg-stone-100 aspect-[4/3] lg:aspect-[5/4]">
              <img
                src={heroRajasthaniJuttisImg}
                alt="Handcrafted Rajasthani Nagra and Embroidered Groom Juttis in Jaipur"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Image Overlaid Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/90 backdrop-blur-md rounded-xl border border-white/50 text-stone-800 shadow-md">
                <p className="text-xs font-serif font-bold text-stone-900">
                  Signature Jaipur Nagra &amp; Royal Wedding Khussa
                </p>
                <p className="text-[11px] text-stone-600 font-light mt-0.5">
                  Hand-embroidered zardozi, pure leather sole &amp; soft bite-free lining.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Feature Strip */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-stone-800">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8E2828]/10 text-[#8E2828] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Double-Padded Insole
              </h4>
              <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                Bite-free memory foam padding designed for painless wear during events.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8E2828]/10 text-[#8E2828] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                100% Buff Leather
              </h4>
              <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                Authentic vegetable-tanned leather soles that shape naturally to feet.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8E2828]/10 text-[#8E2828] flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Direct WhatsApp Dispatch
              </h4>
              <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                Order directly from store inventory with PAN-India express courier.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8E2828]/10 text-[#8E2828] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-[#15803D]" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Wholesale &amp; Retail
              </h4>
              <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                Special bulk rates for wedding groomsmen sets and boutique stockists.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
