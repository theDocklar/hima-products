import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-80 md:h-96">
            <Image
              src="/manufacturing-facility-factory.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a leading distributor and manufacturer of durable and efficient animal feeder equipment, committed
              to enhancing livestock productivity through innovative solutions and quality engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With decades of experience in the industry, we combine cutting-edge technology with proven reliability to
              deliver solutions that farmers and livestock operators can trust. Our manufacturing capacity and attention
              to detail ensure that every product meets the highest standards.
            </p>
            <div className="pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
