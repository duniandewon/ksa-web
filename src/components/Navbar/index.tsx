"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { List } from "../ui/list";

const MENUS = [
  {
    id: "home",
    label: "home",
    path: "/",
  },
  {
    id: "packages",
    label: "packages",
    path: "/packages",
  },
  // {
  //   id: "news",
  //   label: "news",
  //   path: "/news",
  // },
  // {
  //   id: "about-us",
  //   label: "about us",
  //   path: "/about-us",
  // },
  {
    id: "contact-us",
    label: "contact us",
    path: "/contact-us",
  },
];

export function Navbar() {
  const pathname = usePathname();

  const activePage =
    pathname === "/"
      ? "home"
      : MENUS.find((menu) => menu.path.includes(pathname.split("/")[1]))?.id;

  return (
    <nav>
      <List
        variant="horizontal"
        data={MENUS}
        render={({ label, path, id }) => (
          <Link
            href={path}
            data-active={id === activePage ? "true" : null}
            className="inline-block px-3 py-2 rounded-lg uppercase text-primary hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
          >
            {label}
          </Link>
        )}
        keyExtractor={(data) => data.id}
      />
    </nav>
  );
}
