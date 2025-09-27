import FeatureSection from "@/components/feature-section"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatSection from "@/components/stat-section"
import ProcessSection from "@/components/process-section"
import ImpactSection from "@/components/impact-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <Header />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b bg-main-white">
          <HeroSection />
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <StatSection />
        </section>
          
        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <FeatureSection />
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <ProcessSection />
        </section>

        {/* Impact Section */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <ImpactSection />
        </section>

        {/* CTA Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
   <CtaText/>
  </section> */}

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <ContactSection />
        </section>

      </main>

      <footer className="w-full border-t bg-green-50 py-6">
        <Footer />
      </footer>

    </div>
  )
}
