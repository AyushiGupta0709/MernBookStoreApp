import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "../../styles/AdminDashboard.css";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-3">
            <UserMenu />
          </div>
          <div className="col-9 content">       
              <h4>Name:{auth?.user?.name}</h4>
              <h4>Email:{auth?.user?.email}</h4>
              <h4>Role:{auth?.user?.role}</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
