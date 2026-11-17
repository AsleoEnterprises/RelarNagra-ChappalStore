import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Star, ShieldCheck, CreditCard } from 'lucide-react';
import {
  STORE_NAME,
  STORE_ADDRESS,
  STORE_PHONE_NUMBER,
  SECONDARY_PHONE_NUMBER,
  STORE_EMAIL,
  GOOGLE_MAPS_URL
} from '../utils/whatsapp';

export const StoreLocation: React.FC = () => {
  return (
    <section id="visit-store" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#8E2828]">
            Google Business Profile &amp; Physical Store
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
            Visit Us in Historic Bapu Bazar
          </h2>
          <p className="text-sm text-stone-600 mt-2 font-light">
            Experiencing the leather and embroidery in person is a delight. Walk into our Jaipur showroom or connect with us on WhatsApp for doorstep delivery across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Store Info & Contacts Card */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-stone-200/90 space-y-6">
            
            {/* GMB Rating Banner */}
            <div className="flex items-center justify-between pb-5 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-stone-200 flex items-center justify-center text-amber-500 font-bold text-lg">
                  4.8
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 font-medium">
                    Google Business Verified Profile
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                Open Today
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#8E2828] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Store Address
                </h4>
                <p className="text-sm text-stone-700 mt-1 leading-snug">
                  {STORE_NAME}
                  <br />
                  {STORE_ADDRESS}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Landmark: Opposite Link Road &amp; Near Satte Walo Ki Dharamshala
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Store Timings
                </h4>
                <p className="text-sm text-stone-700 mt-1">
                  Monday – Sunday: <span className="font-semibold">10:30 AM – 9:00 PM</span>
                </p>
                <p className="text-xs text-emerald-700 mt-0.5 font-medium">
                  Open 7 Days a week for retail &amp; wholesale visits
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Call / WhatsApp Numbers
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm font-mono text-stone-800">
                  <a href={`tel:+${STORE_PHONE_NUMBER}`} className="hover:text-[#8E2828]">
                    +91 98296 98603
                  </a>
                  <a href={`tel:+${SECONDARY_PHONE_NUMBER}`} className="hover:text-[#8E2828]">
                    +91 96493 93204
                  </a>
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Email: <a href={`mailto:${STORE_EMAIL}`} className="underline hover:text-stone-800">{STORE_EMAIL}</a>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#8E2828] hover:bg-[#722020] text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:+${STORE_PHONE_NUMBER}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 rounded-xl text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Payment Acceptance */}
            <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-stone-400" />
                <span>UPI, Cash, Paytm, PhonePe, Cards, Net Banking</span>
              </div>
              <span className="font-semibold text-stone-700">GST Invoices</span>
            </div>

          </div>

          {/* Interactive Google Map Preview / Guide */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
            
            {/* Visual Map Header */}
            <div className="p-4 bg-stone-100/80 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8E2828]" />
                <span className="text-xs font-semibold text-stone-800">
                  Jaipur Bapu Bazar Location Map
                </span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#8E2828] hover:underline"
              >
                View Full Map →
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-100">
              <iframe
                title="Relax Nagra and Chappal Store Location in Bapu Bazar Jaipur"
                src="https://www.google.com/maps?q=Relax+Nagra+and+Chappal+Store,+Bapu+Bazar,+Jaipur,+Rajasthan+302003&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Patrons & Reviews Highlights */}
            <div className="p-5 bg-stone-50/70 border-t border-stone-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Customer Feedback from Google Business Profile
              </h4>
              
              <div className="space-y-2.5 text-xs text-stone-600">
                <blockquote className="p-2.5 bg-white rounded-lg border border-stone-200/80 italic">
                  "Bought 14 pairs of Sherwani juttis for my brother's wedding troupe. The fit, velvet finish, and cushioned insole were top class. Mr. Dinani arranged everything promptly on WhatsApp!"
                  <span className="block not-italic font-semibold text-stone-800 text-[11px] mt-1">
                    — Gaurav S., Delhi
                  </span>
                </blockquote>

                <blockquote className="p-2.5 bg-white rounded-lg border border-stone-200/80 italic">
                  "Best genuine leather Kolhapuris and Nagras in Bapu Bazar. Have been buying here since 2012 whenever I visit Jaipur."
                  <span className="block not-italic font-semibold text-stone-800 text-[11px] mt-1">
                    — Rakesh Verma, Mumbai
                  </span>
                </blockquote>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
