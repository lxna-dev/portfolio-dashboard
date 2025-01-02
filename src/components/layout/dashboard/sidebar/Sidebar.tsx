"use client";

import { useSidebar } from "@/context/SidebarContext";
import {
  AlignJustify,
  Calendar,
  ChevronFirst,
  ChevronLast,
  HomeIcon,
  ListCheck,
  LogOut,
  ReceiptIcon,
  User2Icon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SidebarLinks = [
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Client List",
    href: "/client-list",
    icon: <User2Icon />,
  },
  {
    name: "Reservations",
    href: "/reservations",
    icon: <Calendar />,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: <ReceiptIcon />,
  },
  {
    name: "Smart List",
    href: "/smart-list",
    icon: <ListCheck />,
  },
];

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  const basePath = "/dashboard";

  return (
    <>
      <div
        className={`flex h-screen flex-col justify-between border-r border-gray-500 shadow-md transition-all duration-200 ease-out ${isOpen ? "w-[20rem]" : "w-[5rem]"}`}
      >
        <div className="flex flex-col gap-2">
          <div className="justify-betwee flex h-20 cursor-pointer flex-row items-center p-3">
            {isOpen ? (
              <div className="flex w-full flex-row items-center justify-between p-3">
                <div className="text-2xl font-bold">DASHBOARD</div>
                <div
                  className={`rounded-sm p-2 hover:bg-gray-200 hover:text-gray-800`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ChevronFirst className="" />
                </div>
              </div>
            ) : (
              <div
                className="rounded-sm p-3 hover:bg-gray-200 hover:text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AlignJustify className="" />
              </div>
            )}
          </div>
          <div className="pl-2">
            {SidebarLinks.map((link) => (
              <div
                className={`my-2 flex cursor-default flex-row items-center gap-4 rounded-bl-sm rounded-tl-sm bg-background p-4 hover:bg-gray-100 hover:text-gray-800 ${pathname === `${basePath}${link.href}` ? "bg-gray-100 text-black" : ""}`}
                key={link.name}
                onClick={() => router.push(`${basePath}${link.href}`)}
              >
                <div>{link.icon}</div>
                <span className={`${isOpen ? "whitespace-nowrap" : "hidden"} `}>
                  {link.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-6 pl-6">
          {isOpen ? (
            <div className="flex flex-row items-center gap-2">
              <LogOut />
              Logout
            </div>
          ) : (
            <>
              <LogOut />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
