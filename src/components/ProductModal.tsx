import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Check, ShieldCheck, Ruler, Truck, Star } from 'lucide-react';
import { Product } from '../data/products';
import { createProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: number | string, color: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<number | string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [pincode, setPincode] = useState<string>('');
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);

  const discountPercent = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const whatsappUrl = createProductWhatsAppUrl(product, {
    size: selectedSize,
    color: selectedColor,
    quantity,
    pincode: pincode.trim() || undefined
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full shadow-sm backdrop-blur-sm transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Product Image */}
          <div className="relative aspect-[4/3] md:aspect-auto bg-stone-100 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md font-mono">
              Item Code: {product.id}
            </div>
          </div>

          {/* Right Column: Sizing, Ordering & Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span className="uppercase tracking-wider font-semibold text-[#8E2828]">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="font-semibold text-stone-800">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                {product.title}
              </h2>

              {/* Pricing */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-bold font-mono tabular-nums text-stone-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-mono tabular-nums text-stone-400 line-through">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-mono">
                  Save {discountPercent}%
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Material & Sole specs */}
              <div className="mt-4 p-3 bg-stone-50 rounded-xl space-y-1.5 text-xs text-stone-700 border border-stone-200/60">
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-stone-900 shrink-0">Upper:</span>
                  <span className="text-stone-600">{product.materials}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-stone-900 shrink-0">Sole:</span>
                  <span className="text-stone-600">{product.soleType}</span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-5">
                <label className="block text-xs font-semibold text-stone-900 mb-2">
                  Select Finish / Color:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                        selectedColor === color
                          ? 'bg-stone-900 text-white font-medium ring-1 ring-stone-900'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-stone-900">
                    Select Size (IND / UK):
                  </label>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[11px] text-[#8E2828] hover:underline flex items-center gap-1 font-medium"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>{showSizeGuide ? 'Hide Sizing Chart' : 'Size Guide'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                        selectedSize === size
                          ? 'bg-[#8E2828] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Sizing Help Box */}
                {showSizeGuide && (
                  <div className="mt-3 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 space-y-1">
                    <p className="font-semibold">Jaipur Footwear Size Reference:</p>
                    <p className="text-[11px] text-amber-800 leading-normal">
                      • Men: Size 7 (26 cm), Size 8 (27 cm), Size 9 (28 cm), Size 10 (29 cm).
                      <br />
                      • Ladies: Size 37 (23.5 cm), Size 38 (24 cm), Size 39 (24.5 cm).
                      <br />
                      *Rajasthani leather footwear naturally molds and expands slightly to fit your foot profile within 1-2 days of wear.
                    </p>
                  </div>
                )}
              </div>

              {/* Quantity Stepper & Optional Pincode */}
              <div className="mt-5 flex items-center gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-900 mb-1.5">
                    Quantity:
                  </label>
                  <div className="inline-flex items-center border border-stone-300 rounded-lg bg-stone-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-stone-600 hover:text-stone-900 text-sm font-semibold"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-mono font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-stone-600 hover:text-stone-900 text-sm font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-xs font-semibold text-stone-900 mb-1.5">
                    Delivery Pincode (Optional):
                  </label>
                  <div className="relative">
                    <Truck className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 302001 or 110001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-stone-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-4 border-t border-stone-200 space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl shadow-sm transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire &amp; Order on WhatsApp</span>
              </a>

              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl border transition-all ${
                  isAdded
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white hover:bg-stone-50 text-stone-900 border-stone-300'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Added to Inquiry Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-stone-700" />
                    <span>Add to Multi-Pair Inquiry Bag</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Relax Store Guarantee: 100% Genuine Leather · Safe WhatsApp Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
