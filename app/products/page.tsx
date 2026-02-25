"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryFromUrl,
  );
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <main className="w-full">
      <Navbar />

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete range of animal feeder equipment and find the
              perfect solution for your needs.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? "default" : "outline"}
                className="transition-all"
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={
                      product.image ||
                      "/placeholder.svg?height=400&width=500&query=animal feeder equipment"
                    }
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
                  <div className="flex gap-2">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button
                        variant="default"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
