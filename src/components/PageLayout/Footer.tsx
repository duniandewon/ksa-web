import { Globe, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { List } from "../ui/list";
import Link from "next/link";
import Image from "next/image";

function SubscribeForm() {
  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-60 items-center justify-between p-8 lg:py-10 lg:px-12 bg-muted rounded-3xl">
        <h2 className="text-xl lg:text-2xl">
          Don&#39;t Miss Our Latest News About Umrah and Hajj
        </h2>
        <form className="flex gap-6">
          <Input placeholder="Email" />
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <section className="pt-32 pb-16 bg-primary text-primary-foreground -mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 text-sm container">
        <div className="space-y-4 lg:col-span-1 md:col-span-2">
          <Image width={250} height={112} src="/logo.png" alt="logo" />
          <p>
            Vivamus viverra, ligula non tincidunt pulvinar, augue est sagittis
            leo, id feugiat enim lorem Quisque ac
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-white font-medium text-base">Contact us</h2>
          <List
            variant="vertical"
            className="text-white"
            data={[
              {
                id: "address",
                icon: MapPin,
                label: "PO Box 123456 Grand Galaxy",
              },
              {
                id: "phone",
                icon: Phone,
                label: "+6285718520582",
              },
              {
                id: "email",
                icon: Mail,
                label: "ksa@gmil.com",
              },
              {
                id: "website",
                icon: Globe,
                label: "www.ksatours.com",
              },
            ]}
            keyExtractor={(data) => data.id}
            render={(data) => (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white text-primary flex justify-center items-center">
                  <data.icon size={10} className="text-white" />
                </div>
                <p>{data.label}</p>
              </div>
            )}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-white font-medium text-base">Useful Links</h2>
          <List
            variant="vertical"
            className="text-white"
            data={[
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
            ]}
            keyExtractor={(data) => data.id}
            render={({ label, path }) => (
              <Link href={path} className="hover:text-primary capitalize">
                {label}
              </Link>
            )}
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="lg:flex flex-col">
      <SubscribeForm />
      <FooterContent />
    </footer>
  );
}
