import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { UploadSection } from "@/components/upload-section";
import { ResultDisplay } from "@/components/result-display";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <UploadSection />
        <ResultDisplay mode="bullets" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
