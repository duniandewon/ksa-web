import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { buttonVariants } from "../ui/button";

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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>AQ Tour</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENUS.map((menu) => (
                <SidebarMenuItem key={menu.id}>
                  <SidebarMenuButton asChild>
                    <Link className="font-semibold capitalize" href={menu.path}>
                      {menu.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
