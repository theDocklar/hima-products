export interface Product {
  id: number;
  name: string;
  category:
    | "Poultry Feeder"
    | "Livestock Feeder"
    | "Automatic System"
    | "Storage Solution"
    | "Custom Manufacturing";
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
    category: "Poultry Feeder",
    image: "/poultry-feeder1.jpg",
    images: ["/poultry-feeder2.jpg"],
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
    category: "Poultry Feeder",
    image: "/turbo-poultry1.jpg",
    images: ["/turbo-poultry2.jpg"],
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
    category: "Poultry Feeder",
    image: "/chick-feeder1.jpg",
    images: ["/chick-feeder2.jpg"],
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
    category: "Poultry Feeder",
    image: "/manual-poultry-drinker1.jpg",
    images: ["/manual-poultry-drinker2.jpg"],
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
    category: "Custom Manufacturing",
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
    category: "Custom Manufacturing",
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
    category: "Automatic System",
    image: "/auto-drinker.jpg",
    images: [
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
    category: "Storage Solution",
    image: "/egg-tray1.jpg",
    images: ["/egg-tray2.jpg"],
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
    category: "Storage Solution",
    image: "/feeder-hanging-chord1.jpg",
    images: ["/feeder-hanging-chord2.jpg"],
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
];

export const categories = [
  "Poultry Feeder",
  "Livestock Feeder",
  "Automatic System",
  "Storage Solution",
  "Custom Manufacturing",
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
