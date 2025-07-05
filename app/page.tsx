import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
