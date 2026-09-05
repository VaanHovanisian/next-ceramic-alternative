import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <Tabs defaultValue="Home" orientation="vertical" className="w-full">
        <AppSidebar data={data} variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {data.navMain.map((el) => (
                  <TabsContent key={el.title} value={el.title}>
                    {el.title}
                  </TabsContent>
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </Tabs>
    </SidebarProvider>
  );
}
