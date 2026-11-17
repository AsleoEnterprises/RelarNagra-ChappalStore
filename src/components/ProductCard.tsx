import React, { useState } from 'react';
import { MessageCircle, Eye, Plus, Check, Star } from 'lucide-react';
import { Product } from '../data/products';
import { createProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: number | string, color: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart
}) => {
  const [imageError, setImageError] = useState(false);
  const [addedRecently, setAddedRecently] = useState(false);

  const discountPercent = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes[0], product.colors[0]);
    setAddedRecently(true);
    setTimeout(() => setAddedRecently(false), 1600);
  };

  const whatsappInquiryUrl = createProductWhatsAppUrl(product);

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-white border border-stone-200/90 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-100 text-stone-500">
            <span className="font-serif text-sm font-semibold text-stone-800">
              {product.title}
            </span>
            <span className="text-xs text-stone-400 mt-1">Handcrafted Leather</span>
          </div>
        )}

        {/* Quiet Kicker Tag */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 bg-[#8E2828] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs">
            Bapu Bazar Bestseller
          </div>
        )}

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2.5 bg-white text-stone-900 hover:bg-stone-50 rounded-xl shadow-md text-xs font-semibold flex items-center gap-1.5 transition-transform active:scale-95"
            aria-label="View product details"
          >
            <Eye className="w-4 h-4 text-stone-700" />
            <span>Quick View &amp; Sizing</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Category and Gender (No pill badges) */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
            <span className="uppercase tracking-wider font-medium text-[11px] text-stone-600">
              {product.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span>{product.gender}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 line-clamp-1 group-hover:text-[#8E2828] transition-colors">
            {product.title}
          </h3>

          {/* Materials snippet */}
          <p className="text-xs text-stone-500 mt-1 line-clamp-1">
            {product.materials}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-4 pt-3.5 border-t border-stone-100">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold font-mono tabular-nums text-stone-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-mono tabular-nums text-stone-400 line-through">
                ₹{product.mrp.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 font-mono">
                {discountPercent}% OFF
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-[11px] text-stone-500">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span className="font-semibold text-stone-700 tabular-nums">
                {product.rating}
              </span>
              <span className="text-stone-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Card Button Actions */}
          <div className="mt-3.5 grid grid-cols-2 gap-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-semibold text-[#15803D] bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-lg transition-colors"
              title="Inquire directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#15803D]" />
              <span className="truncate">WhatsApp Inquiry</span>
            </a>

            <button
              onClick={handleQuickAdd}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-semibold rounded-lg transition-all ${
                addedRecently
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {addedRecently ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
