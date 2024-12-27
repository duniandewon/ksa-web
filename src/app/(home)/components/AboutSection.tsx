import { SectionsHeader } from "@/components/SectionsHeader";
import { Button } from "@/components/ui/button";
import { List } from "@/components/ui/list";
import { Check } from "lucide-react";

function LeftSide() {
  return (
    <div className="space-y-4 self-center pr-16">
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

function RightSide() {
  return (
    <div className="relative h-[50rem]">
      <div className="w-full h-full"></div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section>
      <div className="bg-[url('https://demo.afkaristudio.com/qahira/wp-content/uploads/sites/3/2023/12/prophet-mohammed-mosque-al-masjid-an-nabawi-um-2023-11-27-05-14-01-utc.jpg')] bg-cover bg-[center_left] bg-no-repeat">
        <div className="container grid grid-cols-2 gap-16">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
}
