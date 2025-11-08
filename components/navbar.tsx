"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-primary">
            Hima Products
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition">
              About Us
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition">
              Products
            </Link>
            <Link href="/#categories" className="text-foreground hover:text-primary transition">
              Categories
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Request a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition">
              About Us
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition">
              Products
            </Link>
            <Link href="/#categories" className="text-foreground hover:text-primary transition">
              Categories
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Request a Quote</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
