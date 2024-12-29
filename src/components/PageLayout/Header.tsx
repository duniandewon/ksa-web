"use client";

import Link from "next/link";
import Image from "next/image";

import { Phone } from "lucide-react";
import { Menu } from "lucide-react";

import { Socials } from "../Socials";
import { Navbar } from "../Navbar";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

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
  const { toggleSidebar } = useSidebar();
  return (
    <header className="bg-primary">
      <div className="container py-6 grid lg:grid-cols-3 justify-items-center items-center  text-primary-foreground text-sm">
        <ul className="hidden md:flex items-center">
          {SECONDARY_MENU.map((menu) => (
            <li
              className="border-l pr-3 pl-3 first:pl-0 last:pr-0 first:border-none"
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
        <div className="hidden md:block">
          <p> nomor izin usaha</p>
        </div>
        <div className="lg:justify-self-end">
          <Socials />
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-2 flex justify-between items-center">
          <Link href="/">
            <Image width={250} height={112} src="/logo.png" alt="logo" />
          </Link>
          <div className="lg:flex-1 hidden lg:flex justify-center">
            <Navbar />
          </div>
          <div className="hidden lg:grid grid-cols-[auto_1fr] gap-x-2">
            <div className="bg-muted/40 w-[3rem] h-[3rem] rounded-full flex items-center justify-center row-span-2">
              <Phone size={25} fill="currentColor" />
            </div>
            <p className="font-semibold">Customer Care</p>
            <p className="font-bold">+887 (7888) 9898</p>
          </div>
          <div className="lg:hidden">
            <Button onClick={() => toggleSidebar()}>
              <Menu size={26} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
