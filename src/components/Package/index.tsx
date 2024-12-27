"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { Button, buttonVariants } from "../ui/button";

export interface Package {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  facilities: string[];
  days: number;
}

interface Props {
  data: Package;
}

export function Package({ data }: Props) {
  return (
    <div className="flex flex-col">
      <div>
        <Image
          src={data.image}
          alt="package"
          width={1920}
          height={1018}
          className="rounded-2xl"
        />
      </div>
      <div className="w-11/12 bg-muted rounded-2xl -mt-44 p-10 relative">
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <div className="bg-primary max-w-max text-white p-4 absolute -top-6 right-10 border-4 border-[#f0efe4]">
          <h2 className="text-right font-bold text-sm">Days</h2>
          <p className="text-3xl mx-2">
            {new Intl.NumberFormat("en-US", {
              minimumIntegerDigits: 2,
            }).format(data.days)}
          </p>
        </div>
        <div className="border mt-8 mb-4" />
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <ul className="space-y-4 font-semibold">
            <li>Include Passport & Visa</li>
            <li>Mecca - Al Safwah Royale Hotel</li>
            <li>Medina - Rawdat Al Safwa Hotel</li>
            <li>Free 30kg Suitcase</li>
            <li>Premium Economy Seat</li>
            <li>3 Time Meals</li>
          </ul>
          <div className="bg-white text-center rounded-2xl">
            <div className="py-5">
              <p className="font-semibold">Start from</p>
              <h2 className="font-bold text-2xl">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  currencyDisplay: "code",
                }).format(data.price)}
              </h2>
            </div>
            <Link
              href={`/packages/${data.slug}`}
              className={buttonVariants({
                variant: "default",
                className: "w-full rounded-none",
              })}
            >
              Detail Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
