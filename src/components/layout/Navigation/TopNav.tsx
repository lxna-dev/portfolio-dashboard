"use client";

import ThemeToggle from "@/components/buttons/ThemeToggle";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const TopNav = () => {
  return (
    <>
      <div className="flex justify-between border-b border-gray-500 p-4">
        <div>
          <Input
            className="border-gray-500 text-gray-200"
            placeholder="Search"
          ></Input>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white">
            <img
              width={40}
              height={40}
              alt="profile"
              src="https://png.pngtree.com/png-vector/20220612/ourmid/pngtree-a-silhouette-of-an-anonymous-human-head-in-profile-png-image_4998905.png"
            />
          </div>

          <p>User</p>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default TopNav;
