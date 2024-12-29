import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <>
      <Hero backgroundImage="/hero.jpg">
        <div className="py-16 lg:pb-0 space-y-16 xl:space-y-32 xl:pt-32">
          <div className="text-center space-y-6 w-full lg:w-[60%] mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl">
              Make Your Spiritual Journey Beyound your Expectation
            </h2>
            <p>
              A prominent pioneer in crafting A-grade Umrah Experiences,
              Nurturing Faith, and Guiding Pilgrims in the USA. Since its
              inception, the organization has consistently expanded its reach,
              witnessing a steady increase in the number of spiritual journeys.
            </p>

            <div className="flex items-center justify-center flex-col lg:flex-row gap-4">
              <div className="flex justify-center -space-x-4">
                <Avatar className="w-12 h-12 border-[3px] border-primary-foreground">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12 border-[3px] border-primary-foreground">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12 border-[3px] border-primary-foreground">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <p className="font-semibold">
                Trusted by 5000+ All Clients and Business
              </p>
            </div>
            <div>
              <Link
                href="/packages"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Our Pakcage <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="lg:bg-two-column-gradient">
            <div className="grid lg:grid-cols-3 container">
              <div className="bg-primary text-primary-foreground border-b lg:border-b-0 lg:border-r border-muted space-y-4 py-8 pr-8 pl-8 lg:py16 lg:pr-16 lg:pl-0">
                <h2 className="text-2xl font-semibold">Easy Booking Service</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <Link href="/" className="flex items-center space-x-4">
                  <div className="bg-current rounded-full p-1">
                    <ArrowRight className="text-primary" />
                  </div>
                  <p className="font-semibold">Explore More</p>
                </Link>
              </div>

              <div className="bg-primary text-primary-foreground space-y-4 py-8 px-8 lg:py-16">
                <h2 className="text-2xl font-semibold">
                  Trusted 100% Satisfaction
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <Link href="/" className="flex items-center space-x-4">
                  <div className="bg-current rounded-full p-1">
                    <ArrowRight className="text-primary" />
                  </div>
                  <p className="font-semibold">Explore More</p>
                </Link>
              </div>

              <div className="space-y-4 py-8 pl-8 pr-m-8 bg-muted lg:bg-transparent lg:py-16 lg:pl-8 lg:pr-0">
                <h2 className="text-2xl font-semibold">
                  Pilgrims Five Stars Service
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <Link href="/" className="flex items-center space-x-4">
                  <div className="bg-current rounded-full p-1">
                    <ArrowRight className="text-primary-foreground" />
                  </div>
                  <p className="font-semibold">Explore More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
}
