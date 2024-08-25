import { SectionsHeader } from "@/components/SectionsHeader";
import { Button } from "@/components/ui/button";
import { List } from "@/components/ui/list";
import { Check } from "lucide-react";

function LeftSide() {
  return (
    <div className="relative h-[30rem]">
      <div className="w-full h-full">
        <div className="bg-sky-600 w-2/3 h-full"></div>
      </div>
      <div className="w-full h-full absolute top-9">
        <div className="bg-sky-800 w-2/3 h-full ml-auto"></div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="w-4/5 space-y-4 self-center">
      <SectionsHeader
        data={{
          subtitle: "ABOUT",
          title: "The Smart Way to Go Umrah and Hajj",
        }}
      />
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <List
        data={[
          "Enhanced Features for High-Quality 360 Content",
          "Always Stay Connected with 360 Social Live Broadcast",
          "Expanded Compatibility for More 360 Experiences",
        ]}
        keyExtractor={(data) => data}
        render={(data) => (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check strokeWidth={3} size={20} className="text-sky-800" />
            <p>{data}</p>
          </div>
        )}
      />
      <div className="flex gap-4">
        <Button variant="secondary">APPLY NOW</Button>
        <Button variant="ghost" className="text-xs">
          READ MORE
        </Button>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container grid grid-cols-2 gap-16">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
}
