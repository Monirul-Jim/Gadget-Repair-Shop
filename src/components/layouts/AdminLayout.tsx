import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <AdminSidebar />
      <div className="col-span-10 h-[200vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
