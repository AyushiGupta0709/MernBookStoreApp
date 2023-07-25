// Importing required modules and components
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import registerPhoto from "../../images/registerphoto.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Using the useAuth hook to get the authentication state and the setAuth function
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate(); 
  const location = useLocation();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending a POST request to the server to log in the user
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        // If login is successful, display a success message using react-hot-toast library
        toast.success(res.data && res.data.message);
        
        // Update the authentication state with the logged-in user details and token
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        
        // Store the authentication details in the local storage for persistent login
        localStorage.setItem("auth", JSON.stringify(res.data));
 
        navigate(location.state || "/");
      } else {
        // If login is not successful, display an error message using react-hot-toast library
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // If there's an error during the login process, display a generic error message
      toast.error("Something went wrong");
    }
  };


  return (
    <Layout title="Register - Ecommer App">
      <div className="login-main-container">
        <div className="left-container">
          <img src={registerPhoto} alt="" />
        </div>
   
        <div className="right-container">
          <form onSubmit={handleSubmit}>
       
            <h4 className="title">LOGIN FORM</h4>
            <div className="mb-3">
              
              <input
                type="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
           
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
     
            <button type="submit" className="login-button">
              LOGIN
            </button>
            {/* Links to navigate to the registration and forgot password pages */}
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <p><Link to="/forgot-password">Forgot password</Link></p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
