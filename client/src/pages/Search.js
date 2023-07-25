import React from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
const Search = () => {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  return (
    <Layout title={"Search results"}>
      <div className="container" style={{"margin-top":"105px"}}>
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="text-center home-right-container">
            {values?.results.map((p) => (
              <div className="card single-image" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="home-product-description">
                  <h5 className="card-title">{p.name.toUpperCase()}</h5>
               
                  <p className="card-title card-price">
                    <span className="price">Price:</span>
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                  <p>
                    <span className="des">Description</span>{" "}
                    {p.description.substring(0, 30)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="home-more-details-button home-button"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      MORE DETAILS
                    </button>
                    <button
                      className="home-button"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
