"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-2xl text-primary hover:scale-105 transition-transform duration-300 animate-slide-down"
          >
            Hima Products
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#about"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/products"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#categories"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group animate-fade-in"
              style={{ animationDelay: "500ms" }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div
            className="hidden md:block animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="animate-spin-once" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 animate-slide-down bg-gradient-to-b from-background to-background/95 rounded-b-lg shadow-lg">
            <Link
              href="/"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 animate-slide-down px-2 py-1 rounded hover:bg-primary/10"
              style={{ animationDelay: "50ms" }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 animate-slide-down px-2 py-1 rounded hover:bg-primary/10"
              style={{ animationDelay: "100ms" }}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 animate-slide-down px-2 py-1 rounded hover:bg-primary/10"
              style={{ animationDelay: "150ms" }}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#categories"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 animate-slide-down px-2 py-1 rounded hover:bg-primary/10"
              style={{ animationDelay: "200ms" }}
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 animate-slide-down px-2 py-1 rounded hover:bg-primary/10"
              style={{ animationDelay: "250ms" }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="w-full animate-slide-down"
              style={{ animationDelay: "300ms" }}
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
                Request a Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
