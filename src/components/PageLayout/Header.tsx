import { Clock4 } from "lucide-react";

import { Socials } from "../Socials";
import { Navbar } from "../Navbar";

export function Header() {
  return (
    <header className="flex justify-center relative">
      <div className="bg-accent-foreground absolute z-50 grid mt-20 rounded-md overflow-hidden">
        <section className="grid grid-cols-3 justify-items-center w-full text-white p-6">
          <div className="justify-self-start">
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <Clock4 size={14} />
              <h2 className="text-sm">MON-SAT: 8.00AM - 10.00PM</h2>
              <h2 className="text-sm col-start-2">SUN: CLOSED</h2>
            </div>
          </div>
          <div>
            <h2>Logo</h2>
          </div>
          <div className="justify-self-end">
            <Socials />
          </div>
        </section>
        <section className="bg-primary flex justify-center">
          <Navbar />
        </section>
      </div>
    </header>
  );
}
