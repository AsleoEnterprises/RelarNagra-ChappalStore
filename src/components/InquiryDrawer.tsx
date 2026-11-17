import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem, createCartWhatsAppUrl } from '../utils/whatsapp';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [pincode, setPincode] = useState('');

  const totalAmount = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const totalPairs = items.reduce((acc, item) => acc + item.quantity, 0);

  const whatsappCheckoutUrl = createCartWhatsAppUrl(
    items,
    pincode.trim() || undefined,
    customerName.trim() || undefined
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      {/* Drawer Container */}
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8E2828]" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Inquiry Bag ({totalPairs} pair{totalPairs !== 1 ? 's' : ''})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}-${index}`}
                className="flex gap-3.5 p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70"
              >
                {/* Thumbnail */}
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-18 h-18 object-cover rounded-xl bg-stone-200 shrink-0"
                  referrerPolicy="no-referrer"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">
                        {item.product.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-stone-400 hover:text-rose-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[11px] text-stone-500 mt-0.5">
                      <span>Size: UK {item.size}</span>
                      <span className="mx-1">·</span>
                      <span>{item.color}</span>
                    </div>
                  </div>

                  {/* Quantity & Item Subtotal */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/50">
                    <div className="inline-flex items-center border border-stone-300 rounded-md bg-white">
                      <button
                        onClick={() =>
                          onUpdateQuantity(index, Math.max(1, item.quantity - 1))
                        }
                        className="px-2 py-0.5 text-xs text-stone-600 hover:text-stone-900"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:text-stone-900"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-mono font-bold text-xs text-stone-900 tabular-nums">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h4 className="font-serif text-base font-bold text-stone-800">
                Your inquiry bag is empty
              </h4>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Select your favorite Nagras, Juttis or Kolhapuris from the catalog to bundle them into a single WhatsApp inquiry.
              </p>
              <button
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer / WhatsApp Dispatch */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50/80 space-y-4">
            {/* Customer Inputs */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-500"
              />
              <input
                type="text"
                placeholder="Delivery Pincode / City (Optional)"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-500"
              />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-medium text-stone-600">Estimated Total:</span>
              <span className="text-xl font-bold font-mono text-stone-900 tabular-nums">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl shadow-sm transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send {totalPairs} Pair Inquiry to WhatsApp</span>
              </a>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-stone-400 hover:text-stone-600 py-1"
              >
                Clear all items
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
