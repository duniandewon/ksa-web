import { SectionsHeader } from "@/components/SectionsHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { List } from "@/components/ui/list";

function LeftSide() {
  return (
    <div className="w-4/5 self-center">
      <div className="space-y-4 self-center">
        <SectionsHeader
          data={{
            subtitle: "APPLY",
            title: "Apply your Hajj and Umrah, and Get 10% Discount",
          }}
        />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <List
          data={[
            { id: 1, label: "Enhanced Features for High-Quality 360 Content" },
            {
              id: 2,
              label: "Always Stay Connected with 360 Social Live Broadcast",
            },
            { id: 3, label: "Expanded Compatibility for More 360 Experiences" },
          ]}
          keyExtractor={(data) => data.id}
          render={(data) => (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="bg-primary w-9 h-9 rounded-full flex items-center justify-center text-white text-lg font-bold">
                <p>{data.id}</p>
              </div>
              <p>{data.label}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="p-[30px_0_30px_30px]">
      <div className="bg-primary text-center py-5">
        <p className="text-3xl">Apply Now</p>
        <h2 className="text-3xl font-semibold">Up to 10% Discount</h2>
      </div>
      <form className="bg-white space-y-8 py-16 px-10">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input type="email" placeholder="email" />
        <Input placeholder="Phone Number" />
        <div className="flex">
          <Button type="button" className="mx-auto">
            APPLY NOW
          </Button>
        </div>
      </form>
    </div>
  );
}

export function ApplySection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container grid grid-cols-2 gap-16 py-10">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
}
