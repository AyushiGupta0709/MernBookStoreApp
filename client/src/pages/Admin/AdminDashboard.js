import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../../styles/AdminDashboard.css";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-3">
            <AdminMenu />
          </div>
          <div className="col-9 content">
          <h4 className="">Name:{auth?.user?.name}</h4>
          <h4 className="">Email:{auth?.user?.email}</h4>
          <h4 className="">Role:{auth?.user?.role}</h4>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
