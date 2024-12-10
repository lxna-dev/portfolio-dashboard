"use client";

import { useSidebar } from "@/context/SidebarContext";
import { ChevronFirst, ChevronLast, HomeIcon, LogOut } from "lucide-react";
import { createContext } from "react";

const SidebarLinks = [
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: <HomeIcon />,
  },
];

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      <div
        className={`flex h-screen flex-col justify-between border-r border-gray-500 shadow-md transition-all duration-100 ease-out ${isOpen ? "min-w-64" : "min-w-16"}`}
      >
        <div className="flex flex-col gap-2">
          <div className="justify-betwee flex cursor-pointer flex-row items-center p-3">
            {isOpen ? (
              <div className="flex w-full flex-row items-center justify-between p-3">
                Logo Here{" "}
                <ChevronFirst
                  className="rounded-sm hover:bg-gray-200 hover:text-gray-800"
                  onClick={() => setIsOpen(!isOpen)}
                />{" "}
              </div>
            ) : (
              <div className="p-3">
                <ChevronLast
                  className="rounded-sm hover:bg-gray-200 hover:text-gray-800"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            )}
          </div>
          <div className="pl-3">
            {SidebarLinks.map((link) => (
              <div
                className="flex flex-row items-center gap-2 rounded-bl-md rounded-tl-md p-3 hover:bg-gray-200 hover:text-gray-800"
                key={link.name}
              >
                {link.icon}
                <span className={` ${isOpen ? "" : "hidden"}`}>
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
