import Link from "next/link";

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
  return (
    <nav>
      <List
        variant="horizontal"
        data={MENUS}
        render={({ label, path }) => (
          <Link
            href={path}
            className="inline-block py-4 px-6 hover:text-muted uppercase"
          >
            {label}
          </Link>
        )}
        keyExtractor={(data) => data.id}
      />
    </nav>
  );
}
