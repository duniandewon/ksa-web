import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";

import { List } from "../ui/list";

const MENUS = [
  {
    id: "facebook",
    label: "facebook",
    icon: Facebook,
    path: "https://www.facebook.com",
  },
  {
    id: "instagram",
    label: "instagram",
    icon: Instagram,
    path: "https://www.instagram.com",
  },
  {
    id: "twitter",
    label: "twitter",
    icon: Twitter,
    path: "https://www.twitter.com",
  },
];

export function Socials() {
  return (
    <List
      variant="horizontal"
      data={MENUS}
      keyExtractor={(data) => data.id}
      render={(data) => (
        <Link href={data.path} target="_blank" referrerPolicy="no-referrer">
          <data.icon size={16} />
        </Link>
      )}
    />
  );
}
