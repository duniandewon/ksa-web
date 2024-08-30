import { SectionsHeader } from "@/components/SectionsHeader";
import { Button } from "@/components/ui/button";

interface Service {
  serviceName: string;
  serviceDescription: string;
  serviceIcon: string;
}

export const SERVICES: Service[] = [
  {
    serviceName: "Free Luggage",
    serviceDescription:
      "Responsive Lorem Ipsum used since the 1500s is reproduced below.",
    serviceIcon: "",
  },
  {
    serviceName: "Customer Support",
    serviceDescription:
      "Responsive Lorem Ipsum used since the 1500s is reproduced below.",
    serviceIcon: "",
  },
  {
    serviceName: "5 Star Hotel",
    serviceDescription:
      "Responsive Lorem Ipsum used since the 1500s is reproduced below.",
    serviceIcon: "",
  },
  {
    serviceName: "Hajj Tour",
    serviceDescription:
      "Responsive Lorem Ipsum used since the 1500s is reproduced below.",
    serviceIcon: "",
  },
];

export function Service({ service }: { service: Service }) {
  return (
    <div className="flex gap-4">
      <div className="w-16 h-14 bg-primary" />
      <div>
        <h3 className="font-semibold">{service.serviceName}</h3>
        <p>{service.serviceDescription}</p>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="self-center">
      <div>
        <SectionsHeader
          data={{ subtitle: "FEATURED", title: "What Do We Offer?" }}
        />
        <p className="mt-5 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex gap-2 items-center mt-6">
        <Button>Apply now</Button>
        <Button variant="ghost" className="text-xs">
          READ MORE
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        {SERVICES.map((service) => (
          <Service service={service} key={service.serviceName} />
        ))}
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="justify-self-end">
      <div className="w-[28rem] h-[37rem] bg-sky-800 skew-x-12"></div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-secondary">
      <div className="container grid grid-cols-2 gap-16">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
}
