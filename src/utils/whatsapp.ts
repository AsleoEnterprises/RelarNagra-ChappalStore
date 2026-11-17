import { Product } from '../data/products';

export const STORE_PHONE_NUMBER = '919829698603';
export const SECONDARY_PHONE_NUMBER = '919649393204';
export const STORE_EMAIL = 'relaxnagrajaipur@gmail.com';
export const STORE_NAME = 'Relax Nagra & Chappal Store';
export const STORE_ADDRESS = 'Near Satte Walo Ki Dharamshala, Opp. Link Road, Bapu Bazar, Jaipur, Rajasthan 302003';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Relax+Nagra+and+Chappal+Store+Bapu+Bazar+Jaipur';

export interface CartItem {
  product: Product;
  size: number | string;
  color: string;
  quantity: number;
}

/**
 * Creates a prefilled WhatsApp link for a single product inquiry.
 */
export function createProductWhatsAppUrl(
  product: Product,
  options?: {
    size?: number | string;
    color?: string;
    quantity?: number;
    pincode?: string;
    wholesale?: boolean;
  }
): string {
  const size = options?.size || product.sizes[0];
  const color = options?.color || product.colors[0];
  const qty = options?.quantity || 1;
  const isWholesale = options?.wholesale ?? false;

  const message = [
    `*Namaste Relax Nagra & Chappal Store Jaipur!* 🙏`,
    ``,
    `I would like to inquire about this footwear from your online catalog:`,
    `👞 *Product:* ${product.title}`,
    `🏷️ *Item Code:* ${product.id}`,
    `💰 *Price:* ₹${product.price.toLocaleString('en-IN')}`,
    `📏 *Selected Size:* ${size}`,
    `🎨 *Color Finish:* ${color}`,
    `📦 *Quantity:* ${qty} pair${qty > 1 ? 's' : ''}`,
    isWholesale ? `🏢 *Inquiry Type:* Wholesale / Bulk Order` : `🛍️ *Inquiry Type:* Retail Order`,
    options?.pincode ? `📍 *Delivery Pincode:* ${options.pincode}` : '',
    ``,
    `Please share availability, delivery time, and payment details. Thank you!`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a prefilled WhatsApp link for multiple items in the inquiry bag.
 */
export function createCartWhatsAppUrl(
  items: CartItem[],
  pincode?: string,
  customerName?: string
): string {
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalPairs = items.reduce((acc, item) => acc + item.quantity, 0);

  const itemList = items
    .map(
      (item, index) =>
        `${index + 1}. *${item.product.title}* (${item.product.id})\n   • Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity} pair${item.quantity > 1 ? 's' : ''} | ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
    )
    .join('\n\n');

  const message = [
    `*Namaste Relax Nagra Store Jaipur!* 🙏`,
    customerName ? `Order Inquiry from: *${customerName}*` : `New Order Inquiry from Website`,
    ``,
    `I have selected *${totalPairs} pair${totalPairs > 1 ? 's' : ''}* from your catalog:`,
    ``,
    itemList,
    ``,
    `🧾 *Estimated Subtotal:* ₹${totalPrice.toLocaleString('en-IN')}`,
    pincode ? `📍 *Delivery Pincode:* ${pincode}` : `📍 *Delivery:* PAN-India Courier`,
    ``,
    `Please confirm stock availability and send UPI/payment details to proceed with dispatch.`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates WhatsApp link for Wholesale / Wedding Bulk inquiries.
 */
export function createWholesaleWhatsAppUrl(
  estimatedPairs: string,
  categoryType: string,
  notes?: string
): string {
  const message = [
    `*Namaste Relax Nagra & Chappal Store Jaipur!* 🙏`,
    `I am inquiring about a *Wholesale / Bulk Order* from Bapu Bazar:`,
    ``,
    `📦 *Estimated Quantity:* ${estimatedPairs || '20+ Pairs'}`,
    `👞 *Footwear Category:* ${categoryType || 'Mixed Nagras & Sherwani Juttis'}`,
    notes ? `📝 *Requirements:* ${notes}` : '',
    ``,
    `Please share your wholesale price catalog and dispatch terms.`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
