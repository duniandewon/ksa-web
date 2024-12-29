import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/ui/hero";

import { PackageDetail } from "./components/PackageDetail";

const samplePackage: PackageDetail = {
  duration: 7,
  flightClass: "Economy",
  hotelIncluded: true,
  price: 1500,
  star: 5,
  image: "/hero.jpg",
  name: "Paris Getaway",
  includes: [
    "Round-trip airfare",
    "5 nights at a 4-star hotel",
    "Breakfast included",
    "Passport and Visa",
    "Economy Airplane",
    "Spiritual guidance",
    "3x Times Meal / Day",
    "Accomodation",
    "Ihram Attire",
    "Travel insurance",
    "Tour Guides",
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  itenary: [
    {
      day: 1,
      date: new Date("2024-09-01"),
      title: "Arrival in Paris",
      route: ["Charles de Gaulle Airport", "Hotel Le Meurice"],
      activities: [
        { hour: "10:00 AM", activity: "Arrive at Charles de Gaulle Airport" },
        { hour: "12:00 PM", activity: "Check-in at Hotel Le Meurice" },
        { hour: "07:00 PM", activity: "Welcome dinner at Le Jules Verne" },
      ],
    },
    {
      day: 2,
      date: new Date("2024-09-02"),
      title: "Explore the Louvre",
      route: ["Hotel Le Meurice", "The Louvre Museum"],
      activities: [
        { hour: "09:00 AM", activity: "Guided tour of the Louvre" },
        { hour: "02:00 PM", activity: "Free time to explore Paris" },
      ],
    },
  ],
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PageLayout>
      <Hero backgroundImage="https://res.cloudinary.com/ndewon/image/upload/v1735484007/KSA/pexels-sohail-siddiqui-380091509-20472958_wcfxkm.jpg">
        <div className="text-center py-32 text-white">
          <h2 className="text-6xl font-bold">
            <span className="block">The Solution for</span>
            <span className="block">Your Tour and Travels</span>
          </h2>
        </div>
      </Hero>
      <section className="py-16 container">
        <PackageDetail data={samplePackage} />
      </section>
    </PageLayout>
  );
}
