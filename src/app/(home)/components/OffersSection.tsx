import { Package } from "@/components/Package";
import { SectionsHeader } from "@/components/SectionsHeader";

const PAKCAGES = [
  {
    id: 2,
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

export function OffersSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionsHeader
          data={{
            title: "  Haj and Umrah Special Offers",
            subtitle: "SPECIAL OFFERS",
          }}
          variant="centered"
        />
        <div className="grid grid-cols-3 gap-16 mt-8">
          {PAKCAGES.map((data) => (
            <Package data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
