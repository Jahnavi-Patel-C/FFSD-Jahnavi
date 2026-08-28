export const personas = {

  // 1. Urban Rebel
  urban_rebel: {
    id: "urban_rebel",
    name: "Urban Rebel",
    hook: "You don’t follow trends—you interrupt them.",
    description: "You lean toward bold contrasts and unapologetic expression. Your style challenges the ordinary and creates presence wherever you go.",
    longDescription: "Your aesthetic is fearless, expressive, and impossible to ignore. You naturally gravitate toward fashion that carries attitude and individuality. Rather than blending in, you use style as a form of identity and creative rebellion. Layering, textures, oversized silhouettes, and dark palettes help you create looks that feel cinematic and powerful.",
    personality: "Confident, unconventional, expressive, and fearless.",
    styles: ["Dark tones", "Statement pieces", "Layered looks"],
    traits: ["Bold", "Experimental", "Independent", "Edgy", "High Visibility"],
    colors: ["Black", "Charcoal", "Deep Red", "Silver"],
    fabrics: ["Leather", "Denim", "Mesh", "Oversized Cotton"],
    aesthetic: "Streetwear meets underground editorial.",
    styleTips: [
      "Use layers to create dimension.",
      "Mix textures like leather and denim.",
      "Accessorize with chains or rings.",
      "Don’t shy away from oversized silhouettes."
    ],
    avoid: ["Safe basics", "Overly polished outfits", "Pastel-heavy combinations"],
    wardrobeEssentials: ["Black oversized jacket", "Distressed jeans", "Combat boots", "Statement accessories"],
    tone: "rebellious",
    image: "/images/personas/urban_hero.png",
    gallery: ["/images/outfits/urban_look1.png", "/images/outfits/urban_look2.png", "/images/outfits/urban_look3.png"],
    wardrobeImages: [
      "/images/wardrobe/urban_wardrobe1.png",
      "/images/wardrobe/urban_wardrobe2.png",
      "/images/wardrobe/urban_wardrobe3.png",
      "/images/wardrobe/urban_wardrobe4.png"
    ],
    products: [
      { name: "Oversized Black Bomber", brand: "H&M", price: "₹3,499", image: "/images/products/urban_product1.png", link: "https://www2.hm.com/" },
      { name: "Distressed Street Denim", brand: "Zara", price: "₹2,990", image: "/images/products/urban_product2.png", link: "https://www.zara.com/" }
    ]
  },

  // 2. Soft Minimalist
  soft_minimalist: {
    id: "soft_minimalist",
    name: "Soft Minimalist",
    hook: "Quiet style, strong presence.",
    description: "You value calm, balance, and quiet elegance. Your style feels effortless, soft, and thoughtfully put together without trying too hard.",
    longDescription: "Your fashion sense is rooted in simplicity and emotional balance. You prefer timeless pieces over fast trends and naturally create outfits that feel clean, refined, and calming. Soft tones, relaxed fits, and subtle details define your aesthetic. You don’t seek attention—your elegance naturally attracts it.",
    personality: "Calm, intentional, elegant, and grounded.",
    styles: ["Neutrals", "Soft fabrics", "Clean silhouettes"],
    traits: ["Elegant", "Minimal", "Soft", "Subtle", "Cool"],
    colors: ["Beige", "Ivory", "Cream", "Taupe"],
    fabrics: ["Linen", "Cotton", "Silk", "Knitwear"],
    aesthetic: "Modern minimalism with soft luxury energy.",
    styleTips: [
      "Stick to a muted palette.",
      "Choose quality over quantity.",
      "Use subtle accessories.",
      "Focus on silhouette and fit."
    ],
    avoid: ["Neon colors", "Busy patterns", "Over-accessorizing"],
    wardrobeEssentials: ["Beige blazer", "White oversized shirt", "Wide-leg trousers", "Minimal gold jewelry"],
    tone: "calm",
    image: "/images/personas/soft_hero.png",
    gallery: ["/images/outfits/soft_look1.png", "/images/outfits/soft_look2.png", "/images/outfits/soft_look3.png"],
    wardrobeImages: [
      "/images/personas/Beige_blazer.png",
      "/images/personas/White_oversized_shirt.png",
      "/images/personas/Wide-leg_trousers.png",
      "/images/personas/Minimal_gold_jewelry.png"
    ],
    products: [
      { name: "Relaxed Linen Shirt", brand: "Zara", price: "₹2,290", image: "/images/products/soft_product1.png", link: "https://www.zara.com/" },
      { name: "Wide Leg Neutral Pants", brand: "H&M", price: "₹2,999", image: "/images/softminimal.jpg", link: "https://www2.hm.com/" }
    ]
  },

  // 3. Midnight Architect
  midnight_architect: {
    id: "midnight_architect",
    name: "Midnight Architect",
    hook: "Precision is your signature.",
    description: "You are drawn to structure, symmetry, and refined aesthetics. Your outfits feel intentional, composed, and sharply defined.",
    longDescription: "You appreciate discipline in design and elegance in detail. Your wardrobe reflects control, confidence, and intelligence. Structured fits, monochrome palettes, and sharp tailoring help you create a timeless and commanding visual identity. You rarely dress impulsively—everything feels curated and precise.",
    personality: "Focused, refined, composed, and detail-oriented.",
    styles: ["Monochrome", "Tailored fits", "Sharp lines"],
    traits: ["Structured", "Classic", "Sharp", "Monochrome", "Cool"],
    colors: ["Black", "White", "Navy", "Grey"],
    fabrics: ["Wool", "Structured Cotton", "Blended Tailoring Fabrics"],
    aesthetic: "Architectural fashion with timeless sophistication.",
    styleTips: [
      "Prioritize fit and tailoring.",
      "Use monochrome combinations.",
      "Keep accessories intentional.",
      "Invest in timeless staples."
    ],
    avoid: ["Messy layering", "Overly casual pieces", "Distracting prints"],
    wardrobeEssentials: ["Tailored blazer", "Black trousers", "Structured coat", "Leather loafers"],
    tone: "sharp",
    image: "/images/personas/midnight_hero.png",
    gallery: ["/images/outfits/midnight_look1.png", "/images/architect.jpg", "/images/sharp-put-together.jpg"],
    wardrobeImages: [
      "/images/personas/Tailored_blazer.png",
      "/images/personas/black_trousers.png",
      "/images/personas/Structured_coat.png",
      "/images/personas/Leather_loafers.png"
    ],
    products: [
      { name: "Tailored Black Blazer", brand: "Mango", price: "₹4,999", image: "/images/products/midnight_product1.png", link: "https://shop.mango.com/" },
      { name: "Slim Structured Pants", brand: "Zara", price: "₹3,490", image: "/images/architect.jpg", link: "https://www.zara.com/" }
    ]
  },

  // 4. Effortless Muse
  effortless_muse: {
    id: "effortless_muse",
    name: "Effortless Muse",
    hook: "You don’t try—you naturally stand out.",
    description: "Your style flows with your mood—creative, soft, and expressive. You embrace fluid silhouettes and natural movement in everything you wear.",
    longDescription: "You approach fashion emotionally and artistically. Your outfits feel relaxed yet deeply expressive, blending softness with creativity. You’re drawn to movement, layering, and pieces that feel natural rather than rigid. Your aesthetic feels dreamy, modern, and quietly artistic.",
    personality: "Creative, expressive, emotional, and free-spirited.",
    styles: ["Relaxed fits", "Artistic layering", "Fluid fabrics"],
    traits: ["Creative", "Flowing", "Soft", "Expressive", "Warm"],
    colors: ["Dusty Rose", "Muted Sage", "Cream", "Soft Brown"],
    fabrics: ["Linen", "Satin", "Loose Knit", "Cotton"],
    aesthetic: "Dreamy editorial mixed with artistic street style.",
    styleTips: [
      "Play with movement and texture.",
      "Use layered neutrals.",
      "Mix oversized and fitted silhouettes.",
      "Keep styling effortless."
    ],
    avoid: ["Rigid tailoring", "Heavy structure", "Overly formal styling"],
    wardrobeEssentials: ["Flowy trousers", "Oversized cardigan", "Soft shoulder bag", "Relaxed dresses"],
    tone: "creative",
    image: "/images/personas/muse_hero.png",
    gallery: ["/images/outfits/muse_look1.png", "/images/muse.jpg", "/images/relaxed-outfit.jpg"],
    wardrobeImages: [
      "/images/personas/flowly%20trousers.png",
      "/images/personas/oversized%20cardigan.png",
      "/images/personas/soft%20shoulder%20bag.png",
      "/images/personas/relaxed%20dresses.png"
    ],
    products: [
      { name: "Flowy Satin Skirt", brand: "H&M", price: "₹2,499", image: "/images/products/muse_product1.png", link: "https://www2.hm.com/" },
      { name: "Oversized Knit Cardigan", brand: "Urbanic", price: "₹2,299", image: "/images/relaxed-outfit.jpg", link: "https://www.urbanic.com/" }
    ]
  },

  // 5. Statement Maker
  statement_maker: {
    id: "statement_maker",
    name: "Statement Maker",
    hook: "You are the moment.",
    description: "You command attention without hesitation. Your style is bold, defined, and designed to stand out wherever you go.",
    longDescription: "Your fashion energy is powerful, glamorous, and commanding. You enjoy high-impact styling that feels confident and unforgettable. Structured silhouettes, dramatic shapes, and statement pieces help you create an aesthetic that instantly captures attention.",
    personality: "Powerful, charismatic, ambitious, and fearless.",
    styles: ["Bold shapes", "High contrast", "Standout pieces"],
    traits: ["Confident", "Powerful", "Structured", "Bold", "High Contrast"],
    colors: ["Black", "Gold", "White", "Ruby Red"],
    fabrics: ["Leather", "Satin", "Structured Blends"],
    aesthetic: "Luxury fashion with runway-level confidence.",
    styleTips: [
      "Use one statement piece per outfit.",
      "Lean into structure and contrast.",
      "Accessorize boldly.",
      "Own dramatic silhouettes."
    ],
    avoid: ["Muted styling", "Overly casual basics", "Safe combinations"],
    wardrobeEssentials: ["Statement blazer", "Luxury handbag", "Sharp heels", "Bold sunglasses"],
    tone: "powerful",
    image: "/images/personas/statement_hero.png",
    gallery: ["/images/personas/statement_look1.png", "/images/statement.jpg", "/images/personality-bold.jpg"],
    wardrobeImages: [
      "/images/personas/statement_blazer.png",
      "/images/personas/luxury_bag.png",
      "/images/personas/sharp_heels.png",
      "/images/personas/bold_sunglasses.png"
    ],
    products: [
      { name: "Structured Power Blazer", brand: "Zara", price: "₹5,990", image: "/images/products/statement_product1.png", link: "https://www.zara.com/" },
      { name: "High Waist Statement Pants", brand: "Mango", price: "₹3,999", image: "/images/standingout.jpg", link: "https://shop.mango.com/" }
    ]
  },

  // 6. Classic Romantic
  classic_romantic: {
    id: "classic_romantic",
    name: "Classic Romantic",
    hook: "Poetry written in delicate silk and soft sunlit drapes.",
    description: "A timeless vision of quiet grace, vintage charm, and painterly warmth.",
    longDescription: "You move through the world like a figure in a sunlit oil portrait. Your style merges nostalgic elegance with soft refinement, favoring fluid silk drapery, delicate knits, and warm muted tones. Every outfit feels like a treasured keepsake—poetic, gentle, and timelessly poised.",
    personality: "Graceful, romantic, soft, and cultured.",
    styles: ["Vintage Romanticism", "Soft Drapery", "Gentle Tailoring"],
    traits: ["Romantic", "Soft", "Classic", "Graceful", "Warm"],
    colors: ["Dusty Rose", "Ivory", "Cream", "Soft Brown"],
    fabrics: ["Silk", "Chiffon", "Cashmere", "Soft Cotton"],
    aesthetic: "Dreamy vintage romance bathed in warm, luminous light.",
    styleTips: [
      "Pair fluid silk skirts with soft knit cardigans.",
      "Layer delicate gold pendants and subtle pearls.",
      "Embrace soft, warm neutral palettes.",
      "Focus on gentle drapery and feminine lines."
    ],
    avoid: ["Harsh neon tones", "Rigid biker leather", "Unstructured athletic wear"],
    wardrobeEssentials: [
      "Flowy midi dress",
      "A-line skirt",
      "Pearl pendant",
      "Pointed flats or low heels",
    ],
    tone: "romantic",
    image: "/images/perso.jpg",
    gallery: ["/images/perso.jpg", "/images/cotton.jpg", "/images/softminimal.jpg"],
    wardrobeImages: [
      "/images/personas/Beige_blazer.png",
      "/images/personas/White_oversized_shirt.png",
      "/images/personas/soft%20shoulder%20bag.png",
      "/images/personas/Minimal_gold_jewelry.png"
    ],
    products: [
      { name: "Silk Blend Wrap Dress", brand: "Mango", price: "₹4,590", image: "/images/perso.jpg", link: "https://shop.mango.com/" },
      { name: "Cashmere Soft Cardigan", brand: "Uniqlo", price: "₹3,990", image: "/images/cotton.jpg", link: "https://www.uniqlo.com/" }
    ]
  },

  // 7. Clean Futurist
  clean_futurist: {
    id: "clean_futurist",
    name: "Clean Futurist",
    hook: "Sculptural minimalism bathed in soft, luminous light.",
    description: "An architectural vision of fluid structure, cool monochrome palettes, and soft editorial luxury.",
    longDescription: "Your style reimagines modern structure through a dreamy, high-fashion lens. Rather than cold sci-fi tech, your look is defined by sculptural drapes, liquid monochrome silks, and razor-clean tailoring. Uncluttered and quiet, your wardrobe projects sleek forward-thinking grace with an editorial, gallery-like poise.",
    personality: "Sculptural, serene, sleek, and visionary.",
    styles: ["Architectural Drapery", "Monochrome Minimal", "Soft Sculptural Fits"],
    traits: ["Sleek", "Structured", "Cool", "Minimal", "Monochrome"],
    colors: ["White", "Silver", "Grey", "Black"],
    fabrics: ["Structured Cotton", "Silk Blend", "Technical Nylon", "Fine Wool"],
    aesthetic: "Sculptural modernism wrapped in soft-luxe light.",
    styleTips: [
      "Choose clean geometric silhouettes with subtle fluid drapes.",
      "Stick to cool, luminous monochrome palettes.",
      "Keep accessories minimal with brushed silver finishes.",
      "Layer sharp outerwear over streamlined knit bases."
    ],
    avoid: ["Folkloric prints", "Ruffled trims", "Chunky warm knits"],
    wardrobeEssentials: [
      "Minimal shell jacket",
      "Tailored ankle pants",
      "Crisp high-neck top",
      "Sleek black sneakers",
    ],
    tone: "futuristic",
    image: "/images/monochrome.jpg",
    gallery: ["/images/monochrome.jpg", "/images/architect.jpg", "/images/sharp-put-together.jpg"],
    wardrobeImages: [
      "/images/personas/Tailored_blazer.png",
      "/images/personas/black_trousers.png",
      "/images/personas/Structured_coat.png",
      "/images/personas/bold_sunglasses.png"
    ],
    products: [
      { name: "Sculptural Shell Coat", brand: "COS", price: "₹6,990", image: "/images/monochrome.jpg", link: "https://www.cos.com/" },
      { name: "Sleek Ankle Trousers", brand: "Zara", price: "₹3,290", image: "/images/architect.jpg", link: "https://www.zara.com/" }
    ]
  },

  // 8. Quiet Luxury
  quiet_luxury: {
    id: "quiet_luxury",
    name: "Quiet Luxury",
    hook: "Subtle prestige draped in whispers of fine cashmere.",
    description: "Immaculate craftsmanship, understated warmth, and discreet elegance that commands attention softly.",
    longDescription: "You possess an innate appreciation for true artistry and unspoken refinement. Unmoved by loud logos or fleeting trends, your wardrobe relies on perfect cuts, sumptuously soft fabrics, and warm neutral tones. Your style carries the quiet, undeniable aura of heirloom luxury.",
    personality: "Discerning, sophisticated, serene, and polished.",
    styles: ["Tailored Luxury", "Muted Neutrals", "Heirloom Polish"],
    traits: ["Refined", "Subtle", "Classic", "Polished", "Neutral"],
    colors: ["Taupe", "Ivory", "Beige", "Navy"],
    fabrics: ["Cashmere", "Fine Wool", "Silk", "Linen"],
    aesthetic: "Understated luxury drenched in warm, golden light.",
    styleTips: [
      "Invest in fluid, tailor-made silhouettes in fine wool or cashmere.",
      "Maintain a cohesive, soft neutral color palette.",
      "Avoid visible branding or loud embellishments.",
      "Pair discreet, immaculate leather accessories."
    ],
    avoid: ["Loud logos", "Distressed denims", "Transient fast fashion"],
    wardrobeEssentials: [
      "Cashmere knit",
      "Structured handbag",
      "Silk scarf",
      "Timeless outerwear"
    ],
    tone: "luxurious",
    image: "/images/blendingin.jpg",
    gallery: ["/images/blendingin.jpg", "/images/softminimal.jpg", "/images/sharp-put-together.jpg"],
    wardrobeImages: [
      "/images/personas/Beige_blazer.png",
      "/images/personas/Wide-leg_trousers.png",
      "/images/personas/Leather_loafers.png",
      "/images/personas/Minimal_gold_jewelry.png"
    ],
    products: [
      { name: "Fine Cashmere Knit", brand: "Massimo Dutti", price: "₹7,990", image: "/images/blendingin.jpg", link: "https://www.massimodutti.com/" },
      { name: "Tailored Wool Pants", brand: "Mango", price: "₹4,999", image: "/images/softminimal.jpg", link: "https://shop.mango.com/" }
    ]
  },

  // 9. Art House Experimental
  art_house_experimental: {
    id: "art_house_experimental",
    name: "Art House Experimental",
    hook: "A living portrait of avant-garde textures and creative drama.",
    description: "Daring, imaginative, and gallery-bound. You treat style as a canvas of textural contrast.",
    longDescription: "You approach dressing like an artist composing an editorial masterpiece. Unafraid of asymmetrical drapery, unexpected tactile clashes, and dramatic proportions, your look turns every room into a quiet gallery opening. Your presence is creative, poetic, and fearlessly expressive.",
    personality: "Imaginative, avant-garde, expressive, and daring.",
    styles: ["Editorial Avant-Garde", "Textural Contrast", "Asymmetrical Cuts"],
    traits: ["Experimental", "Creative", "Bold", "Textured", "Expressive"],
    colors: ["Black", "Ruby Red", "Charcoal", "Gold"],
    fabrics: ["Mesh", "Structured Leather", "Deconstructed Knit", "Satin"],
    aesthetic: "Art-gallery avant-garde wrapped in dramatic editorial lighting.",
    styleTips: [
      "Pair tactile opposites like sheer mesh and structured leather.",
      "Embrace asymmetrical hemline folds and sculptural draping.",
      "Anchor dramatic looks with one rich jewel-toned accent.",
      "Keep hair and makeup soft to let the clothing tell the story."
    ],
    avoid: ["Cookie-cutter basics", "Preppy sportswear", "Conventional business suits"],
    wardrobeEssentials: [
      "Asymmetrical jacket",
      "Sculptural skirt",
      "Statement boots",
      "Sculptural jewelry",
    ],
    tone: "experimental",
    image: "/images/experimental.jpg",
    gallery: ["/images/experimental.jpg", "/images/experssion.jpg", "/images/standingout.jpg"],
    wardrobeImages: [
      "/images/wardrobe/urban_wardrobe1.png",
      "/images/personas/statement_blazer.png",
      "/images/personas/bold_sunglasses.png",
      "/images/wardrobe/urban_wardrobe4.png"
    ],
    products: [
      { name: "Asymmetrical Deconstructed Top", brand: "Zara", price: "₹3,990", image: "/images/experimental.jpg", link: "https://www.zara.com/" },
      { name: "Avant-Garde Layered Skirt", brand: "H&M Studio", price: "₹4,999", image: "/images/experssion.jpg", link: "https://www2.hm.com/" }
    ]
  },

  // 10. Soft Grunge
  soft_grunge: {
    id: "soft_grunge",
    name: "Soft Grunge",
    hook: "Velvet darkness softened by warm, nostalgic light.",
    description: "An alternative soul wrapped in relaxed layers, dark neutrals, and moody romantic edge.",
    longDescription: "Your aesthetic captures the rebellious warmth of 90s vintage alternative style, softened by editorial drapery. You layer worn-in denim, dark charcoal knits, and soft crimson hues for a look that feels cinematic, relaxed, and intimately cool.",
    personality: "Moody, non-conformist, relaxed, and soulful.",
    styles: ["Layered Grunge", "Muted Dark Tones", "Vintage Alternative"],
    traits: ["Edgy", "Layered", "Moody", "Subtle", "Bold"],
    colors: ["Charcoal", "Black", "Soft Brown", "Deep Red"],
    fabrics: ["Denim", "Distressed Cotton", "Flannel", "Leather"],
    aesthetic: "Moody indie editorial bathed in low golden hour light.",
    styleTips: [
      "Layer oversized plaid knits over soft, vintage cotton tees.",
      "Balance dark charcoal tones with warm rust and berry accents.",
      "Anchor soft silhouettes with worn leather combat boots.",
      "Keep styling undone and romantic."
    ],
    avoid: ["Polished corporate tailoring", "Bright pastel florals", "Preppy chinos"],
    wardrobeEssentials: [
      "Oversized plaid shirt",
      "Distressed black jeans",
      "Band tee or worn graphic tee",
      "Combat boots",
    ],
    tone: "grunge",
    image: "/images/denim.jpg",
    gallery: ["/images/denim.jpg", "/images/nightcity copy.jpg", "/images/relaxed-outfit.jpg"],
    wardrobeImages: [
      "/images/wardrobe/urban_wardrobe1.png",
      "/images/personas/black_trousers.png",
      "/images/wardrobe/urban_wardrobe3.png",
      "/images/personas/oversized%20cardigan.png"
    ],
    products: [
      { name: "Oversized Flannel Shirt", brand: "Urban Outfitters", price: "₹3,490", image: "/images/denim.jpg", link: "https://www.urbanoutfitters.com/" },
      { name: "Distressed Vintage Jeans", brand: "Levi's", price: "₹4,299", image: "/images/nightcity copy.jpg", link: "https://www.levi.in/" }
    ]
  },

  // 11. Earthy Nomad
  earthy_nomad: {
    id: "earthy_nomad",
    name: "Earthy Nomad",
    hook: "Grounded in sun-warmed earth and natural, fluid movement.",
    description: "Organic textures, warm earth tones, and serene bohemian drapery that breathes.",
    longDescription: "Inspired by natural landscapes and slow craftsmanship, your wardrobe feels grounded and peaceful. You naturally gravitate toward soft linens, raw cottons, and muted earth palettes that drape gracefully. Your presence is tranquil, authentic, and naturally radiant.",
    personality: "Serene, grounded, authentic, and free-spirited.",
    styles: ["Organic Bohemian", "Natural Drapery", "Soft Earth Layers"],
    traits: ["Warm", "Flowing", "Natural", "Relaxed", "Textured"],
    colors: ["Soft Brown", "Muted Sage", "Beige", "Cream"],
    fabrics: ["Linen", "Raw Cotton", "Loose Knit", "Suede"],
    aesthetic: "Sun-drenched organic romance in harmony with nature.",
    styleTips: [
      "Layer soft earth tones like sage, warm taupe, and terracotta.",
      "Choose breathable, textured linens and unbleached knits.",
      "Accessorize with tactile suede or natural wooden elements.",
      "Embrace unconstrained, fluid silhouettes."
    ],
    avoid: ["Synthetic high-shine fabrics", "Stiff corsetry", "Monochrome black techwear"],
    wardrobeEssentials: [
      "Relaxed knit sweater",
      "Woven tote bag",
      "Suede boots",
      "Layered natural-fiber basics"
    ],
    tone: "nomad",
    image: "/images/earthcolours.jpg",
    gallery: ["/images/earthcolours.jpg", "/images/cafe-ouutfit'.jpg", "/images/cotton.jpg"],
    wardrobeImages: [
      "/images/personas/flowly%20trousers.png",
      "/images/personas/oversized%20cardigan.png",
      "/images/personas/soft%20shoulder%20bag.png",
      "/images/personas/relaxed%20dresses.png"
    ],
    products: [
      { name: "Raw Cotton Duster Jacket", brand: "Zara Earth", price: "₹3,990", image: "/images/earthcolours.jpg", link: "https://www.zara.com/" },
      { name: "Organic Linen Trousers", brand: "FabIndia", price: "₹2,790", image: "/images/cotton.jpg", link: "https://www.fabindia.com/" }
    ]
  },

  // 12. Retro Muse
  retro_muse: {
    id: "retro_muse",
    name: "Retro Muse",
    hook: "A cinematic revival of golden era glamour.",
    description: "Nostalgic warmth, vintage tailoring, and a whimsical editorial romance full of story.",
    longDescription: "You inhabit fashion like a protagonist in a classic 1970s film portrait. Drawn to warm golden palettes, structured collars, and corduroy textures, you blend vintage nostalgia with playful modern poise. Your style feels story-driven, vibrant, and effortlessly poetic.",
    personality: "Playful, nostalgic, expressive, and optimistic.",
    styles: ["Vintage Revival", "Retro Tailoring", "Nostalgic Warmth"],
    traits: ["Nostalgic", "Warm", "Expressive", "Playful", "Experimental"],
    colors: ["Gold", "Soft Brown", "Dusty Rose", "Ivory"],
    fabrics: ["Corduroy", "Denim", "Knitwear", "Cotton"],
    aesthetic: "Cinematic 70s editorial bathed in golden light.",
    styleTips: [
      "Combine warm corduroy jackets with high-waisted flared trousers.",
      "Incorporate golden amber and warm dusty rose tones.",
      "Pair vintage silhouette staples with sleek modern footwear.",
      "Add retro tortoiseshell or oversized sunglasses."
    ],
    avoid: ["Cold minimalist techwear", "Stark monochrome black", "Rigid corporate suits"],
    wardrobeEssentials: [
      "High-waisted flared pants",
      "Retro sunglasses",
      "Mary Janes or loafers",
      "Playful scarf"
    ],
    tone: "retro",
    image: "/images/experssion.jpg",
    gallery: ["/images/experssion.jpg", "/images/cafe-ouutfit'.jpg", "/images/muse.jpg"],
    wardrobeImages: [
      "/images/personas/oversized%20cardigan.png",
      "/images/personas/flowly%20trousers.png",
      "/images/personas/bold_sunglasses.png",
      "/images/personas/soft%20shoulder%20bag.png"
    ],
    products: [
      { name: "Retro Corduroy Blazer", brand: "Mango Vintage", price: "₹4,990", image: "/images/experssion.jpg", link: "https://shop.mango.com/" },
      { name: "High-Waist Flare Pants", brand: "Zara", price: "₹3,490", image: "/images/cafe-ouutfit'.jpg", link: "https://www.zara.com/" }
    ]
  },

  // 13. Neo Street Classic
  neo_street_classic: {
    id: "neo_street_classic",
    name: "Neo Street Classic",
    hook: "Sharp architectural tailoring meets soft urban cool.",
    description: "An elevated fusion of crisp tailoring and soft-luxe street silhouettes.",
    longDescription: "You bridge the world of heritage tailoring and modern urban culture with effortless poise. By layering structured blazers over soft cream hoodies or sharp trousers with luxury sneakers, you create a look that feels refined, current, and painterly in its contrast.",
    personality: "Urban, confident, balanced, and contemporary.",
    styles: ["Elevated Streetwear", "Architectural Tailoring", "Contrast Layering"],
    traits: ["Structured", "Urban", "Classic", "Bold", "Balanced"],
    colors: ["Black", "White", "Navy", "Charcoal"],
    fabrics: ["Structured Cotton", "Wool Blends", "Denim", "Leather"],
    aesthetic: "Soft-luxe urban editorial with sharp architectural poise.",
    styleTips: [
      "Pair a sharp wool blazer with a soft, heavyweight cream hoodie.",
      "Style structured wide-leg trousers with clean leather sneakers.",
      "Focus on high-contrast, crisp monochrome foundations.",
      "Finish with a sleek leather crossbody accent."
    ],
    avoid: ["Overly slouchy boho fringe", "Delicate lace ruffles", "Unstructured loungewear"],
    wardrobeEssentials: [
      "Elevated hoodie",
      "Tailored street trousers",
      "Clean sneakers",
      "Leather crossbody bag",
    ],
    tone: "street",
    image: "/images/identity.jpg",
    gallery: ["/images/identity.jpg", "/images/standingout.jpg", "/images/architect.jpg"],
    wardrobeImages: [
      "/images/personas/Tailored_blazer.png",
      "/images/personas/black_trousers.png",
      "/images/personas/statement_blazer.png",
      "/images/personas/Leather_loafers.png"
    ],
    products: [
      { name: "Elevated Urban Hoodie", brand: "Nike Lab", price: "₹4,295", image: "/images/identity.jpg", link: "https://www.nike.com/" },
      { name: "Tailored Street Trousers", brand: "Zara Man", price: "₹3,990", image: "/images/architect.jpg", link: "https://www.zara.com/" }
    ]
  }
};

// Aliases for backwards compatibility with any saved state
personas.bold_experimental = personas.urban_rebel;
personas.subtle_flowing = personas.soft_minimalist;
personas.structured_classic = personas.midnight_architect;
personas.flowing_experimental = personas.effortless_muse;
personas.bold_structured = personas.statement_maker;