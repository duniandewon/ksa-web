import { Package } from "@/components/Package";
import { SectionsHeader } from "@/components/SectionsHeader";

interface Props {
  packages: Package[];
}

export function PackagesSection({ packages }: Props) {
  return (
    <section className="py-16 space-y-14">
      <SectionsHeader
        data={{ subtitle: "service", title: "Our Tour Pakcages" }}
        variant="centered"
      />
      <div className="container grid grid-cols-[repeat(auto-fill,_minmax(337px,_1fr))] auto-rows-[minmax(150px,_auto)] gap-8">
        {packages.map((data) => (
          <Package data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}
