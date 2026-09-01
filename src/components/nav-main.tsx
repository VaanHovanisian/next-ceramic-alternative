"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TabsList, TabsTrigger } from "./ui/tabs";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <TabsList dir="ltr" className="w-full items-start">
            {items.map((item) => (
              <SidebarMenuItem className="w-full" key={item.title}>
                <TabsTrigger className="w-full" value={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </TabsTrigger>
              </SidebarMenuItem>
            ))}
          </TabsList>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
