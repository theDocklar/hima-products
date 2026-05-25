import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground-foreground bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">
              Hima Products Pvt Ltd
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading distributor and manufacturer of quality animal feeder
              equipment since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-gray-300 hover:text-white transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#categories"
                  className="text-gray-300 hover:text-white transition"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <Phone size={16} className="mt-1 flex-shrink-0" />

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 whitespace-nowrap">
                    <span>+94 70 320 3035</span>
                    <span>- Poultry Info</span>
                  </div>

                  <div className="flex gap-2 whitespace-nowrap">
                    <span>+94 71 254 0500</span>
                    <span>- Crate Info</span>
                  </div>

                  <div className="flex gap-2 whitespace-nowrap">
                    <span>+94 70 320 3033</span>
                    <span>- Dog Belt Info</span>
                  </div>
                </div>
              </li>
              <li className="flex flex-col gap-1 text-gray-300">
                <div className="flex items-center gap-2">
                  <PhoneCall size={16} />
                  <span>General</span>
                </div>

                <span className="ml-6">+94 11 303 8425</span>
                <span className="ml-6">+94 77 125 5820</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaWhatsapp className="text-green-400 text-lg flex-shrink-0" />

                <a
                  href="https://wa.me/94712460500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  +94 71 246 0500
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>hima.products@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>info@himaproducts.lk</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>
                  No: 314, Negombo Road, <br /> Thudella, Ja-ela.
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Find Us</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.3545698058147!2d79.88777097499803!3d7.084830692918141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDUnMDUuNCJOIDc5wrA1MycyNS4zIkU!5e0!3m2!1sen!2slk!4v1779010159934!5m2!1sen!2slk"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © 2025 Hima Products Pvt Ltd. All rights reserved. | Quality Animal
            Feeder Equipment
          </p>
        </div>
      </div>
    </footer>
  );
}
