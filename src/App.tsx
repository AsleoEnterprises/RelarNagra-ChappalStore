/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product } from './data/products';
import { CartItem } from './utils/whatsapp';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { CraftsmanshipStory } from './components/CraftsmanshipStory';
import { WholesaleSection } from './components/WholesaleSection';
import { StoreLocation } from './components/StoreLocation';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);

  // Cart total item quantity
  const totalCartPairs = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add to inquiry bag handler
  const handleAddToCart = (
    product: Product,
    size: number | string,
    color: string,
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, size, color, quantity }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-[#8E2828] selection:text-white">
      {/* Top Header */}
      <Header
        cartCount={totalCartPairs}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero />
        <ProductCatalog
          onQuickView={(product) => setActiveQuickViewProduct(product)}
          onAddToCart={(product, size, color) => handleAddToCart(product, size, color, 1)}
        />
        <CraftsmanshipStory />
        <WholesaleSection />
        <StoreLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Product Detail & Sizing Inspection Modal */}
      <ProductModal
        product={activeQuickViewProduct}
        onClose={() => setActiveQuickViewProduct(null)}
        onAddToCart={(product, size, color, qty) => {
          handleAddToCart(product, size, color, qty);
        }}
      />

      {/* Multi-Pair Inquiry Bag Drawer */}
      <InquiryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
