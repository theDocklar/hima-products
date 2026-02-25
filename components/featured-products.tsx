"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of quality animal feeder equipment designed for
            efficiency and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    hoveredId === product.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <CardHeader className="pb-2">
                <p className="text-sm font-semibold text-primary mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-foreground">
                  {product.name}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <Link href={`/products/${product.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    View Product
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 cursor-pointer">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
