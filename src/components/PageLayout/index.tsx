import { Fragment, ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../AppSidebar";

interface Props {
  children: ReactNode;
}

export function PageLayout({ children }: Props) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="bg-something flex-1">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
