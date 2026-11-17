import React, { useState } from 'react';
import { Package, MessageCircle, Sparkles, CheckCircle2, Building2 } from 'lucide-react';
import { createWholesaleWhatsAppUrl } from '../utils/whatsapp';

export const WholesaleSection: React.FC = () => {
  const [quantityTier, setQuantityTier] = useState('10 - 25 Pairs');
  const [footwearType, setFootwearType] = useState('Groomsmen & Sherwani Juttis');
  const [notes, setNotes] = useState('');

  const wholesaleUrl = createWholesaleWhatsAppUrl(
    quantityTier,
    footwearType,
    notes.trim() || undefined
  );

  return (
    <section id="wholesale" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-2xl">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8E2828]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F7E7CE] bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                <Building2 className="w-3.5 h-3.5 text-[#F7E7CE]" />
                <span>Premier Footwear Wholesaler in Jaipur</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Bulk Wedding Orders &amp; Retail Wholesaling
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                Outfitting a groom’s baraat entourage or stocking your boutique? Relax Nagra
                Store is Jaipur’s trusted wholesale partner. We manufacture and supply
                consistent size runs with custom embroidery colors to match your wedding sherwanis and themes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F7E7CE] shrink-0" />
                  <span>Wholesale discounted trade prices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F7E7CE] shrink-0" />
                  <span>Groomsmen theme color matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F7E7CE] shrink-0" />
                  <span>Custom sizes from UK 5 to UK 12</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F7E7CE] shrink-0" />
                  <span>PAN-India express door dispatch</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Quotation Builder */}
            <div className="lg:col-span-5 bg-white text-stone-900 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <Package className="w-5 h-5 text-[#8E2828]" />
                <h3 className="font-serif text-base font-bold">
                  Quick Wholesale Quotation
                </h3>
              </div>

              <div className="space-y-4 mt-4">
                {/* Quantity Tier Selector */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Estimated Order Size:
                  </label>
                  <select
                    value={quantityTier}
                    onChange={(e) => setQuantityTier(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-500"
                  >
                    <option value="10 - 25 Pairs (Groomsmen & Family)">
                      10 - 25 Pairs (Groomsmen &amp; Family)
                    </option>
                    <option value="26 - 50 Pairs (Wedding Troupe)">
                      26 - 50 Pairs (Wedding Troupe)
                    </option>
                    <option value="51 - 100 Pairs (Retailer Stock)">
                      51 - 100 Pairs (Retailer Stock)
                    </option>
                    <option value="100+ Pairs Bulk Commercial">
                      100+ Pairs Bulk Commercial
                    </option>
                  </select>
                </div>

                {/* Footwear Category */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Product Preference:
                  </label>
                  <select
                    value={footwearType}
                    onChange={(e) => setFootwearType(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-500"
                  >
                    <option value="Groomsmen & Sherwani Juttis">
                      Groomsmen &amp; Sherwani Juttis
                    </option>
                    <option value="Authentic Rajasthani Nagras">
                      Authentic Rajasthani Nagras
                    </option>
                    <option value="Pure Leather Kolhapuri Chappals">
                      Pure Leather Kolhapuri Chappals
                    </option>
                    <option value="Designer Ladies Festive Juttis">
                      Designer Ladies Festive Juttis
                    </option>
                    <option value="Mixed Assortment Catalog">
                      Mixed Assortment Catalog
                    </option>
                  </select>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Wedding Date / Destination City (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wedding in Nov, need delivery in Delhi"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-500"
                  />
                </div>

                {/* WhatsApp Trigger Button */}
                <a
                  href={wholesaleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl shadow-sm transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Request Wholesale Quotation</span>
                </a>

                <p className="text-[11px] text-stone-400 text-center">
                  Instant response directly from the store manager on WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
