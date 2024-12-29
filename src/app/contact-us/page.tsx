import ApplicationForm from "@/components/ApplicationForm";
import { PageLayout } from "@/components/PageLayout";
import { SectionsHeader } from "@/components/SectionsHeader";
import { Hero } from "@/components/ui/hero";
import { List } from "@/components/ui/list";
import { Check } from "lucide-react";

function Form() {
  return (
    <div className="basis-[39%] rounded-3xl overflow-hidden">
      <div className="bg-muted p-8 space-y-8">
        <div className="border-b pb-4">
          <h2 className="font-semibold text-2xl">Get in Touch AQ Tour</h2>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.jpg">
        <div className="text-center py-32 text-white">
          <h2 className="text-6xl font-bold">
            Get in touch with Ahsan Qolbi Tour
          </h2>
        </div>
      </Hero>
      <section className="container grid lg:grid-cols-[1fr_2fr] gap-16 py-16 items-center">
        <div className="space-y-8">
          <SectionsHeader
            data={{
              subtitle: "Contact",
              title: "For Any Queries You Might Have, Please Contact Us",
            }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <List
            className="gap-2"
            data={[
              {
                id: "address",
                text: "15 Goldfield Avenue Upper Marlboro, 20772",
              },
              {
                id: "phone",
                text: "+62811xxxx",
              },
              {
                id: "email",
                text: "hello@qahira.ext",
              },
            ]}
            keyExtractor={(data) => data.id}
            render={(data) => (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-accent text-primary flex justify-center items-center">
                  <Check size={12} />
                </div>
                <p>{data.text}</p>
              </div>
            )}
          />
        </div>
        <Form />
      </section>
    </PageLayout>
  );
}
