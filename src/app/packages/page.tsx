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
      <Hero backgroundImage="https://res.cloudinary.com/ndewon/image/upload/v1735484007/KSA/pexels-sohail-siddiqui-380091509-20472958_wcfxkm.jpg">
        <div className="text-center py-32 text-white">
          <h2 className="text-6xl font-bold">
            Explore all Our Packages
          </h2>
        </div>
      </Hero>
      <PackagesSection packages={PAKCAGES} />
    </PageLayout>
  );
}
