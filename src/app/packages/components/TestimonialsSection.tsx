import { SectionsHeader } from "@/components/SectionsHeader";
import { Testimonial } from "@/components/Testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container space-y-16">
        <SectionsHeader
          variant="centered"
          data={{ subtitle: "testimonials", title: "What did they say?" }}
        />
        <div className=" flex justify-between gap-4">
          <Testimonial
            data={{
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              user: {
                name: "Ali Hasan",
                title: "CEO",
                picture: "/hero.jpg",
              },
            }}
          />
          <Testimonial
            data={{
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              user: {
                name: "Ali Hasan",
                title: "CEO",
                picture: "/hero.jpg",
              },
            }}
          />
          <Testimonial
            data={{
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              user: {
                name: "Ali Hasan",
                title: "CEO",
                picture: "/hero.jpg",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
