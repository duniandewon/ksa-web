import { PageLayout } from "@/components/PageLayout";

import { OffersSection } from "./components/OffersSection";
import { ServicesSection } from "./components/ServicesSection";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ApplySection } from "./components/ApplySection";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <OffersSection />
      <ServicesSection />
      <AboutSection />
      <ApplySection />
    </PageLayout>
  );
}
