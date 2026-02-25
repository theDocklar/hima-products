export interface Product {
  id: number;
  name: string;
  category: "Poultry Accessories" | "Packing Solutions" | "Hima Vet Care";
  image: string;
  images?: string[];
  description: string;
  price?: string;
  specifications?: string[];
  features?: string[];
  inStock?: boolean;
  longDescription?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hanging Poultry Feeder",
    category: "Poultry Accessories",
    image: "/poultry-feeder1.jpg",
    images: ["/poultry-feeder1.jpg", "/poultry-feeder2.jpg"],
    description: "Made with the Finest Materials for Lasting Durability",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Elevate your poultry feeding routine with this top-quality 5kg gravity feeder. 
      Designed specifically for Sri Lankan farms, it delivers clean, consistent feed to your birds while slashing waste and saving you time and money. 
      Perfect for backyard setups or small-medium farms in Colombo and beyond. 
      Made tough for real Sri Lankan conditions.`,
    specifications: [
      "Generous 5kg capacity - Holds enough feed for 30–60 birds (depending on type); fewer refills, less daily labor.",
      "Durability: Tropical-ready; resists cracking and corrosion",
      "Weather-resistant design",
      "Easy to use & clean — Wide opening for quick filling; smooth surfaces rinse fast with no hidden corners for dirt.",
    ],
    features: [
      "Premium construction - Built from superior, UV-resistant, non-toxic plastic that resists cracking, fading, and corrosion in humid tropical conditions - built to last for years.",
      "Anti-waste gravity design - Smart lip and tray prevent scratching/spilling; reduces feed loss by up to 30% and keeps feed dry & fresh.",
      "Versatile hanging or height-adjustable - Sturdy wire handle for easy hanging + removable black adjustable legs/pegs (multiple height options) to suit chicks, growers, broilers, or layers.",
    ],
  },
  {
    id: 2,
    name: "Turbo Poultry Feeder",
    category: "Poultry Accessories",
    image: "/turbo-poultry1.jpg",
    images: ["/turbo-poultry1.jpg", "/turbo-poultry2.jpg"],
    description:
      "Premium Red & Yellow Design with Stand for Efficient, Waste-Free Feeding",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Introducing our high-performance Turbo Feeder, crafted from the finest food-grade, durable
      plastic for unbeatable strength and longevity in Sri Lanka's humid farm conditions. This vibrant
      red bowl with yellow base and sturdy black metal stand delivers smart, controlled feeding that
      minimizes waste while keeping your chicks or birds healthy and growing fast.
      Perfect for backyard setups, small farms, or commercial brooding in Colombo and across the island. 
      Get superior feed efficiency and healthier flocks.`,
    specifications: [
      "Generous capacity & coverage — Holds ample feed (suitable for 30–70 chicks/birds depending on age/type); ideal for day-old to grower stages in brooders or floor systems.",
      "Superior build quality — Made with premium, UV-resistant, non-toxic plastic that resists cracking, fading, and corrosion - built tough to last through rain, heat, and daily use.",
    ],
    features: [
      "Anti-waste turbo design — Innovative cone-shaped hopper and wide bowl with controlled release prevent scratching, spilling, and over-eating; reduces feed loss significantly for better cost savings.",
      "Easy fill, clean & use — Wide top opening for quick pouring; smooth surfaces rinse clean in seconds; bright colors help spot it easily in the farm.",
      "Stable elevated stand — Black metal legs keep the feeder off the ground, reducing contamination from litter/droppings and making it easier for birds to access without soiling feed.",
    ],
  },
  {
    id: 3,
    name: "Chick Feed Tray",
    category: "Poultry Accessories",
    image: "/chick-feeder1.jpg",
    images: ["/chick-feeder1.jpg", "/chick-feeder2.jpg"],
    description:
      "Premium Yellow Round Plastic Tray for Easy, Waste-Free Chick Feeding",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Give your day-old chicks the perfect start with this high-quality chick feed tray, expertly crafted
      from the finest food-grade, durable plastic. Its bright yellow color and smooth, round design
      make it ideal for Sri Lankan poultry farms - providing easy access, minimal waste, and quick
      cleaning in humid tropical conditions.`,
    specifications: [
      "Generous round shape — Wide, shallow pan allows multiple chicks to feed simultaneously (suits 20–50+ chicks depending on age and setup); promotes healthy growth and less competition.",
      "Superior material quality — Made with premium, non-toxic, UV-resistant plastic that withstands heat, humidity, and daily farm use without cracking or fading - built to last season after season.",
      "Spill-resistant & efficient design — Concentric ring grooves help contain feed, reduce scattering by chicks, and keep it clean and fresh; encourages even eating without excess waste.",
    ],
    features: [
      "Hygienic & low-maintenance — Smooth, easy-to-rinse surfaces with no sharp edges; quick to fill and clean, reducing disease risk from soiled feed.",
      "Versatile for early stages — Perfect for day-old to 2–3 week-old chicks in brooders, floor systems, or small backyard setups - stackable for storage convenience.",
      "Bright and visible on the farm floor, this tray helps boost chick survival and growth rates. Essential for healthier batches",
    ],
  },
  {
    id: 4,
    name: "Manual Poultry Drinkers",
    category: "Poultry Accessories",
    image: "/manual-poultry-drinker1.jpg",
    images: ["/manual-poultry-drinker1.jpg", "/manual-poultry-drinker2.jpg"],
    description:
      "1L, 2L, 4L & 9L Sizes – Premium Gravity Waterers for Clean, Hassle-Free Hydration",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Keep your flock hydrated effortlessly with our range of manual gravity poultry drinkers in 1L, 2L, 4L, and 9L
      capacities. Crafted from the finest food-grade, high-quality plastic, these white hoppers with bright yellow bases are
      durable, non-toxic, and built to thrive in Sri Lanka's humid and hot climate. The classic design features a transparent
      jar for easy water level checks and a wide, stable yellow tray that minimizes spillage while giving birds easy access.
      These versatile drinkers promote better health, higher egg/meat production, and less labor for backyard or
      commercial setups in Colombo and across the island.`,
    specifications: [
      "Size options for every stage",
      "1L & 2L — Ideal for day-old chicks or small brooder groups (20–50 birds).",
      "4L — Great for growers or medium flocks.",
      "9L — Perfect for larger batches, layers, or broilers (up to 40 birds) with fewer refills.",
      "Top-tier material — Made with superior, UV-resistant, crack-proof plastic that withstands tropical heat, rain, and daily use without fading or breaking — long-lasting reliability.",
    ],
    features: [
      "Gravity-fed simplicity — Water flows automatically as birds drink; no electricity needed, no pumps — just fill and hang for constant fresh supply.",
      "Anti-spill & clean design — Wide yellow base tray with raised edges prevents tipping and reduces contamination from litter; keeps water cleaner longer and cuts algae growth.",
      "Easy to use & maintain — Quick-fill top opening; smooth surfaces rinse clean in seconds; hanging handle for secure placement in coops or runs.",
    ],
  },
  {
    id: 5,
    name: "Brooder Guard",
    category: "Poultry Accessories",
    image: "/brooder-guard.jpg",
    description:
      "57 Feet (for 1000 Chicks) & 40 Feet (for 500 Chicks) – Premium Non-Corrosive Protection",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Protect your day-old chicks with confidence using our high-quality brooder guard from Hima Products — the
      trusted choice for Sri Lankan poultry farmers. Available in two practical sizes: 57 feet (ideal for up to 1000
      chicks) and 40 feet (suitable for up to 500 chicks in larger or multiple setups). Crafted from the finest non-
      corrosive materials, this durable guard creates a safe, enclosed brooding area that keeps chicks warm,
      prevents escapes, and reduces drafts - essential for healthy early growth and lower mortality rates.
      Proudly made by Hima Products for real Sri Lankan conditions — reliable, affordable, and built to last. Whether
      you're starting small or scaling up in Colombo or rural areas, this brooder guard gives your chicks the best start.`,
    specifications: [
      "Size options for every farm",
      "57 feet roll — Forms a brooder ring approx. 18–20 feet in diameter — perfect for 800–1000 chicks in standard setups.",
      "40 feet roll — Ideal for larger brooding areas or multiple smaller rings — suits 500 chicks or scalable operations.",
      "Perfect chick containment — Sturdy, flexible design forms a secure circular barrier; keeps chicks close to the heat source while allowing easy access for feeding, watering, and monitoring.",
    ],
    features: [
      "Non-corrosive & long-lasting — Made with superior, rust-proof, weather-resistant materials that stand up to Sri Lanka's high humidity, heat, and occasional moisture — no rusting or degradation, even after years of use.",
      "Easy setup & maintenance — Lightweight yet strong; rolls up for storage/transport; smooth surfaces clean quickly and resist dirt buildup.",
      "Promotes healthier batches — Reduces chilling, huddling, and stress - supports better feed conversion, faster feathering, and higher survival rates from day 1.",
    ],
  },
  {
    id: 6,
    name: "Light Brooder Canopy",
    category: "Poultry Accessories",
    image: "/light-brooder-canopy.jpg",
    description:
      "Premium Blue Exterior with Silver Reflective Interior for Superior Chick Warming (Up to 500 Chicks)",
    price: "Contact for custom quote",
    inStock: true,
    longDescription: `Our light brooder canopy from Hima Products features a smart dual-tone design: vibrant blue coating on the
      outside for durability and easy visibility on the farm, paired with a shiny silver-look interior that maximizes heat
      reflection. This electric-powered canopy directs infrared lamp heat downward efficiently, creating an even, cozy
      brooding zone for your chicks without fuel hassles or open flames.`,
    specifications: [
      "Blue exterior coating — Tough, weather-resistant blue finish made from the finest non-corrosive, heat-proof materials — withstands Sri Lanka's humidity, rain, and tropical heat while staying easy to clean and long-lasting.",
      "Optimized for 500 chicks — Large coverage suits medium-large batches (with multiple heat lamps, adjustable height); chicks can self-regulate by moving under/away from the heat — reduces stress, chilling, and mortality for stronger growth.",
    ],
    features: [
      "Ready-to-use setup — Pre-wired with secure white lamp sockets (multiple positions), insulated cables, and hanging points/clips — simple to install above brooder guards; add your infrared bulbs and go.",
      "Safe, efficient & local pride — No gas risks; promotes better feed conversion and health; proudly manufactured by Hima Products in Sri Lanka — quality that competes with imports, with full support and availability.",
      "Silver reflective inside — High-shine silver interior bounces and focuses lamp heat perfectly — no wasted energy, even distribution across the brooding area, helping maintain ideal temperatures (32–35°C start) with fewer bulbs.",
    ],
  },
  {
    id: 7,
    name: "Auto Drinker",
    category: "Poultry Accessories",
    image: "/auto-drinker.jpg",
    images: [
      "/auto-drinker.jpg",
      "/auto-drinker2.jpg",
      "/auto-drinker3.jpg",
      "/auto-drinker4.jpg",
      "/auto-drinker5.jpg",
      "/auto-drinker6.jpg",
      "/auto-drinker7.jpg",
    ],
    description:
      "Proudly Sri Lankan-Made Automatic Bell Drinker (Red Cone Model).",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `We're thrilled to showcase our upgraded Auto Drinker, the best-selling automatic bell drinker in Sri Lanka — and the only one proudly manufactured right here in Sri Lanka! 
    While others in the market rely on imported versions, this is our own local innovation, engineered and produced by us to meet the real needs of Sri Lankan poultry farmers. 
    We've improved it with better durability, smarter features, and superior performance — holding its own (and often outperforming) against big foreign brands. 
    This bright red cone-shaped automatic bell drinker delivers clean, fresh water on demand with zero hassle, using a reliable pressure-triggered valve system connected via black tubing and secure hanging clips/rope. 
    The wide red tray catches any drips, keeping floors dry and reducing waste.`,
    specifications: [
      "Locally manufactured pride — 100% Sri Lankan production using the finest food-grade, UV-resistant plastic — tougher against our tropical humidity, heat, and rain than many imports; no quality compromises.",
      "Water-saving & hygienic — Birds trigger water only when pecking — cuts waste by up to 70%, prevents algae/dirt contamination, and keeps water fresher for healthier flocks and fewer diseases.",
    ],
    features: [
      "Bird-friendly & versatile — Wide red tray suits broilers, layers, chicks to adults; adjustable hanging setup grows with your birds; ideal for floor, cage, or free-range systems.",
      "Proven best-seller — Farmers across Colombo and the island choose it for reliability, low maintenance, and real cost savings — competes head-to-head with imported brands at better value.",
      "Advanced improvements — Enhanced valve and adjustable height mechanism for precise water flow; upgraded anti-leak design and durable black fittings/clamps for longer life and easier installation.",
    ],
  },
  {
    id: 8,
    name: "Egg Tray",
    category: "Packing Solutions",
    image: "/egg-tray1.jpg",
    images: ["/egg-tray1.jpg", "/egg-tray2.jpg"],
    description:
      "Durable Multi-Color Plastic Trays for Safe Egg Storage & Transport",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Organize and protect your fresh eggs with our high-quality plastic egg trays from Hima Products — the reliable choice for Sri Lankan
      poultry farmers, backyard keepers, and small egg producers. These vibrant, stackable trays come in eye-catching colors (red, orange,
      yellow, green, blue) and are designed to hold eggs securely, preventing breakage during collection, storage, or market delivery.
      Customization at its best: Choose from a variety of vibrant custom colors for your egg trays to create eye-catching, brand-aligned
      packaging that enhances your product's appeal in the market. Custom color production is subject to the following standard terms and
      conditions:
      Minimum order quantity (MOQ) requirements to ensure cost-effectiveness, Applicable production lead times, 
      Confirmation of color availability and dye consistency. Contact us for a quote, color samples, or to discuss your specific requirements -
      we're happy to help bring your vision to life`,
    specifications: [
      "Generous capacity & stackable — Standard 30-egg layout (common for these trays) per layer; multiple trays stack neatly for space- saving storage or transport — ideal for collecting dozens to hundreds of eggs at once.",
      "Made with the finest materials — Crafted from premium, food-grade, non-toxic plastic that's strong, lightweight, and resistant to cracking or warping — built to handle daily farm use in humid tropical conditions without degrading.",
      "Versatile for all farms — Perfect for layers in backyard setups, small commercial farms, or egg collection points in Colombo and rural areas — durable enough for repeated use season after season.",
    ],
    features: [
      "Secure & protective design — Each tray features individual cone-shaped pockets with rounded edges to cradle eggs gently; reduces rolling, cracking, and damage from bumps or stacking.",
      "Easy to clean & hygienic — Smooth surfaces rinse quickly with water; no pores for bacteria buildup — maintains egg quality and meets basic hygiene standards for selling or home use.",
      "Bright, visible colors — Multi-color options (rainbow stack shown) make them easy to spot in the coop, storage area, or market stall; helps with organization and quick inventory checks.",
    ],
  },
  {
    id: 9,
    name: "Feeder Hanging Cord",
    category: "Poultry Accessories",
    image: "/feeder-hanging-chord1.jpg",
    images: ["/feeder-hanging-chord1.jpg", "/feeder-hanging-chord2.jpg"],
    description: "Durable Rope with Adjustable Clip for 5kg Feeders",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Keep your 5kg poultry feeder securely suspended and at the perfect height with our Hima
      Feeder Hanging Cord — sold as a separate replacement or upgrade item. This Made from
      strong, black braided rope and fitted with a high-visibility yellow plastic adjuster clip. Simply
      slide the clip to instantly set your desired feeder height—no tools or hassle required. Secure,
      reliable, and designed for smooth, one-handed adjustment.
      Essential spare for farms — replace worn cords instantly or add extras for multiple feeders.`,
    specifications: [
      "Tough & reliable — High-quality braided rope resists stretching, fraying, and weather damage in Sri Lanka's humid conditions.",
      "Secure hanging — Sturdy plastic hook grips feeder handle firmly; no slipping or falling.",
    ],
    features: [
      "Adjustable yellow clip — Simple slide-to-adjust mechanism lets you raise/lower the feeder quickly for different bird ages or setups.",
      "Ready-to-use — Pre-cut length with pre-attached clip — just hang and go.",
      "Perfect match — Designed specifically for our 5kg yellow gravity feeders; also works with similar models.",
    ],
  },
  {
    id: 10,
    name: "Chicken Transporting Cages",
    category: "Packing Solutions",
    image: "/chicken-transporting-cages1.jpg",
    description:
      "Durable Plastic Crates in Green & Orange (Custom Mix Available) Dimension L 95.30 x W57.20 x 25.40 -CM",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Safely move your live poultry with our high-quality chicken transporting cages from Hima Products — designed specifically for
      Sri Lankan farmers to reduce stress, prevent injuries, and make transport easier from farm to market or processing. These
      sturdy, ventilated crates come in vibrant green and orange colors, with the option to request a mixed assembly (e.g., green
      base with orange top or fully custom combos) for better organization or branding.`,
    specifications: [
      "Made with the finest materials — Crafted from premium, food-grade, heavy-duty plastic that's non-corrosive, impact- resistant, and built to withstand Sri Lanka's humid, tropical conditions — no rust, cracking, or fading over time.",
      "Excellent ventilation & bird comfort — Fully perforated sides, top, and bottom (grid/open design) ensure maximum airflow, keeping chickens cool, reducing heat stress, and improving welfare during transport — leads to healthier birds on arrival and fewer losses.",
      "Large capacity & versatile — Spacious interior suits broilers, layers, or growers (typical models hold 10–20+ adult birds depending on size); lightweight yet strong for easy handling by 1–2 people; ideal for short or longer hauls in Colombo traffic or rural roads.",
    ],
    features: [
      "Easy clean & hygienic — Smooth surfaces rinse quickly with water; resists bacteria buildup — maintains biosecurity and meets market standards.",
      "Color options & customization — Available in green (classic farm look) and orange (high-visibility); request mixed green-orange assemblies to color-code batches, sizes, or farms — adds practicality and a professional touch.",
      "Smart, secure design — Stackable for efficient loading on trucks or storage; smooth edges prevent injuries; easy-access doors/sliding panels (often with secure latches) for quick loading/unloading without escaping birds.",
    ],
  },
  {
    id: 11,
    name: "Egg Crates",
    category: "Packing Solutions",
    image: "/egg-crate1.jpg",
    images: ["/egg-crate1.jpg", "/egg-crate2.jpg"],
    description:
      "Versatile Plastic Transport Crates in Yellow & Green (Multi-Use for Eggs, Vegetables, Fruits & Fish) Dimension L67.20 x W38.00 x H32.50",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Transport your produce safely and efficiently with our durable egg crates from Hima Products — the go-to solution for Sri
      Lankan farmers and vendors. These sturdy, ventilated crates (shown in bright yellow tops with green bases, stackable for easy
      storage and loading) are primarily designed for holding egg trays during transport, but their robust build and open-grid design
      make them perfect for vegetables, fruits, fish, and other perishables too.
      These crates help minimize damage, improve hygiene, and save time/labor across your farm-to-market chain. Proudly from
      Hima Products — local quality built for real Sri Lankan needs. Grab yours in yellow, green, or mixed stacks`,
    specifications: [
      "Practical capacity — Large interior suits bulk loads (e.g., multiple egg trays or 20–30 kg of produce/fish depending on model); lightweight yet strong for truck/van loading in Colombo markets or rural roads.",
      "Versatile & hygienic — Ideal for egg collection/transport (with trays inside), vegetable/fruits (e.g., tomatoes, greens, mangoes), or fresh fish/seafood; easy to rinse clean with water; resists bacteria and odors for repeated safe use.",
      "Premium construction — Made from the finest food-grade, heavy-duty plastic that's non-corrosive, impact-resistant, and built to handle Sri Lanka's humid, tropical weather — no rust, cracking, or fading, even with daily use and washing.",
    ],
    features: [
      "Excellent ventilation — Fully perforated sides and base allow maximum airflow, keeping eggs cool/fresh, preventing moisture buildup on veggies/fruits, and maintaining fish quality during short hauls to market or processing — reduces spoilage and extends shelf life.",
      "Stackable & secure design — High sides with interlocking edges stack stably when full or empty; smooth handles for easy carrying; fits egg trays perfectly while offering extra space for loose produce or iced fish.",
      "Color options — Available in yellow (high-visibility) and green (classic farm style); stack them mixed for better organization (e.g., yellow for eggs, green for veggies) — adds practicality for sorting batches. For a truly personalized touch, we also offer custom colors (subject to our standard terms: minimum order quantities for cost efficiency, applicable lead times, and confirmation of dye availability/consistency",
    ],
  },
  {
    id: 12,
    name: "Foldable Egg Crate",
    category: "Packing Solutions",
    image: "/foldable-egg-crate.jpg",
    description: "Improved Space-Saving Version",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Discover our upgraded foldable egg crate from Hima Products — the improved version of regular egg crates,
        proudly the only one manufactured in Sri Lanka! While others import similar products, this is our local
        innovation: a durable, ventilated plastic crate that folds flat like a book after delivery, saving massive space in
        your vehicle, warehouse, or farm storage.
        Shown in bright blue with a white interior/base (perfect for visibility and hygiene), it holds egg trays securely
        during transport (fits standard 30-egg trays, typically 10–12 trays for 300–360+ eggs depending on model) and
        works great for eggs, but also versatile for vegetables, fruits, or fish thanks to its open-grid ventilation.
        This improved foldable crate combines reliability, convenience, and real cost savings — farmers in Colombo and
        across the island love it for easier returns and storage. Support local excellence with Hima Products quality that
        beats imports.`,
    specifications: [
      "Superior build quality — Crafted from the finest food-grade, heavy-duty PP/PE plastic that's non-corrosive, impact-resistant, and tough against humidity, heat, and daily washing — lasts years without cracking or fading.",
      "Space-saving foldable feature — After unloading, simply fold it flat (like closing a book) to reduce volume by up to 70–80% — stack neatly for return trips, storage, or resale; cuts transport costs and frees up farm space.",
      "Proudly Sri Lankan-made — The only local manufacturer offering this advanced foldable design — supports our economy, ensures quick availability, better quality control, and no import delays or extra costs.",
    ],
    features: [
      "Ventilated & protective — Full perforations on all sides ensure excellent airflow to keep eggs/ produce cool and fresh, reduce condensation/spoilage; sturdy structure prevents shifting/cracking during bumpy roads from farm to market.",
      "Easy handling & hygienic — Built-in handles for easy carry; smooth surfaces rinse clean quickly; stackable when assembled for efficient loading; blue exterior stands out, white interior helps spot dirt/eggs easily.",
      "Multi-use versatility — Ideal for egg tray transport, but equally great for bulk veggies/fruits (e.g., tomatoes, onions) or fresh fish/seafood — promotes better hygiene and reduces losses across your supply chain.",
    ],
  },
  {
    id: 13,
    name: "Freezer Crate",
    category: "Packing Solutions",
    image: "/freezer-crate.jpg",
    description:
      "Premium Yellow Ventilated Plastic Crate for Cold Chain Transport (Vegetables, Fruits, Fish & Meat) Dimension L60.00 x W39.00 x H18.70",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Keep your perishables fresh and protected during transport with our freezer crate from Hima Products — a durable, ventilated plastic
      crate ideal for cold storage and delivery of vegetables, fruits, fish, meat, and other temperature-sensitive goods. This bright yellow crate
      features a spacious rectangular design with open-grid sides and base for excellent airflow, drainage, and quick chilling/freezing — perfect
      for ice packing, refrigerated trucks, or freezer storage in Sri Lanka's markets and supply chains.
      This reliable crate supports better product quality, fewer losses, and smoother farm-to-market operations across Colombo and the island.
      Proudly from Hima Products — local quality built tough for real Sri Lankan use.
      For a truly personalized touch, we also offer custom colors (subject to our standard terms: minimum order quantities for cost efficiency,
      applicable lead times, and confirmation of dye availability/consistency`,
    specifications: [
      "Made with the finest materials — Crafted from premium, food-grade, heavy-duty plastic that's non-corrosive, impact-resistant, and designed to handle extreme cold (freezer-safe) as well as humid tropical conditions — no cracking, warping, or odor absorption over time.",
      "Versatile cold chain use — Ideal for: Fresh/frozen fish & seafood (with ice for short hauls), Meat cuts or poultry portions, Vegetables (greens, roots) and fruits (mangoes, bananas) in chilled transport, General freezer storage or market delivery without flavor transfer.",
      "Bright & visible — Eye-catching yellow color stands out in markets, storage rooms, or vehicles — helps with quick identification and organization.",
    ],
    features: [
      "Superior ventilation & drainage — Fully perforated walls and base promote rapid cooling, prevent moisture buildup/condensation, and allow ice melt to drain away — keeps fish/meat fresh longer, reduces spoilage in veggies/fruits, and maintains hygiene.",
      "Practical design for transport — Generous size with built-in handles for easy carrying and loading; stackable when full for efficient truck/van use; smooth edges prevent damage to delicate produce or packaging.",
      "Hygienic & easy maintenance — Smooth, non-porous surfaces rinse clean quickly with water or disinfectants; resists bacteria and easy to sanitize — meets basic food safety needs for vendors and farmers.",
    ],
  },
  {
    id: 14,
    name: "Dog Leash & Rope",
    category: "Hima Vet Care",
    image: "/dog-leesh1.jpg",
    description: "Hima Dogs Leash/Rope",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Strong, Colorful & Safe Bright braided or flat nylon
      leads in red, blue, green, yellow. Padded grip, secure clip, reflective strips for night walks. Durable
      against pulls & weather. Perfect control for daily adventures. From Hima Products – Sri Lanka's trusted
      pet gear.`,
    specifications: ["Secure clip", "Reflective strips for night walks"],
    features: ["Strong", "Colorful", "Safe"],
  },
  {
    id: 15,
    name: "No-Pull Dog Harness Hima Adjustable No-Pull Harness",
    category: "Hima Vet Care",
    image: "/dog-leesh2.jpg",
    description: "Hima Dogs Leash/Rope",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Comfort & Control Stops pulling gently
      with front/back clips. Padded, breathable mesh, quick-release buckles. Adjustable fit for all
      sizes/breeds. Reflective accents for safety. Easy on/off, no neck strain. Local quality from Hima – better
      walks, happier dogs.`,
    features: ["Easy on/off", "Fit for all breeds", "Fit for all sizes"],
  },
  {
    id: 16,
    name: "Dog Collar Hima Adjustable Dog Collar",
    category: "Hima Vet Care",
    image: "/dog-collar1.jpg",
    description: "Hima Dog Collar",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Secure & Visible Soft webbing, quick-buckle, reflective
      strips. Strong D-ring for tags/leash. Comfortable all-day wear, no chafing. Bright colors to match your
      style. ID-ready & tough. Proudly made by Hima Products in Sri Lanka.`,
    features: ["Strong D-ring", "Comfartable all-day wear", "No chafing"],
  },
  {
    id: 17,
    name: "Hima Dogs Walking Set",
    category: "Hima Vet Care",
    image: "/dog-leesh1.jpg",
    images: ["/dog-leesh1.jpg", "/dog-collar1.jpg"],
    description: "Full Set (Bundle/Collection)",
    price: "Contact for pricing",
    inStock: true,
    longDescription: `Leash, Harness & Collar Matching
      no-pull harness, leash/rope, & collar in vibrant colors. Reflective safety, adjustable comfort, durable
      nylon. Stop pulling, enjoy stress-free walks. Complete kit from Hima – Sri Lanka's pet essential maker.`,
    features: ["Strong D-ring", "Comfartable all-day wear", "No chafing"],
  },
];

export const categories = [
  "Poultry Accessories",
  "Packing Solutions",
  "Hima Vet Care",
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
