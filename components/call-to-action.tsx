import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in">
          Looking for Reliable Animal Feeder Solutions?
        </h2>
        <p
          className="text-lg md:text-xl mb-8 opacity-90 text-balance animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          Let's build a sustainable feeding system together. Our expert team is
          ready to help you find the perfect equipment for your operation.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          <Link href="/products">
            <Button className="bg-white text-primary hover:bg-white/90 hover:scale-110 transition-all duration-300 px-8 py-6 text-lg font-semibold cursor-pointer shadow-xl hover:shadow-2xl">
              View Catalogue
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 px-8 py-6 text-lg font-semibold bg-transparent cursor-pointer shadow-xl hover:shadow-2xl"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
