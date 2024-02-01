import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="bg-light-gray p-4  lg:p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              `p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2`,
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              `p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2`,
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Services</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              `p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2`,
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Services List</span>
        </NavLink>
        {/* <NavLink to="/admin/add-service">Add Services</NavLink>
        <NavLink to="/admin/service-list">Services List</NavLink> */}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
