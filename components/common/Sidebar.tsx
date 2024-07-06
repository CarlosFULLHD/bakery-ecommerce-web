import React from "react";

import Link from "next/link";
import { Logo } from "../icons";
import { SidebarRoutes } from "./SidebarRoutes";
import ModalComponentContanctame from "../ModalComponentContanctame";

const Sidebar = () => {
  return (
    <div className="h-full border-r border-custom-blue flex flex-col overflow-y-auto shadow-sm bg-custom-background">
      <div className="p-6">
        <Link href="/">{/* <Logo className="rounded-xl" /> */}</Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
        <ModalComponentContanctame />
      </div>
    </div>
  );
};

export default Sidebar;
