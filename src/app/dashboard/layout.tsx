import TopNav from "@/components/layout/navigation/TopNav";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-geistSans flex flex-row">
      <SidebarProvider>
        <Sidebar></Sidebar>
        <div className="flex w-full flex-col">
          <TopNav></TopNav>
          <div className="p-4">{children}</div>
        </div>
      </SidebarProvider>
    </section>
  );
}
