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
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [answerError, setAnswerError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields
    const isValid = validateFields();

    if (isValid) {
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
    }
  };

  const validateFields = () => {
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else if (!isValidName(name)) {
      setNameError("Invalid name format");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate phone
    if (!phone.trim()) {
      setPhoneError("Phone is required");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Validate address
    if (!address.trim()) {
      setAddressError("Address is required");
      isValid = false;
    } else {
      setAddressError("");
    }

    // Validate answer
    if (!answer.trim()) {
      setAnswerError("Answer is required");
      isValid = false;
    } else {
      setAnswerError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    // Name format validation (only letters, spaces, and hyphens allowed)
    const nameRegex = /^[a-zA-Z\s-]+$/;
    return nameRegex.test(name);
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className='register-main-container'>
        <div className='left-container'>
          <img src={registerPhoto} alt=''></img>
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit}>
            <h4 className="title">Create new Account</h4>
            <div className="mb-3">
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
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
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
              {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone"
                required
              />
              {phoneError && <p className="error-message">{phoneError}</p>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Address"
                required
              />
              {addressError && <p className="error-message">{addressError}</p>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="What is Your Favorite sports"
                required
              />
              {answerError && <p className="error-message">{answerError}</p>}
            </div>
            <p>Already a user? <Link to="/login">Login</Link></p>
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
