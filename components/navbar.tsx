"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/hima-logo.png"
              alt="Hima Products logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/LOGO.jpeg"
              alt="Hima Products icon"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#about"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/products"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#categories"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-foreground hover:text-primary transition-colors duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Bulk Order
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 bg-gradient-to-b from-background to-background/95 rounded-b-lg shadow-lg">
            <Link
              href="/"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 px-2 py-1 rounded hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 px-2 py-1 rounded hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 px-2 py-1 rounded hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#categories"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 px-2 py-1 rounded hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 px-2 py-1 rounded hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact" className="w-full">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300"
              >
                Bulk Order
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
