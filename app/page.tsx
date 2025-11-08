import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProducts />
      <Categories />
      <CallToAction />
      <Footer />
    </main>
  )
}
