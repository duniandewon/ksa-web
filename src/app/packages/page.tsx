import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";

import { PageLayout } from "@/components/PageLayout";

import { PackagesSection } from "./components/PackagesSection";

import { Package } from "@/components/Package";

const PAKCAGES: Package[] = [
  {
    id: 2,
    slug: "umrah-package",
    image: "/hero.jpg",
    name: "Umrah Package",
    price: 1600,
    days: 9,
    facilities: [],
  },
  {
    id: 3,
    slug: "umrah-package",
    image: "/hero.jpg",
    name: "Umrah Package",
    days: 12,
    price: 1600,
    facilities: [],
  },
  {
    id: 3,
    slug: "umrah-package",
    image: "/hero.jpg",
    name: "Umrah Package",
    days: 10,
    price: 1600,
    facilities: [],
  },
];

export default function Packages() {
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.jpg">
        <div className="text-center py-32 text-white">
          <h2 className="text-6xl font-bold">
            Explore all Our Packages
          </h2>
          <Button className="mt-12" size="lg">
            Apply Now
          </Button>
        </div>
      </Hero>
      <PackagesSection packages={PAKCAGES} />
    </PageLayout>
  );
}
