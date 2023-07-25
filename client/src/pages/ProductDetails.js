import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
// import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
        {/* {products?.map((p) => ( */}
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>
            <span className="des">Name : </span>
            {product.name}
          </h6>
          <h6>
            <span className="des">Description : </span>
            {product.description}
          </h6>
          <h6 className="price">
            <span className="des">Price :</span>

            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>
            <span className="des">Category:</span>
            {product?.category?.name}
          </h6>

          <button
            class="btn ms-1 add-cart-button"
            onClick={() => {
              setCart([...cart,product]);
              localStorage.setItem("cart", JSON.stringify([...cart,product]));
              toast.success("Item Added to cart");
            }}
          >
            ADD TO CART
          </button>
        </div>
          
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap similar-container">
          {relatedProducts?.map((p) => (
            <div className="card main-card" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />

              <div className="similar-product-description">
                <h5 className="card-title">{p.name.toUpperCase()}</h5>
                <h5 className="card-title card-price">
                  <span className="price">Price:</span>
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h5>

                <p className="card-text ">
                  <span className="des">Description:</span>{" "}
                  {p.description.substring(0, 60)}...
                </p>
                <button
                  className="product-button"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
