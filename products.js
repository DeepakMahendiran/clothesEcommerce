// BrickThreads E-Commerce Product Database
// 60 Unique Products: 20 Men, 20 Women, 20 Kids

export const products = [
  // ==================== MEN'S CATEGORY (1-20) ====================
  {
    id: "m1",
    name: "Classic Indigo Denim Jacket",
    price: 2499,
    rating: 4.8,
    reviewCount: 124,
    badge: "Exclusives",
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1505632951788-751737a28f9a?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505632951788-751737a28f9a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Classic Indigo", "Dark Wash", "Off-Black"],
    description: "Crafted from premium heavy-weight cotton denim. Featuring structured seams, buttoned chest pockets, and adjustable waist tabs. A rugged layer built for durability and timeless appeal.",
    features: ["100% Organic Cotton Denim", "Reinforced double-stitch seams", "Branded metal buttons", "Inner slip pockets"]
  },
  {
    id: "m2",
    name: "Sleek Charcoal Wool Blazer",
    price: 4999,
    rating: 4.9,
    reviewCount: 88,
    badge: "New",
    category: "men",
    subCategory: "Blazers",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Charcoal Grey", "Navy Blue", "Off-Black"],
    description: "Elevate your wardrobe with this sharp wool-blend blazer. Designed with notch lapels, a double-vented back, and a tailored slim fit. Perfect for transition from desk to dinner.",
    features: ["70% Wool, 30% Polyester", "Premium satin lining", "Internal passport pocket", "Functional button cuffs"]
  },
  {
    id: "m3",
    name: "Vintage Biker Leather Jacket",
    price: 6999,
    rating: 4.7,
    reviewCount: 201,
    badge: "Exclusives",
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Midnight Black", "Distressed Brown"],
    description: "An iconic silhouette made from authentic top-grain leather. Finished with asymmetrical heavy-duty zippers, snap-down lapels, and quilted shoulder panels for a classic rebel style.",
    features: ["100% Genuine Lambskin Leather", "YKK metal hardware", "Quilted polyester lining", "Zippered sleeve cuffs"]
  },
  {
    id: "m4",
    name: "Heritage Cable Knit Sweater",
    price: 2799,
    rating: 4.6,
    reviewCount: 65,
    badge: "New",
    category: "men",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oatmeal Heather", "Forest Green", "Lego Navy"],
    description: "Warm, textured, and styled for comfort. This crewneck sweater features a classic cable pattern stitch, ribbed collar, and cuffs. Knit from a soft, premium wool-cotton blend.",
    features: ["60% Cotton, 40% Merino Wool", "Traditional cable knit design", "Rib-knit hem and cuffs", "Breathable insulating fabric"]
  },
  {
    id: "m5",
    name: "Luxury Oxford Cotton Shirt",
    price: 1899,
    rating: 4.5,
    reviewCount: 142,
    badge: "Offer",
    category: "men",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1620012253295-c05518e99309?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620012253295-c05518e99309?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Snow White", "Sky Blue", "Pale Yellow"],
    description: "The ultimate formal-casual crossover. Made with premium Oxford weave cotton that gets softer with every wash. Tailored with a button-down collar and box pleat back.",
    features: ["100% Long-Staple Oxford Cotton", "Button-down collar points", "Chest patch pocket", "Curved hemline for tucking"]
  },
  {
    id: "m6",
    name: "Urban Explorer Trench Coat",
    price: 5499,
    rating: 4.8,
    reviewCount: 79,
    badge: "Exclusives",
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Khaki Beige", "Lego Navy", "Off-Black"],
    description: "A water-repellent, double-breasted trench coat offering maximum elements protection. Featuring a removable belt, adjustable storm cuffs, and deep diagonal welt pockets.",
    features: ["Water-resistant polyester-cotton shell", "Double-breasted front button lapels", "Waist belt with buckle", "Shoulder epaulets"]
  },
  {
    id: "m7",
    name: "Tailored Camel Hair Blazer",
    price: 4599,
    rating: 4.8,
    reviewCount: 92,
    badge: null,
    category: "men",
    subCategory: "Blazers",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel Brown", "Sandy Beige"],
    description: "Premium unstructured blazer crafted from luxurious Camel-color woven fabric. Soft shoulder pads and patch pockets create a relaxed yet smart European silhouette.",
    features: ["Viscose-Wool luxury blend", "Patch pockets at sides", "Two-button front closure", "Unlined back for breathability"]
  },
  {
    id: "m8",
    name: "Sunset Red Linen Shirt",
    price: 1699,
    rating: 4.4,
    reviewCount: 110,
    badge: "Offer",
    category: "men",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sunset Red", "Ocean Blue", "Linen White"],
    description: "Beat the heat in our premium breathable linen shirt. Pre-washed for extra softness, this shirt features roll-up sleeves with button tabs and a comfortable relaxed fit.",
    features: ["100% Pure Flax Linen", "Breathable, open-weave structure", "Chest utility pockets", "Convertible cuffs"]
  },
  {
    id: "m9",
    name: "Presidential Navy Blue Suit",
    price: 8999,
    rating: 5.0,
    reviewCount: 45,
    badge: "Exclusives",
    category: "men",
    subCategory: "Suits",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Presidential Navy", "Off-Black"],
    description: "A two-piece formal suit constructed from super-100s combed wool. The blazer features peak lapels and structural shoulders, paired with straight-cut flat-front trousers.",
    features: ["100% Super-100s Wool", "Trousers with unhemmed bottoms", "Full-canvas inner construction", "Breathable cupra lining"]
  },
  {
    id: "m10",
    name: "Yellow Brick Rain Parka",
    price: 3499,
    rating: 4.7,
    reviewCount: 78,
    badge: "New",
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["LEGO Yellow", "Deep Forest Green"],
    description: "Stand out in wet weather. This waterproof parka features fully taped seams, a drawstring hood, storm flap zipper coverage, and a bright, vibrant LEGO yellow shell.",
    features: ["100% Recycled Nylon Waterproof Shell", "Taped inner seams", "Adjustable toggle hood", "Dual double-access side pockets"]
  },
  {
    id: "m11",
    name: "Tactical Forest Bomber Jacket",
    price: 2999,
    rating: 4.6,
    reviewCount: 98,
    badge: null,
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505632951788-751737a28f9a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green", "Midnight Black"],
    description: "Classic military MA-1 inspired bomber jacket. High-density satin polyester provides wind and light rain resistance, featuring utility arm pockets and ribbed neck collar.",
    features: ["100% Water-repellent Satin Polyester", "Rib-knit collar, cuffs, and hem", "Utility zipper sleeve pocket", "Snap closure hand pockets"]
  },
  {
    id: "m12",
    name: "Modern Executive Navy Blazer",
    price: 3999,
    rating: 4.7,
    reviewCount: 66,
    badge: null,
    category: "men",
    subCategory: "Blazers",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Lego Navy", "Graphite Grey"],
    description: "Classic unstructured knit blazer. Crafted with double-face cotton-poly blend jersey that offers the sharp look of a blazer with the comfortable stretch of a cardigan.",
    features: ["65% Cotton, 35% Stretch Polyester", "Two-button notch lapel style", "Double patch pockets", "Stretchy comfortable fit"]
  },
  {
    id: "m13",
    name: "Premium Khaki Chino Trousers",
    price: 1999,
    rating: 4.5,
    reviewCount: 154,
    badge: "Offer",
    category: "men",
    subCategory: "Pants",
    image: "https://images.unsplash.com/photo-1560243563-062bff001d68?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560243563-062bff001d68?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620012253295-c05518e99309?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Classic Khaki", "Olive Green", "Graphite"],
    description: "Structured cotton chinos tailored with a mid-rise slim fit. Features durable double-welt back pockets and a soft, peach-finish combed cotton twill with 2% elastane for flex.",
    features: ["98% Combed Cotton twill, 2% Elastane", "Premium YKK zip-fly closure", "Welt back pockets with button tabs", "Tonal interior piping details"]
  },
  {
    id: "m14",
    name: "Lego Yellow Linen Blend Shirt",
    price: 1799,
    rating: 4.6,
    reviewCount: 54,
    badge: "Exclusives",
    category: "men",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["LEGO Yellow", "Oatmeal Beige"],
    description: "Celebrate summer. A lightweight linen and organic cotton blend button-down shirt that features a playful Cuban camp collar and custom shell buttons.",
    features: ["55% French Linen, 45% Organic Cotton", "Relaxed camp collar design", "Garment-dyed for unique character", "Split side hems"]
  },
  {
    id: "m15",
    name: "Graphite Melange Hooded Sweatshirt",
    price: 2199,
    rating: 4.6,
    reviewCount: 198,
    badge: "New",
    category: "men",
    subCategory: "Hoodies",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Graphite Grey", "Navy Blue", "Pitch Black"],
    description: "A classic lounge essential crafted in extra-heavy French terry cotton. Styled with a double-layered hood, thick braided drawstrings, and a roomy kangaroo storage pocket.",
    features: ["100% Cotton French Terry (380 GSM)", "Reinforced flatlock stitched seams", "Heavy double-lined hood structure", "Athletic fit cuffs"]
  },
  {
    id: "m16",
    name: "Forest Green Knit Crewneck",
    price: 2399,
    rating: 4.7,
    reviewCount: 60,
    badge: null,
    category: "men",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green", "Charcoal Gray"],
    description: "Finely knit cotton crewneck sweater. Soft, lightweight, and versatile. Features a classic set-in sleeve construction and low-profile tubular ribbed detailing at the collar.",
    features: ["100% Pima Cotton yarn", "Super-soft combed interior feel", "Breathable midweight layer", "Machine washable fabric"]
  },
  {
    id: "m17",
    name: "Classic Arctic Winter Parka",
    price: 5999,
    rating: 4.9,
    reviewCount: 40,
    badge: "Exclusives",
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Steel Grey", "Off-Black", "Lego Navy"],
    description: "Insulated sub-zero winter coat. Constructed with a heavy windproof Oxford weave shell, synthetic down filling, and a hood with detachable high-density faux fur trim.",
    features: ["Windproof & Water-resistant nylon shell", "Thermolite synthetic insulation", "Removable faux-fur hood trim", "Fleece-lined warming pockets"]
  },
  {
    id: "m18",
    name: "Rugged Workwear Utility Jacket",
    price: 3299,
    rating: 4.6,
    reviewCount: 112,
    badge: null,
    category: "men",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505632951788-751737a28f9a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560243563-062bff001d68?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Tobacco Brown", "Spruce Green"],
    description: "Built for the field or city streets. This heavy cotton canvas chore coat features a contrasting corduroy collar, robust brass button rivets, and triple-stitch construction.",
    features: ["12oz Heavy Cotton Canvas Shell", "Contrast Corduroy collar detail", "Triple-needle structural seams", "Four exterior utility pockets"]
  },
  {
    id: "m19",
    name: "Hawaiian Camp Collar Shirt",
    price: 1599,
    rating: 4.3,
    reviewCount: 89,
    badge: "Offer",
    category: "men",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Vintage Floral", "Abstract Geo"],
    description: "Relaxed-fit Hawaiian shirt printed with a custom retro botanical motif. Features drape-friendly viscose construction and a classic casual camp collar layout.",
    features: ["100% Rayon-Viscose breathable blend", "Open Cuban-style camp collar", "Straight hem with side vents", "Tonal coconut shell button fasteners"]
  },
  {
    id: "m20",
    name: "Streetwear Reflective Hoodie",
    price: 2599,
    rating: 4.8,
    reviewCount: 135,
    badge: "Exclusives",
    category: "men",
    subCategory: "Hoodies",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off-Black", "Bright Orange"],
    description: "Urban streetwear hoodie made from premium brushed fleece. Features heavy reflective branding details on the back and down the sleeves, with utility zip-fasten pockets.",
    features: ["80% Cotton, 20% Polyester fleece", "3M reflective accent graphics", "Secret zippered sleeve pocket", "Extended hem with side zippers"]
  },

  // ==================== WOMEN'S CATEGORY (21-40) ====================
  {
    id: "w1",
    name: "Royal Emerald Satin Gown",
    price: 4599,
    rating: 4.9,
    reviewCount: 112,
    badge: "Exclusives",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Emerald Green", "Midnight Blue", "Crimson Red"],
    description: "A showstopping formal maxi gown designed with heavy satin draping, a delicate wrap-around V-neckline, and an elegant side thigh-high slit.",
    features: ["100% Premium Satin-Polyester", "Adjustable spaghetti straps", "Hidden side zipper closure", "Built-in chest cups"]
  },
  {
    id: "w2",
    name: "Yellow Canary Pant Suit",
    price: 4299,
    rating: 4.8,
    reviewCount: 43,
    badge: "New",
    category: "women",
    subCategory: "Suits",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Canary Yellow", "Soft Lavender"],
    description: "Make a powerful modern statement. This suit set includes a structured double-breasted blazer and matching high-waisted wide-leg trousers in Canary Yellow.",
    features: ["Structured viscose-blend fabric", "Functional pocket flaps on blazer", "High-rise tailored trousers", "Fully lined jacket interior"]
  },
  {
    id: "w3",
    name: "Crimson Red Evening Gown",
    price: 4999,
    rating: 5.0,
    reviewCount: 67,
    badge: "Exclusives",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Crimson Red", "Pitch Black"],
    description: "Stunning floor-length dress made of heavy flowing crepe. Featuring a refined boat neckline, dramatic low cowl back, and an elegant minimal mermaid-style skirt sweep.",
    features: ["Heavy stretch crepe fabric", "Low cowl back design", "Fully lined with fine satin", "Concealed back hook & zipper"]
  },
  {
    id: "w4",
    name: "Cable Knit Winter Sweater",
    price: 2499,
    rating: 4.7,
    reviewCount: 88,
    badge: "New",
    category: "women",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Snow White", "Dusty Pink", "Brick Orange"],
    description: "Cozy up in our chunky knit oversized sweater. Featuring a ribbed turtleneck, drop-shoulder seams, and structured cable patterns down the front sleeves.",
    features: ["80% Combed Acrylic, 20% Mohair", "Chunky, insulating knit gauge", "Thick ribbed folded turtleneck", "Relaxed balloon sleeve shape"]
  },
  {
    id: "w5",
    name: "Premium Suede Leather Jacket",
    price: 5999,
    rating: 4.8,
    reviewCount: 95,
    badge: "Exclusives",
    category: "women",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Tan Beige", "Midnight Black"],
    description: "Premium velvet-soft real suede jacket. Tailored with polished metal snap collar pins, asymmetric zipper closure, and vertical zip handwarmer pockets.",
    features: ["100% Top-grade goatskin suede", "Premium satin inner lining", "Adjustable side belt loops", "High-grade silver-tone zippers"]
  },
  {
    id: "w6",
    name: "Pink Blossom Maxi Dress",
    price: 3299,
    rating: 4.6,
    reviewCount: 71,
    badge: "Offer",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1611085583191-a3b1a30dedc3?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611085583191-a3b1a30dedc3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blossom Pink", "Sky Blue"],
    description: "A breezy chiffon maxi dress patterned in pastel floral designs. Details include a ruffle layered wrap bodice, elastic waist, and sheer puff long sleeves.",
    features: ["100% Semi-sheer Chiffon outer", "Satin inner lining slip", "Smocked stretch waist back", "Flowy double-ruffle hem"]
  },
  {
    id: "w7",
    name: "Sunset Knit Pullover",
    price: 2199,
    rating: 4.5,
    reviewCount: 104,
    badge: "Offer",
    category: "women",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sunset Orange", "LEGO Yellow", "Mint Green"],
    description: "Bright knit pullover sweater crafted in soft ribbed organic cotton. Features drop shoulder seam style and relaxed fitting split side seams.",
    features: ["100% Organic Combed Cotton", "Textured ribbed weave", "Split side vent detailing", "High-comfort ribbed sleeve cuffs"]
  },
  {
    id: "w8",
    name: "Luxury Silk Banarasi Sari",
    price: 7999,
    rating: 5.0,
    reviewCount: 52,
    badge: "Exclusives",
    category: "women",
    subCategory: "Ethnic",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["Free Size"],
    colors: ["Royal Maroon & Gold", "Emerald & Gold"],
    description: "An exquisite traditional Banarasi silk sari woven with real metallic Zari thread. Features an intricate paisley border and grand floral design pallu.",
    features: ["100% Pure Mulberry Silk", "Woven metallic Zari artwork", "Includes 80cm matching blouse piece", "Dry clean only"]
  },
  {
    id: "w9",
    name: "Lavender Lavender Maxi",
    price: 2999,
    rating: 4.7,
    reviewCount: 38,
    badge: "New",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b1a30dedc3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Lavender Purple", "Powder Blue"],
    description: "Sleek and romantic tiered maxi dress in Lavender. Features adjustable criss-cross back straps, subtle sweetheart collar, and a tier-gather flowy silhouette.",
    features: ["Polyester Georgette breathable build", "Smocked elastic stretch back panel", "Side hidden pocket details", "Semi-flared tier details"]
  },
  {
    id: "w10",
    name: "Satin Blue Designer Blouse",
    price: 1599,
    rating: 4.6,
    reviewCount: 49,
    badge: null,
    category: "women",
    subCategory: "Tops",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Satin Sapphire Blue", "Champagne Gold"],
    description: "Bring high-end shine to trousers or skirts. This blouse features structural buttoned French cuffs, a elegant high mock neck, and keyhole loop back clasp.",
    features: ["100% Soft Sheen Satin", "Keyhole back collar closure", "Extra-wide French button cuffs", "Relaxed flow design"]
  },
  {
    id: "w11",
    name: "Traditional Anarkali Suit Set",
    price: 5499,
    rating: 4.8,
    reviewCount: 76,
    badge: "Exclusives",
    category: "women",
    subCategory: "Ethnic",
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo Blue", "Blush Pink"],
    description: "Premium cotton Anarkali set featuring block-print patterns, Gota Patti hand-embroidery along the collar, churidar trousers, and a sheer silk dupatta.",
    features: ["100% Pure Cambric Cotton", "Silk Organza Dupatta with border", "Handcrafted Gota Patti threadwork", "Comfortable side-tie strings"]
  },
  {
    id: "w12",
    name: "Minimalist Beige Summer Dress",
    price: 2499,
    rating: 4.4,
    reviewCount: 63,
    badge: null,
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Beige Sand", "Off-White"],
    description: "The ultimate casual summer dress. Made of a lightweight linen-viscose blend, styled with a simple square neck, high slits, and structured wide shoulder straps.",
    features: ["55% Flax Linen, 45% Viscose", "Double side seam leg slits", "Concealed back zip closure", "Comfort pockets on seams"]
  },
  {
    id: "w13",
    name: "Vibrant Yellow Summer Co-ord",
    price: 1999,
    rating: 4.5,
    reviewCount: 89,
    badge: "Offer",
    category: "women",
    subCategory: "Co-ords",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["LEGO Yellow", "Minty Green"],
    description: "Two-piece summer coordinates: matching cropped tank top and split midi skirt. Knit in breathable ribbed cotton with plenty of stretch.",
    features: ["95% Combed Cotton, 5% Spandex", "Co-ordinated 2-piece set", "Side slit skirt detail", "Breathable stretch weave"]
  },
  {
    id: "w14",
    name: "Classic Slate Black Silk Cami",
    price: 1299,
    rating: 4.5,
    reviewCount: 132,
    badge: null,
    category: "women",
    subCategory: "Tops",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off-Black", "Snow White", "Action Blue"],
    description: "Versatile, silky base layer camisole with a delicate cowl neck, bias cut draping, and fully adjustable criss-cross shoulder straps.",
    features: ["100% Satin silk-finish polyester", "Adjustable criss-cross straps", "Bias cut for natural shape stretch", "Double lined front bodice"]
  },
  {
    id: "w15",
    name: "Emerald Green Trench Coat",
    price: 4999,
    rating: 4.8,
    reviewCount: 57,
    badge: "Exclusives",
    category: "women",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Emerald Green", "Camel Beige", "Lego Navy"],
    description: "Luxurious heavy-duty double-breasted trench. Features storm flaps, tortoiseshell buttons, adjustable belt, and beautiful contrast tartan lining.",
    features: ["Polyester-twill water-repellent shell", "Traditional cuff straps with buckles", "Deep side button pockets", "Classic back rain storm flap"]
  },
  {
    id: "w16",
    name: "Slight Wash Denim Jacket",
    price: 2799,
    rating: 4.6,
    reviewCount: 140,
    badge: null,
    category: "women",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sky Blue Wash", "Distressed White"],
    description: "Classic trucker style denim jacket updated with a slightly cropped fit. Featuring antiqued silver buttons and twin button-flap chest pockets.",
    features: ["100% Combed Cotton Denim", "Aged silver metal hardware", "Adjustable side button waist tabs", "Welt hand warmer side pockets"]
  },
  {
    id: "w17",
    name: "Sunflowers Meadow Dress",
    price: 2999,
    rating: 4.6,
    reviewCount: 94,
    badge: "New",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b1a30dedc3?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Sunflowers", "White Daisies"],
    description: "Charming A-line midi dress with a dynamic floral pattern. Designed with a structured square neck collar, small elastic shoulder gathers, and functional side seam pockets.",
    features: ["100% Breathable Rayon", "Elasticized puffed sleeves", "A-line flowy skirt layout", "Functional side pockets"]
  },
  {
    id: "w18",
    name: "Scarlet Velvet Cocktail Dress",
    price: 3899,
    rating: 4.9,
    reviewCount: 75,
    badge: "Exclusives",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Scarlet Red", "Midnight Black"],
    description: "Premium heavyweight stretch velvet wrap dress. Flaunts long slim-fit sleeves, a deep wrap-style surplice neckline, and elegant side gathering detailing.",
    features: ["Heavy Stretch Velvet (Polyester/Spandex)", "True wrap-style side ties", "Inner snap security buttons", "V-neck draping shape"]
  },
  {
    id: "w19",
    name: "Bohemian Ruffle Linen Dress",
    price: 3199,
    rating: 4.5,
    reviewCount: 44,
    badge: "New",
    category: "women",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Boho Ivory White", "Olive Green"],
    description: "Tiered linen sundress featuring an open keyhole button back. Accentuated with lightweight ruffle trimmings along the shoulders and tiered skirt panels.",
    features: ["70% Linen, 30% Fine Viscose", "Back keyhole single-button closure", "Feminine ruffle detailing", "Comfortable soft lining"]
  },
  {
    id: "w20",
    name: "Tailored Camel Blazer Jacket",
    price: 3499,
    rating: 4.7,
    reviewCount: 83,
    badge: null,
    category: "women",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel Beige", "Off-Black"],
    description: "Sharp, structured double-breasted coat blazer. Features padded shoulders, clean peak lapels, tortoise faux-horn buttons, and deep horizontal double-welt pockets.",
    features: ["Polyester-viscose twill outer", "Full satin inner lining", "Tortoise double-breasted closure", "Structured shoulder pads"]
  },

  // ==================== KIDS CATEGORY (41-60) ====================
  {
    id: "k1",
    name: "Kids Sunshine Yellow Sweater",
    price: 1299,
    rating: 4.8,
    reviewCount: 92,
    badge: "Exclusives",
    category: "kids",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505378733471-29302195f15d?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["LEGO Yellow", "Mint Green"],
    description: "Bright knit cotton sweater to keep your little ones warm. Ribbed cuffs and hem provide a secure, comfortable fit. Decorated with a smiling sun embroidered badge.",
    features: ["100% Ultra-soft Combed Cotton", "Non-itchy, gentle fibers", "Embroidered chest detail", "Machine washable"]
  },
  {
    id: "k2",
    name: "Kids Classic Denim Overalls",
    price: 1599,
    rating: 4.7,
    reviewCount: 64,
    badge: "New",
    category: "kids",
    subCategory: "Pants",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520156557489-35e454477c75?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522880711725-300e84175b5b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    colors: ["Medium Denim Wash", "Dark Indigo"],
    description: "Classic denim overalls with adjustable suspenders, side button closures, and mock fly detailing. Heavy-duty denim built to survive active playtimes.",
    features: ["100% Rugged Cotton Denim", "Adjustable shoulder straps with snaps", "Side pockets and front bib pocket", "Triple-stitch reinforcement"]
  },
  {
    id: "k3",
    name: "Kids Sailor Striped Tee",
    price: 899,
    rating: 4.5,
    reviewCount: 120,
    badge: "Offer",
    category: "kids",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520156557489-35e454477c75?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Red & White Striped", "Navy & White Striped"],
    description: "Charming classic Breton striped shirt for active kids. Features double stitched hems, a comfortable crew collar, and soft organic stretch jersey.",
    features: ["95% Organic Cotton, 5% Elastane", "Tagless neck labels for comfort", "Breathable, high-stretch jersey", "Fade-resistant dye lock"]
  },
  {
    id: "k4",
    name: "Kids Flame Red Windbreaker",
    price: 1899,
    rating: 4.8,
    reviewCount: 58,
    badge: "New",
    category: "kids",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1565155823-530c5e58ed05?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565155823-530c5e58ed05?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Flame Red", "Vibrant Yellow", "Action Blue"],
    description: "Keep wind and drizzle at bay. Features lightweight ripstop construction, mesh lining, elastic cuffs, and a cozy protective fleece chin guard on the zipper.",
    features: ["100% Waterproof Ripstop Nylon", "Breathable soft mesh lining", "High-visibility reflective piping", "Zip-fasten pockets"]
  },
  {
    id: "k5",
    name: "Kids Heather Grey Hoodie",
    price: 1499,
    rating: 4.6,
    reviewCount: 75,
    badge: null,
    category: "kids",
    subCategory: "Hoodies",
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e7?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Heather Grey", "LEGO Yellow", "Brick Orange"],
    description: "Classic comfortable hoodie made of loopback cotton jersey. Soft brushed inner fleece keeps kids cozy during crisp outdoor playtimes.",
    features: ["80% Cotton, 20% Polyester jersey", "Kangaroo pocket at front", "Ribbed stretch hem & cuffs", "Warm double-panel hood"]
  },
  {
    id: "k6",
    name: "Kids Alpine Snow Suit",
    price: 2799,
    rating: 4.9,
    reviewCount: 36,
    badge: "Exclusives",
    category: "kids",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    colors: ["Teal & Orange", "Blue & Green"],
    description: "Heavy-duty winter overall snow suit. Waterproof shell paired with extra thick synthetic filling, elastic boot stirrups, and heavy double reinforced knees.",
    features: ["Windproof & Waterproof shell", "Heavy-gauge thermal insulation", "Double-reinforced knee pads", "Adjustable stirrup straps"]
  },
  {
    id: "k7",
    name: "Kids Sage Green Crewneck",
    price: 1199,
    rating: 4.7,
    reviewCount: 54,
    badge: null,
    category: "kids",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505378733471-29302195f15d?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Sage Green", "Warm Oatmeal"],
    description: "A soft cotton-knitted crewneck sweater in pastel Sage Green. Crafted with a beautiful garter stitch pattern, providing extra flexibility and airflow.",
    features: ["100% Cotton combed yarn", "Non-itchy garter stitch design", "Elasticized comfort neck", "Pre-shrunk fibers"]
  },
  {
    id: "k8",
    name: "Kids Red Lumberjack Flannel",
    price: 1399,
    rating: 4.6,
    reviewCount: 88,
    badge: "Offer",
    category: "kids",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Red Plaid", "Blue Plaid"],
    description: "Classic plaid button-down woven in heavy double-brushed cotton flannel. Extremely soft to the touch, warm, and structured with two chest flap pockets.",
    features: ["100% Double-brushed Cotton Flannel", "Classic double chest flap pockets", "Soft collar shape", "Button adjustments at cuffs"]
  },
  {
    id: "k9",
    name: "Kids Princess Tulle Dress",
    price: 1999,
    rating: 4.8,
    reviewCount: 79,
    badge: "Exclusives",
    category: "kids",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1611428813653-bbdf73327d16?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611428813653-bbdf73327d16?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    colors: ["Candy Pink", "Sparkle White"],
    description: "Perfect dress-up gown for birthday parties and events. Designed with a stretch cotton bodice, metallic gold stars print, and multiple layers of soft pink tulle.",
    features: ["Bodice: 95% Cotton, 5% Spandex", "Skirt: 4-layer soft nylon tulle", "Satin inner lining slip", "Metallic gold star prints"]
  },
  {
    id: "k10",
    name: "Kids Dino Hoodie Top",
    price: 1299,
    rating: 4.4,
    reviewCount: 145,
    badge: null,
    category: "kids",
    subCategory: "Hoodies",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Forest Green Dino", "Grey Dino"],
    description: "Playful hoodie decorated with felt dinosaur spines along the hood and sleeves. Knit in cozy cotton fleece with matching dinosaur print chest design.",
    features: ["80% Cotton, 20% Polyester fleece", "Felt 3D dinosaur spines details", "Double stitched kangaroo pocket", "Safe snap button neck opening"]
  },
  {
    id: "k11",
    name: "Kids Varsity Blue Parka",
    price: 2299,
    rating: 4.7,
    reviewCount: 51,
    badge: "New",
    category: "kids",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565155823-530c5e58ed05?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Action Blue", "Off-Black"],
    description: "Water-resistant padded winter jacket styled like a varsity bomber. Heavy synthetic quilting provides exceptional warmth, finished with striped elastic cuffs.",
    features: ["Waterproof nylon outer shell", "Striped rib-knit athletic collar", "High-loft synthetic down padding", "Dual zippered side hand pockets"]
  },
  {
    id: "k12",
    name: "Kids Yellow Storm Suit Set",
    price: 2499,
    rating: 4.9,
    reviewCount: 39,
    badge: "Exclusives",
    category: "kids",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1505378733471-29302195f15d?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505378733471-29302195f15d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565155823-530c5e58ed05?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    colors: ["LEGO Yellow", "Vibrant Red"],
    description: "Puddle jumpers rejoice! This waterproof mud suit set includes matching storm overalls and coat. Designed with high visibility accents for rainy days.",
    features: ["100% Polyurethane waterproof skin", "Welded seam construction", "Reflective safety bands", "Detachable safety hood snaps"]
  },
  {
    id: "k13",
    name: "Kids Spring Pastel Cardigan",
    price: 1499,
    rating: 4.6,
    reviewCount: 42,
    badge: null,
    category: "kids",
    subCategory: "Sweaters",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611428813653-bbdf73327d16?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Pastel Lilac", "Oatmeal Beige"],
    description: "Delicate spring knitted cardigan. Handcrafted wooden button fixtures down the front chest. Made of extra breathable bamboo cotton yarn, perfect for layer styles.",
    features: ["60% Organic Cotton, 40% Bamboo Yarn", "Natural wood buttons", "Pointelle lightweight knit design", "Ribbed collar and cuffs"]
  },
  {
    id: "k14",
    name: "Kids Striped Linen Dungarees",
    price: 1699,
    rating: 4.5,
    reviewCount: 65,
    badge: "Offer",
    category: "kids",
    subCategory: "Pants",
    image: "https://images.unsplash.com/photo-1520156557489-35e454477c75?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520156557489-35e454477c75?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Blue & White Stripe", "Tan & White Stripe"],
    description: "Cute dungarees in striped linen blend. Front kangaroo pouch pocket, buttoned suspenders, and metal clasp snaps along the crotch for quick changes.",
    features: ["55% Linen, 45% Cotton weave", "Snaps at bottom for diaper changes", "Front central patch pocket", "Contrast button details"]
  },
  {
    id: "k15",
    name: "Kids Floral Chiffon Dress",
    price: 1899,
    rating: 4.7,
    reviewCount: 58,
    badge: "New",
    category: "kids",
    subCategory: "Dresses",
    image: "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611428813653-bbdf73327d16?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Sage Green Floral", "Dusty Rose Floral"],
    description: "A gorgeous, fully-lined tiered chiffon dress for girls. Ruffled sleeves, high elastic waist, and vintage botanical flowers printing.",
    features: ["100% Chiffon Polyester", "Full cotton under-lining layer", "Gathered tiered flowy skirt", "Keyhole back collar fastener"]
  },
  {
    id: "k16",
    name: "Kids Knit Beanie Set",
    price: 799,
    rating: 4.8,
    reviewCount: 102,
    badge: "New",
    category: "kids",
    subCategory: "Accessories",
    image: "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: ["Brick Orange Beanie", "Sunshine Yellow Beanie", "Forest Green Beanie"],
    description: "Rib-knit beanie cap matching a cozy circle loop scarf. Soft polar fleece lined interior ensures children remain warm during chilly morning walks.",
    features: ["80% Wool, 20% Acrylic outer", "Polar fleece interior insulation layer", "Includes beanie and scarf", "Stretch-fit accommodates ages 2-10"]
  },
  {
    id: "k17",
    name: "Kids Checker Gingham Top",
    price: 999,
    rating: 4.4,
    reviewCount: 47,
    badge: null,
    category: "kids",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520156557489-35e454477c75?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Black Gingham", "Red Gingham"],
    description: "Sleek poplin cotton shirt in checkered gingham pattern. Finished with flat plastic buttons, a left pocket detail, and comfortable soft folded cuffs.",
    features: ["100% Combed Poplin Cotton", "Fold-down flat collar styling", "Chest utility pocket", "Pre-shrunk fabric weave"]
  },
  {
    id: "k18",
    name: "Kids Cable Beanie & Scarf Set",
    price: 899,
    rating: 4.7,
    reviewCount: 81,
    badge: "Offer",
    category: "kids",
    subCategory: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: ["Forest Green Set", "Lego Navy Set"],
    description: "Chunky knit set featuring a cable pattern beanie cap topped with a faux-fur pompom, paired with a matching cozy double-layered neck warmer loop.",
    features: ["100% Hypoallergenic Acrylic Yarn", "Faux-fur fluffy pompom detail", "Thick double-layer knit warmth", "Stretch sizing fits ages 3-12"]
  },
  {
    id: "k19",
    name: "Kids Classic Denim Jacket",
    price: 1799,
    rating: 4.8,
    reviewCount: 115,
    badge: "Exclusives",
    category: "kids",
    subCategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Vintage Wash Denim", "Dark Wash Indigo"],
    description: "Authentic heavy-duty denim jacket scaled down for kids. Dual button-flap chest pockets, brass logo buttons, and warm cotton-lined interior.",
    features: ["100% Combed Heavy Denim Cotton", "Solid brass rivet button closures", "Inside name label tag", "Fitted side slip pocket details"]
  },
  {
    id: "k20",
    name: "Kids Playful Blue Dungarees",
    price: 1699,
    rating: 4.6,
    reviewCount: 52,
    badge: "New",
    category: "kids",
    subCategory: "Pants",
    image: "https://images.unsplash.com/photo-1522880711725-300e84175b5b?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522880711725-300e84175b5b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520156557489-35e454477c75?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Electric Blue", "Brick Red"],
    description: "Charming cotton twill overalls. Durable double-knee patches make this perfect for playgrounds, featuring elastic side tabs and adjustable buckle snaps.",
    features: ["100% Sturdy Cotton Twill", "Double layer knee-patch protection", "Adjustable slider metal buckles", "Easy-access side snaps"]
  }
];
