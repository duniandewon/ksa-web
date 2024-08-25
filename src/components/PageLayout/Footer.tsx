import { Globe, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { List } from "../ui/list";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black">
      <section className="bg-accent-foreground py-16">
        <div className="container text-center space-y-2">
          <h2 className="text-white">Logo</h2>
          <form className="w-[35rem] mx-auto">
            <h2 className="text-white mt-8 mb-2">
              Keep updated with our fresh blog posts
            </h2>
            <div className="flex gap-4 items-center">
              <Input placeholder="Enter your email" />
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="rounded-full"
              >
                <SendHorizontal />
              </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="py-16">
        <div className="grid grid-cols-3 gap-16 text-muted-foreground text-sm container">
          <div className="space-y-4">
            <h2 className="text-white text-lg">Logo</h2>
            <p>
              Vivamus viverra, ligula non tincidunt pulvinar, augue est sagittis
              leo, id feugiat enim lorem Quisque ac
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-white font-medium text-base">Contact us</h2>
            <List
              variant="vertical"
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
                  <div className="w-5 h-5 rounded-full border border-primary text-primary flex justify-center items-center">
                    <data.icon size={10} />
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
    </footer>
  );
}
