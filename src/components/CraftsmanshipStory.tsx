import React from 'react';
import { Award, Compass, HeartHandshake, Layers } from 'lucide-react';
import storeBapuBazarCraftImg from '../assets/images/store_bapu_bazar_craft_1792143203753.jpg';

export const CraftsmanshipStory: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-16 md:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image of Artisan in Jaipur */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-stone-900/10 bg-stone-100 aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={storeBapuBazarCraftImg}
                alt="Master footwear artisan hand-stitching traditional Rajasthani Nagra in Bapu Bazar Jaipur"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs font-mono uppercase tracking-widest text-[#F7E7CE]">
                  Artisan Cobbler Heritage
                </p>
                <h3 className="font-serif text-xl font-bold">
                  Bapu Bazar, Jaipur · Est. 2002
                </h3>
                <p className="text-xs text-stone-200 font-light leading-relaxed">
                  Every pair carries the legacy of generational hand-tooled leather craft and genuine needle embroidery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Story and Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#8E2828]">
                24+ Years of Footwear Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1 leading-tight">
                Authentic Craftsmanship from the Heart of the Pink City
              </h2>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Nestled near Satte Walo Ki Dharamshala in Jaipur's world-famous Bapu Bazar,
                <strong> Relax Nagra &amp; Chappal Store</strong> has been crafting authentic
                Rajasthani footwear since 2002. Led by the Dinani family, our workshop unites
                centuries-old shoemaking heritage with contemporary ergonomic comfort.
              </p>
            </div>

            {/* 4 Pillars of Craft */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#8E2828] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    100% Genuine Buff &amp; Camel Leather
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Naturally vegetable-tanned, breathable leather that softens and molds uniquely to each wearer’s foot contours.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#8E2828] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    Bite-Free Cushioned Comfort
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Unlike stiff mass-produced juttis, our pairs feature double-padded foam insoles and smooth kid-leather collars to prevent blisters.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#8E2828] flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    Royal Tilla &amp; Zardozi Needling
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Intricate hand-embroidered metallic threads, gota patti work, and dabka art made specifically to complement royal sherwanis and lehengas.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#8E2828] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    Wholesale Trust Across India
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Trusted supplier for wedding planners, groomsmen troupes, and boutique retail stores with express shipping to all states.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-stone-200/80 flex items-center justify-around text-center">
              <div>
                <span className="font-mono text-2xl font-bold text-stone-900 tabular-nums">
                  2002
                </span>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider mt-0.5">
                  Year Established
                </p>
              </div>
              <div className="w-px h-8 bg-stone-200" />
              <div>
                <span className="font-mono text-2xl font-bold text-stone-900 tabular-nums">
                  10,000+
                </span>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider mt-0.5">
                  Happy Customers
                </p>
              </div>
              <div className="w-px h-8 bg-stone-200" />
              <div>
                <span className="font-mono text-2xl font-bold text-[#8E2828] tabular-nums">
                  100%
                </span>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider mt-0.5">
                  Handcrafted In Jaipur
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
