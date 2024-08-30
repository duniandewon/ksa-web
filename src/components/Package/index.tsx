"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { List } from "../ui/list";
import { Hotel } from "./Hotel";

export interface Package {
  id: number;
  slug: string;
  name: string;
  image: string;
  hotels: Hotel[];
  priceOriginal: string | number;
  priceDiscount: string | number;
  quota: number;
  numbersBooked: number;
}

interface Props {
  data: Package;
}

export function Package({ data }: Props) {
  const filledQuota = useMemo(
    () => (data.numbersBooked / data.quota) * 100,
    [data.numbersBooked, data.quota]
  );

  return (
    <Link
      href={`/packages/${data.slug}`}
      className="border hover:transform hover:translate-y-[-5px] transition-transform duration-200"
    >
      <div>
        <Image
          src={data.image}
          alt="package"
          width={800}
          height={600}
          className="w-full h-[231px]"
        />
      </div>
      <div className="mt-4 p-4">
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <div>
          <List
            className="mt-4"
            data={data.hotels}
            keyExtractor={(data) => data.id}
            render={(data) => <Hotel hotel={data} />}
          />
        </div>
        <div className="flex items-center gap-2 mt-8">
          <p className="text-muted-foreground line-through">
            {data.priceOriginal}/Pax
          </p>
          <p className="text-xl">{data.priceDiscount}/Pax</p>
        </div>
      </div>
      <div className="border-t p-4 mt-4">
        <div className="w-full h-3 bg-muted-foreground rounded-full relative">
          <div
            className="bg-primary h-full rounded-full absolute overflow-hidden"
            style={{ width: `${filledQuota}%` }}
          ></div>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            Booked: {data.numbersBooked}/{data.quota}
          </p>
        </div>
      </div>
    </Link>
  );
}
