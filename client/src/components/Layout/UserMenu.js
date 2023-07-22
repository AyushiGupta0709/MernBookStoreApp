import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/UserMenu.css";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu user-menu">
        <div className="list-group">
          <NavLink to="/dashboard/user" className="user-links"><h4>Dashboard</h4></NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="user-links"
          >
            Profile
          </NavLink>
          {/* <NavLink
            to="/dashboard/user/orders"
            className="user-links"
          >
            Orders
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
