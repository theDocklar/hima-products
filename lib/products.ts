export interface Product {
  id: number
  name: string
  category: "Poultry Feeder" | "Livestock Feeder" | "Automatic System" | "Storage Solution" | "Custom Manufacturing"
  image: string
  description: string
  price?: string
  specifications?: string[]
  features?: string[]
  inStock?: boolean
  longDescription?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Poultry Feeder System",
    category: "Poultry Feeder",
    image: "/poultry-feeder-modern-design.jpg",
    description: "Efficient and durable feeder system designed for poultry operations.",
    price: "Contact for pricing",
    inStock: true,
    longDescription:
      "Our Poultry Feeder System is engineered for maximum efficiency in chicken, duck, and bird operations. Built with premium materials to withstand harsh agricultural environments.",
    specifications: [
      "Capacity: 50-100 lbs",
      "Material: Galvanized Steel",
      "Weather-resistant design",
      "Easy-to-clean components",
      "Adjustable height",
    ],
    features: [
      "Anti-waste design reduces feed loss",
      "Weather-resistant construction",
      "Smooth access for birds",
      "Durable and long-lasting",
      "Low maintenance operation",
    ],
  },
  {
    id: 2,
    name: "Cattle Trough Feeder",
    category: "Livestock Feeder",
    image: "/cattle-feeding-trough.jpg",
    description: "Heavy-duty stainless steel trough for large livestock operations.",
    price: "Contact for pricing",
    inStock: true,
    longDescription:
      "Designed for heavy-duty use in cattle and large livestock operations. Our Cattle Trough Feeder features premium stainless steel construction for durability and hygiene.",
    specifications: [
      "Capacity: 200-500 lbs",
      "Material: Stainless Steel",
      "Rust-resistant",
      "Easy drainage system",
      "Portable with handles",
    ],
    features: [
      "Superior durability for large livestock",
      "Hygienic stainless steel construction",
      "Built-in drainage for easy cleaning",
      "Portable design for flexibility",
      "Resistant to corrosion and wear",
    ],
  },
  {
    id: 3,
    name: "Automatic Feed Dispenser",
    category: "Automatic System",
    image: "/automatic-feed-dispensing-machine.jpg",
    description: "Automated system for precise and consistent feed distribution.",
    price: "Contact for pricing",
    inStock: true,
    longDescription:
      "Our Automatic Feed Dispenser provides precision-controlled feeding schedules for optimal animal nutrition. Perfect for modern agricultural operations seeking efficiency and consistency.",
    specifications: [
      "Programmable timer control",
      "Capacity: 100-300 lbs",
      "Adjustable portion sizes",
      "Digital display",
      "Battery backup system",
    ],
    features: [
      "Programmable feeding schedules",
      "Reduces manual labor",
      "Consistent portion control",
      "Weather-resistant enclosure",
      "Energy-efficient operation",
    ],
  },
  {
    id: 4,
    name: "Feed Storage Tank",
    category: "Storage Solution",
    image: "/large-feed-storage-container.jpg",
    description: "Industrial-grade storage solution for bulk feed management.",
    price: "Contact for pricing",
    inStock: true,
    longDescription:
      "Store bulk feed safely with our industrial-grade storage tanks. Designed for long-term preservation and easy access, our tanks keep feed fresh and protected from elements.",
    specifications: [
      "Capacity: 500-2000 lbs",
      "Material: Galvanized or Stainless Steel",
      "Moisture-proof sealed design",
      "Access hatch with lock",
      "Weather protection roof",
    ],
    features: [
      "Large-capacity bulk storage",
      "Moisture and pest protection",
      "Easy access for filling and dispensing",
      "Durable construction for outdoor use",
      "Lockable design for security",
    ],
  },
  {
    id: 5,
    name: "Pig Feeder",
    category: "Livestock Feeder",
    image: "/pig-feeding-equipment.jpg",
    description: "Specialized feeder designed for swine farming operations.",
    price: "Contact for pricing",
    inStock: true,
    longDescription:
      "Our specialized Pig Feeder is engineered specifically for swine operations, featuring design elements that promote healthy feeding behavior and minimize waste.",
    specifications: [
      "Capacity: 75-150 lbs",
      "Material: Reinforced Steel",
      "Self-leveling mechanism",
      "Anti-waste edges",
      "Easy-access doors",
    ],
    features: [
      "Self-leveling feed supply",
      "Reduces waste and mess",
      "Durable reinforced construction",
      "Promotes natural feeding behavior",
      "Low maintenance design",
    ],
  },
  {
    id: 6,
    name: "Custom Feed System",
    category: "Custom Manufacturing",
    image: "/custom-feed-system-design.jpg",
    description: "Bespoke feeding solutions tailored to your specific needs.",
    price: "Contact for custom quote",
    inStock: true,
    longDescription:
      "We specialize in custom-designed feeding systems tailored to your unique agricultural requirements. Work with our engineering team to create the perfect solution.",
    specifications: [
      "Fully customizable design",
      "Material selection based on needs",
      "Flexible capacity options",
      "Integration with existing systems",
      "Professional installation available",
    ],
    features: [
      "Tailored to your specific needs",
      "Expert engineering consultation",
      "Quality materials and construction",
      "Comprehensive support and training",
      "Future modification capability",
    ],
  },
]

export const categories = [
  "Poultry Feeder",
  "Livestock Feeder",
  "Automatic System",
  "Storage Solution",
  "Custom Manufacturing",
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
