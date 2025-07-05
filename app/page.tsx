import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
