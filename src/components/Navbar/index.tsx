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
  {
    id: "news",
    label: "news",
    path: "/news",
  },
  {
    id: "about-us",
    label: "about us",
    path: "/about-us",
  },
  {
    id: "contact-us",
    label: "contact us",
    path: "/contact-us",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <List
        variant="horizontal"
        data={MENUS}
        render={({ label, path }) => (
          <Link
            href={path}
            data-active={pathname === path ? "true" : null}
            className="inline-block px-3 py-2 rounded-lg uppercase text-primary hover:bg-muted hover:text-primary-foreground data-[active]:bg-muted data-[active]:text-primary-foreground"
          >
            {label}
          </Link>
        )}
        keyExtractor={(data) => data.id}
      />
    </nav>
  );
}
