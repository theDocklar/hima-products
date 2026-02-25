"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { products, getProductById } from "@/lib/products";
import { ChevronLeft, Check } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number.parseInt(params.id as string);
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = product
    ? products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3)
    : [];

  if (!product) {
    return (
      <main className="w-full">
        <Navbar />
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="w-full">
      <Navbar />

      <section className="py-8 md:py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
          >
            <ChevronLeft size={20} />
            Back to Products
          </Link>

          {/* Product Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={
                    product.images?.[selectedImage] ||
                    product.image ||
                    "/placeholder.svg?height=600&width=600&query=animal feeder equipment"
                  }
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-start gap-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground">{product.price}</p>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Status */}
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-foreground">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12">
                  Request a Quote
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 text-base h-12 bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications and Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Specifications
                  </h3>
                  <ul className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Related Products
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="relative h-56 overflow-hidden bg-muted">
                        <Image
                          src={
                            relatedProduct.image ||
                            "/placeholder.svg?height=300&width=300&query=animal feeder equipment"
                          }
                          alt={relatedProduct.name}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="pt-4">
                        <p className="text-sm font-semibold text-primary mb-2">
                          {relatedProduct.category}
                        </p>
                        <h4 className="font-bold text-foreground mb-2">
                          {relatedProduct.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {relatedProduct.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
