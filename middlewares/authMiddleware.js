import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
const BRAINTREE_MERCHANT_ID="bvgnzz7w5rqzqx9t";
const BRAINTREE_PUBLIC_KEY= "6cch4r7dk3f3fckc";
const BRAINTREE_PRIVATE_KEY= "7d3119a8c043d84547a3cf1c2fc4d061 ";
const JWT_SECRET="VJDKFHVIUUE#85";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
