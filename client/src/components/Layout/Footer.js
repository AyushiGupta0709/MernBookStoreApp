// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };

// export default Footer;



import React from 'react';
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div  className='first-section section'>
            <h5>Customer Service</h5>
            <li>Location and Hours</li>
            <li>Terms and Conditions</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Payment Methods</li>
            <li>Shipping and returs</li>

            </div>
            <div className='second-section section'>
                <h5>Products</h5>
                <li>All Products</li>
                <li>Gift Cards</li>
                <li>New Products</li>
                <li>Offers</li>
                <li>RSS Feed</li>
            </div>
            <div className='third-section section'>
                <h5>Contact Info</h5>
                <li><i className="fa-regular fa-envelope email"></i>   Ayushi.Gupta@geminisolutions.com</li>
                <li><i className="fa-sharp fa-solid fa-location-dot location"></i>   Gemini solutions,Udyog vihar sector 20,Gurugram</li>
                <li><i className="fa-sharp fa-solid fa-phone phone"></i>  9876543210</li>
                
            </div>
            <div className='fourth-section section'>
                <h5>Connect with us</h5>
                <div className='icons'>
                <li><i className="fa-brands fa-square-instagram "></i></li>
                <li><i className="fa-brands fa-square-twitter"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Footer
