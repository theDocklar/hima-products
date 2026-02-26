"use client";

import { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { useSearchParams } from "next/navigation";

function ProductsContent() {
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
    <>
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete range of animal feeder equipment and find the
              perfect solution for your needs.
            </p>
          </div>

          <div
            className="mb-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? "default" : "outline"}
                className="transition-all hover:scale-105 duration-300"
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
                  className="transition-all hover:scale-105 duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
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
                    className={`object-cover transition-transform duration-500 ${
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
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 bg-transparent transition-all duration-300"
                      >
                        Request Quote
                      </Button>
                    </Link>
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
    </>
  );
}

export default function ProductsPage() {
  return (
    <main className="w-full">
      <Navbar />
      <Suspense
        fallback={
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-lg text-muted-foreground">
                Loading products...
              </p>
            </div>
          </section>
        }
      >
        <ProductsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
