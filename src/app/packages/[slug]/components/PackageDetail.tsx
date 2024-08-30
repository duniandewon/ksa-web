import Image from "next/image";

import { SectionsHeader } from "@/components/SectionsHeader";
import { StarRating } from "@/components/StarRating";

import { List } from "@/components/ui/list";

import { Itenary } from "./ItenaryItem";
import { PackageOverview } from "./PackageOverview";
import { Service, SERVICES } from "@/app/(home)/components/ServicesSection";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PackageDetail extends PackageOverview {
  star: number;
  image: string;
  name: string;
  includes: string[];
  description: string;
  itenary: Itenary[];
}

interface Props {
  data: PackageDetail;
}

export function PackageDetail({ data }: Props) {
  const {
    description,
    duration,
    flightClass,
    hotelIncluded,
    image,
    includes,
    itenary,
    name,
    price,
    star,
  } = data;

  const renderLeftSide = () => {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <StarRating star={star} size={16} />
          <h1 className="text-3xl font-semibold">{name}</h1>
        </div>

        <PackageOverview
          data={{
            duration,
            flightClass,
            hotelIncluded,
            price,
          }}
        />

        <div className="space-y-4">
          <SectionsHeader
            data={{ subtitle: "overview", title: `${name} Overview` }}
          />

          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-4">
          <SectionsHeader
            data={{ subtitle: "Services", title: "Services Include" }}
          />
          <div className="grid grid-cols-2 gap-8 mt-10">
            {SERVICES.map((service) => (
              <Service service={service} key={service.serviceName} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionsHeader data={{ subtitle: "", title: "Price Indcludes" }} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing elit duis tristique sollicitudin nibh sit. Viverra
            suspendisse potenti nullam ac tortor. Feugiat pretium nibh ipsum
            consequat nisl vel pretium.
          </p>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] auto-rows-[minmax(40px,_auto)]">
            {includes.map((include) => (
              <div className="flex items-center gap-4" key={include}>
                <div className="bg-black rounded-full p-0.5">
                  <Check size={14} color="white" />
                </div>
                <p>{include}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionsHeader data={{ subtitle: "", title: "Price Excludes" }} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing elit duis tristique sollicitudin nibh sit. Viverra
            suspendisse potenti nullam ac tortor. Feugiat pretium nibh ipsum
            consequat nisl vel pretium.
          </p>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] auto-rows-[minmax(40px,_auto)]">
            {data.includes.map((include) => (
              <div className="flex items-center gap-4" key={include}>
                <div className="bg-black rounded-full p-0.5">
                  <Check size={14} color="white" />
                </div>
                <p>{include}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SectionsHeader data={{ subtitle: "", title: "Itenary" }} />
          <List
            data={itenary}
            keyExtractor={(data) => data.day}
            render={(data) => <Itenary data={data} />}
          />
        </div>
      </div>
    );
  };

  const renderRightSide = () => {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl overflow-hidden w-full">
          <Image width={400} height={500} src={image} alt={name} />
        </div>
        <div className="space-y-4">
          <div className="text-xl">
            <SectionsHeader data={{ subtitle: "", title: "Package Pricing" }} />
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <div className="bg-black rounded-full p-0.5">
                <Check size={14} color="white" />
              </div>
              <div className="flex flex-1">
                <p className="flex-1">Single Person</p>
                <p>USD 1600</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-black rounded-full p-0.5">
                <Check size={14} color="white" />
              </div>
              <div className="flex flex-1">
                <p className="flex-1">Double Person</p>
                <p>USD 1600</p>
              </div>
            </li>
          </ul>
          <div>
            <Button className="w-full">Apply NOW</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[8fr_4fr] gap-16">
      {renderLeftSide()}

      {renderRightSide()}
    </div>
  );
}
