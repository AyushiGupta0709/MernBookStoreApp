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
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
          <div class=" content">
  <div class="data-section">
    <div class="data-item">
      <h3>Total Users</h3>
      <p>500</p>
    </div>
    <div class="data-item">
      <h3>Total Products</h3>
      <p>1000</p>
    </div>
    <div class="data-item">
      <h3>Total Orders</h3>
      <p>250</p>
    </div>
  </div>
  <canvas id="chart"></canvas>
</div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
