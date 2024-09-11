import Link from "next/link";
import Image from "next/image";

import { Phone } from "lucide-react";

import { Socials } from "../Socials";
import { Navbar } from "../Navbar";

const SECONDARY_MENU = [
  {
    path: "/umrah-packages",
    label: "umrah package",
  },
  {
    path: "/haj-program",
    label: "haj program",
  },
  {
    path: "/customer-service",
    label: "customer service",
  },
];

export function Header() {
  return (
    <header className="bg-current">
      <div className="container py-6 flex items-center text-primary-foreground text-sm">
        <ul className="flex items-center gap-4">
          {SECONDARY_MENU.map((menu) => (
            <li
              className="border-l pl-4 first:pl-0 first:border-none"
              key={menu.path}
            >
              <Link
                href={menu.path}
                className="capitalize font-semibold text-primary-foreground hover:text-primary-foreground/60"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 text-center">
          <p> nomor izin usaha</p>
        </div>
        <Socials />
      </div>
      <div className="bg-white">
        <div className="container py-2 flex items-center">
          <Image width={269} height={112} src="/logo.png" alt="logo" />
          <div className="flex-1 flex justify-center">
            <Navbar />
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-2">
            <div className="bg-muted/40 w-[3rem] h-[3rem] rounded-full flex items-center justify-center row-span-2">
              <Phone size={25} fill="currentColor" />
            </div>
            <p className="font-semibold">Customer Care</p>
            <p className="font-bold">+887 (7888) 9898</p>
          </div>
        </div>
      </div>
    </header>
  );
}
