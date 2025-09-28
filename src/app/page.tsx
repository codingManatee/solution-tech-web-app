import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatSection from "@/components/stat-section"
import ContactSection from "@/components/contact-section"
import AboutUs from "@/components/about-us"
import HowItWorkSection from "@/components/how-it-work-section"
import KeyBenefitsSection from "@/components/key-benefits-section"
import KeyDifferentSection from "@/components/key-different-section"
import CtaText from "@/components/cta-text"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <Header />
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full min-h-[700px] py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-cyan-50 to-white"
        >
          <HeroSection />
        </section>

        {/* What we do */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <AboutUs />
          </div>
        </section>

        {/* How it works */}
        <section id="insight" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <HowItWorkSection />
          </div>
        </section>

        {/* Key Benefits */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <KeyBenefitsSection />
          </div>
        </section>

        {/* Key Differences */}
        <section id="different" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <KeyDifferentSection />
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <StatSection />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-main-indigo text-white">
          <div className="container mx-auto px-4">
            <CtaText />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <ContactSection />
          </div>
        </section>
      </main>

      {/* Footer (optional) */}
      {/* <footer className="w-full border-t bg-cyan-50 py-6">
        <Footer />
      </footer> */}
    </div>
  )
}
