import { PageLayout } from "@/components/PageLayout";

import { OffersSection } from "./components/OffersSection";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ApplySection } from "./components/ApplySection";
import HowItWorksSection from "./components/HowItWorksSection";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <ApplySection />
      <HowItWorksSection />
    </PageLayout>
  );
}
