// Importing required modules and components
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { Link } from "react-router-dom";
import registerPhoto from "../../images/registerphoto.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending a POST request to the server to register the user
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        // If registration is not successful, display an error message using react-hot-toast library
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // If there's an error during the registration process, display a generic error message
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className='register-main-container'>
        <div className='left-container'>

          <img src={registerPhoto} alt=''></img>
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit}>
            {/* Registration form */}
            <h4 className="title">Create new Account</h4>
            <div className="mb-3">
              {/* Input field for the name */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              {/* Input field for the email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              {/* Input field for the password */}
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
            <div className="mb-3">
              {/* Input field for the phone number */}
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-3">
              {/* Input field for the address */}
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
              {/* Input field for a security question */}
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="What is Your Favorite sports"
                required
              />
            </div>
            {/* Link to navigate to the login page */}
            <p>Already a user? <Link to="/login">Login</Link></p>
            {/* Submit button to initiate registration */}
            <button type="submit" className="register-button">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
