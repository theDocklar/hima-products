import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Looking for Reliable Animal Feeder Solutions?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 text-balance">
          Let's build a sustainable feeding system together. Our expert team is ready to help you find the perfect
          equipment for your operation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-semibold">
            View Catalogue
          </Button>
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold bg-transparent"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
