import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";

export default function Contact() {
  return (
    <PageLayout>
      <Hero>
        <div className="text-center">
          <h2 className="text-6xl font-bold">
            <span className="block">The Solution for</span>
            <span className="block">Your Tour and Travels</span>
          </h2>
          <Button className="mt-12" size="lg">
            Apply Now
          </Button>
        </div>
      </Hero>
      <section className="container">Contact Us Page</section>
    </PageLayout>
  );
}
