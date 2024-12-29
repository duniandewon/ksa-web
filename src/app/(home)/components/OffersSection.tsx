import { Package } from "@/components/Package";
import { SectionsHeader } from "@/components/SectionsHeader";

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

export function OffersSection() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <SectionsHeader
          data={{
            title: "Haj and Umrah Special Offers",
            subtitle: "SPECIAL OFFERS",
          }}
          variant="centered"
        />
        <div className="flex flex-wrap gap-8">
          {PAKCAGES.map((data) => (
            <div key={data.id} className="w-full lg:max-w-[24.375rem]">
              <Package data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
