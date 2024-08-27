import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";

import { PageLayout } from "@/components/PageLayout";

import { ApplySection } from "../(home)/components/ApplySection";
import { PackagesSection } from "./components/PackagesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

const PAKCAGES = [
  {
    id: 2,
    slug: "umrah-package",
    image: "/hero.jpg",
    name: "Umrah Package",
    numbersBooked: 150,
    priceDiscount: "16.000 USD",
    priceOriginal: "15.000 USD",
    quota: 150,
    hotels: [
      {
        city: "Mecca",
        description: "200 M To Masjidil Haram",
        id: 89,
        roomType: "QUARD ROOM",
        star: 4,
      },
      {
        city: "Madina",
        description: "200 M To Nabawi Mosque",
        id: 89,
        roomType: "QUAD ROOM",
        star: 4,
      },
    ],
  },
  {
    id: 3,
    slug: "umrah-package",
    image: "/hero.jpg",
    name: "Umrah Package",
    numbersBooked: 150,
    priceDiscount: "16.000 USD",
    priceOriginal: "15.000 USD",
    quota: 150,
    hotels: [
      {
        city: "Mecca",
        description: "200 M To Masjidil Haram",
        id: 89,
        roomType: "QUARD ROOM",
        star: 4,
      },
      {
        city: "Madina",
        description: "200 M To Nabawi Mosque",
        id: 89,
        roomType: "QUAD ROOM",
        star: 4,
      },
    ],
  },
  {
    id: 3,
    slug: "umrah-package",
    image: "/hero.jpg",
    name: "Umrah Package",
    numbersBooked: 150,
    priceDiscount: "16.000 USD",
    priceOriginal: "15.000 USD",
    quota: 150,
    hotels: [
      {
        city: "Mecca",
        description: "200 M To Masjidil Haram",
        id: 89,
        roomType: "QUARD ROOM",
        star: 4,
      },
      {
        city: "Madina",
        description: "200 M To Nabawi Mosque",
        id: 89,
        roomType: "QUAD ROOM",
        star: 4,
      },
    ],
  },
];

export default function Packages() {
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.jpg">
        <div className="text-center">
          <h2 className="text-6xl font-bold">
            <span className="block">The Solution for</span>
            <span className="block">Your Tour and Travels</span>
          </h2>
          <Button className="mt-12" size="lg">
            Apply Now
          </Button>
        </div>
      </Hero>
      <PackagesSection packages={PAKCAGES} />
      <ApplySection />
      <TestimonialsSection />
    </PageLayout>
  );
}
