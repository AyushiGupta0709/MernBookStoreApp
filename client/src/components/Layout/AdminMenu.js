import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu admin-menu">
          <NavLink to="/dashboard/admin"  className="admin-links"><h5>Dashboard</h5></NavLink>
          <NavLink
            to="/dashboard/admin/create-category"
            className="admin-links"
          >
            Create Category
          </NavLink>
          <NavLink to="/dashboard/admin/create-product" className="admin-links">
            Create Product
          </NavLink>
          <NavLink to="/dashboard/admin/products" className="admin-links">
            Products
          </NavLink>
          <NavLink to="/dashboard/admin/orders" className="admin-links">
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
