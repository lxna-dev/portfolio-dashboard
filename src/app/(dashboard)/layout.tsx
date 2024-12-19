import TopNav from "@/components/layout/dashboard/navigation/TopNav";
import Sidebar from "@/components/layout/dashboard/sidebar/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row font-geistSans">
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
