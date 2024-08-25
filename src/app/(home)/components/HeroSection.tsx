import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";

export function HeroSection() {
  return (
    <Hero backgroundImage="/hero.jpg">
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
  );
}
