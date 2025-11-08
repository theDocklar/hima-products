import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground-foreground bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">FeedEquip</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading distributor and manufacturer of quality animal feeder equipment since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-gray-300 hover:text-white transition">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>info@feedequip.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>123 Industrial Way, Farm Valley, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © 2025 FeedEquip. All rights reserved. | Quality Animal Feeder Equipment
          </p>
        </div>
      </div>
    </footer>
  )
}
