import royalSherwaniJuttiImg from '../assets/images/product_royal_sherwani_jutti_1792143202917.jpg';
import leatherKolhapuriImg from '../assets/images/product_leather_kolhapuri_1792143203643.jpg';
import ladiesEmbroideredJuttiImg from '../assets/images/product_ladies_embroidered_jutti_1792143203351.jpg';
import classicNagraImg from '../assets/images/product_classic_nagra_1792143224244.jpg';
import velvetEmeraldJuttiImg from '../assets/images/product_velvet_emerald_jutti_1792143223685.jpg';
import comfortChappalImg from '../assets/images/product_comfort_chappal_1792143223732.jpg';
import heroRajasthaniJuttisImg from '../assets/images/hero_rajasthani_juttis_1792143201498.jpg';

export interface Product {
  id: string;
  title: string;
  category: 'nagra' | 'sherwani-jutti' | 'kolhapuri' | 'punjabi-jutti' | 'ladies-jutti' | 'comfort-chappals';
  categoryLabel: string;
  gender: 'Men' | 'Women' | 'Unisex';
  price: number;
  mrp: number;
  image: string;
  description: string;
  materials: string;
  soleType: string;
  sizes: (number | string)[];
  colors: string[];
  isBestseller?: boolean;
  featured?: boolean;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'RN-SHER-201',
    title: 'Maharaja Zardozi Sherwani Jutti',
    category: 'sherwani-jutti',
    categoryLabel: 'Sherwani & Wedding Jutti',
    gender: 'Men',
    price: 2450,
    mrp: 3200,
    image: royalSherwaniJuttiImg,
    description: 'Regal maroon and gold wedding jutti adorned with authentic Jaipur tilla and zardozi threadwork, tailored with a curved royal khussa toe. Double-padded memory foam insole guarantees all-day comfort during baraat and wedding rituals.',
    materials: 'Pure Raw Velvet Upper, Golden Tilla Bullion Embroidery, Soft Kid Leather Lining',
    soleType: 'Hand-tooled vegetable tanned buff leather sole with bite-free cushioned footbed',
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ['Royal Maroon & Gold', 'Ivory & Antique Gold', 'Midnight Navy'],
    isBestseller: true,
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 124
  },
  {
    id: 'RN-KOL-301',
    title: 'Heritage Braided Kolhapuri Chappal',
    category: 'kolhapuri',
    categoryLabel: 'Pure Leather Kolhapuri',
    gender: 'Men',
    price: 1350,
    mrp: 1800,
    image: leatherKolhapuriImg,
    description: 'Traditional Kolhapuri chappal hand-crafted from 100% vegetable-tanned genuine leather. Features intricate hand-braided straps, burnished edges, and brass stud ornamentation that ages gracefully with every wear.',
    materials: 'Vegetable Tanned Grain Leather, Hand-woven leather thongs, Brass Accents',
    soleType: 'Authentic pressed leather sole with anti-skid rubber heel insert',
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ['Antique Tan', 'Dark Walnut Brown', 'Natural Ochre'],
    isBestseller: true,
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 210
  },
  {
    id: 'RN-LAD-401',
    title: 'Shagun Gota Patti Ladies Jutti',
    category: 'ladies-jutti',
    categoryLabel: 'Designer Ladies Jutti',
    gender: 'Women',
    price: 1650,
    mrp: 2200,
    image: ladiesEmbroideredJuttiImg,
    description: 'Exquisite blush pink raw silk Punjabi jutti encrusted with delicate pearls, dabka embellishments, and authentic Rajasthani gota patti floral motifs. Soft leather back lining prevents shoe bites.',
    materials: 'Pure Silk Base, Seed Pearls, Cutdana & Zari Hand Embroidery, Suede Collar',
    soleType: 'Ultra-flexible genuine leather sole with double foam insole',
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['Blush Pink & Gold', 'Powder Mint', 'Festive Mustard'],
    isBestseller: true,
    featured: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 178
  },
  {
    id: 'RN-NAG-101',
    title: 'Authentic Bapu Bazar Khussa Nagra',
    category: 'nagra',
    categoryLabel: 'Rajasthani Nagra',
    gender: 'Unisex',
    price: 1150,
    mrp: 1550,
    image: classicNagraImg,
    description: 'The signature classic of Jaipur’s Bapu Bazar since 2002. Hand-punched camel leather with traditional curved toe and hand-twisted cord stitching. Gets softer and contours to your foot shape after just one day.',
    materials: 'Hand-burnished Camel Leather, Heavy Waxed Linen Stitching',
    soleType: 'Hand-sewn dual-layer leather sole with arch contouring',
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ['Warm Camel Tan', 'Vintage Distressed Brown', 'Classic Black'],
    isBestseller: true,
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 340
  },
  {
    id: 'RN-SHER-202',
    title: 'Emerald Darbar Wedding Jutti',
    category: 'sherwani-jutti',
    categoryLabel: 'Sherwani & Wedding Jutti',
    gender: 'Men',
    price: 2650,
    mrp: 3500,
    image: velvetEmeraldJuttiImg,
    description: 'Opulent deep emerald green micro-velvet jutti tailored for groom sherwanis and festive galas. Embellished with heavy Rajasthani floral vine embroidery in antique matte gold wires.',
    materials: 'Imported Micro Velvet, Matte Antique Zari, Velvet-bound seams',
    soleType: 'Rigid dress leather base with internal silicone heel cushion',
    sizes: [7, 8, 9, 10, 11],
    colors: ['Deep Emerald Green', 'Midnight Jet Black', 'Deep Wine'],
    isBestseller: false,
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 88
  },
  {
    id: 'RN-COMF-501',
    title: 'Jaipur Ortho-Comfort Dual Strap Chappal',
    category: 'comfort-chappals',
    categoryLabel: 'Daily Comfort Chappals',
    gender: 'Men',
    price: 950,
    mrp: 1300,
    image: comfortChappalImg,
    description: 'Engineered for everyday durability and walking comfort. Supple oiled leather dual-straps paired with high-density ergonomic cushioned footbeds that reduce heel stress throughout the day.',
    materials: 'Milled Full-Grain Cow Leather, Padded Microfiber Upper Lining',
    soleType: 'Ergonomic shock-absorbing PU sole with deep traction tread',
    sizes: [6, 7, 8, 9, 10],
    colors: ['Espresso Brown', 'Teak Tan', 'Pitch Black'],
    isBestseller: false,
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewsCount: 96
  },
  {
    id: 'RN-PUN-601',
    title: 'Royal Embroidered Tilla Punjabi Jutti',
    category: 'punjabi-jutti',
    categoryLabel: 'Punjabi & Mojari Jutti',
    gender: 'Unisex',
    price: 1450,
    mrp: 1950,
    image: heroRajasthaniJuttisImg,
    description: 'Versatile unisex Punjabi jutti crafted with traditional flat back and rounded toe. Intricate gold thread motifs make it perfect for kurtas, pathanis, and ethnic festivities.',
    materials: 'Embroidered Raw Silk Upper, Breathable Goat Leather Lining',
    soleType: 'Flexible vegetable tanned leather with foam padding',
    sizes: [6, 7, 8, 9, 10],
    colors: ['Crimson Red & Gold', 'Antique Gold', 'Royal Blue'],
    isBestseller: false,
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 142
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Footwear' },
  { id: 'nagra', label: 'Rajasthani Nagra' },
  { id: 'sherwani-jutti', label: 'Wedding & Sherwani Jutti' },
  { id: 'kolhapuri', label: 'Pure Leather Kolhapuri' },
  { id: 'ladies-jutti', label: 'Designer Ladies Jutti' },
  { id: 'punjabi-jutti', label: 'Punjabi & Mojari' },
  { id: 'comfort-chappals', label: 'Daily Comfort Chappals' }
] as const;
