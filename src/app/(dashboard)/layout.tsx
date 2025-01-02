import TopNav from "@/components/layout/dashboard/navigation/TopNav";
import Sidebar from "@/components/layout/dashboard/sidebar/Sidebar";
import { SidebarContextProvider } from "@/context/SidebarContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col font-geistSans md:flex-row">
      <SidebarContextProvider>
        {/* Desktop */}
        <div className="hidden md:block">
          <Sidebar></Sidebar>
        </div>

        {/* Mobile */}
        <div className="block md:hidden">asdasdas</div>

        <div className="flex w-full flex-col">
          <TopNav></TopNav>
          <div className="p-4">{children}</div>
        </div>
      </SidebarContextProvider>
    </section>
  );
}
