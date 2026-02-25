import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Layers, Package, HeartPulse } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Poultry Accessories",
    description:
      "Specialized equipment for chicken, duck, and bird operations.",
    icon: "Layers",
    image: "/manual-poultry-drinker1.jpg",
  },
  {
    id: 2,
    name: "Packing Solutions",
    description: "Durable egg crates, transport solutions and storage systems.",
    icon: "Package",
    image: "/egg-crate1.jpg",
  },
  {
    id: 3,
    name: "Hima Vet Care",
    description:
      "Quality pet care products including leashes, collars and harnesses.",
    icon: "HeartPulse",
    image: "/dog-leesh1.jpg",
  },
];

const iconMap = {
  Layers,
  HeartPulse,
  Package,
};

export default function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Equipment Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive selection of animal feeder equipment by
            category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];

            return (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.name)}`}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors" />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-bold text-foreground text-lg">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
