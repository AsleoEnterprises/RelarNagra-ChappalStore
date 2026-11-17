import React, { useState, useMemo } from 'react';
import { Search, Filter, RefreshCcw } from 'lucide-react';
import { Product, PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: number | string, color: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onQuickView,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<'All' | 'Men' | 'Women'>('All');
  const [selectedSize, setSelectedSize] = useState<string>('all');

  // Distinct sizes available across catalog
  const allSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    PRODUCTS.forEach((p) => {
      p.sizes.forEach((s) => sizeSet.add(String(s)));
    });
    return Array.from(sizeSet).sort((a, b) => Number(a) - Number(b));
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Gender match
      if (
        selectedGender !== 'All' &&
        product.gender !== selectedGender &&
        product.gender !== 'Unisex'
      ) {
        return false;
      }
      // Size match
      if (selectedSize !== 'all') {
        const hasSize = product.sizes.some((s) => String(s) === selectedSize);
        if (!hasSize) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesMaterial = product.materials.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesMaterial && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedGender, selectedSize, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedGender('All');
    setSelectedSize('all');
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#8E2828]">
              Jaipur Handcrafted Footwear Collection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
              Explore Our Authentic Catalog
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl font-light">
              Each pair is individually crafted from premium leather, hand-embroidered
              with royal tilla threads, and fitted with cushioned insoles for painless celebrations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search jutti, nagra, kolhapuri..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8E2828] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="py-6 space-y-4">
          
          {/* Category Tabs (Segmented controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs font-semibold'
                      : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-filters: Gender & Size */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              {/* Gender selector */}
              <div className="flex items-center gap-1 p-1 bg-white border border-stone-200 rounded-lg text-xs">
                {(['All', 'Men', 'Women'] as const).map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      selectedGender === gender
                        ? 'bg-stone-100 text-stone-900 font-semibold'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>

              {/* Size Filter Dropdown */}
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <span className="font-medium text-stone-500">Size (IND/UK):</span>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="bg-white border border-stone-200 text-stone-800 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-stone-400"
                >
                  <option value="all">All Sizes</option>
                  {allSizes.map((sz) => (
                    <option key={sz} value={sz}>
                      Size {sz}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result Count and Reset */}
            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span className="font-mono tabular-nums">
                Showing {filteredProducts.length} design{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              {(selectedCategory !== 'all' ||
                searchQuery ||
                selectedGender !== 'All' ||
                selectedSize !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[#8E2828] hover:underline font-medium"
                >
                  <RefreshCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-stone-800">
              No matching footwear found
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Try adjusting your search terms, size, or category filter to find available designs.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
