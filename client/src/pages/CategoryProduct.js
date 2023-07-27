import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container similars">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center products-length">{products?.length} result found </h6>
            <div className="d-flex flex-wrap main-container">
              {products?.map((p) => (
                <div className="card m-2 main-card" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                    <div className="home-product-description">
                      <h5 className="card-title">{p.name.toUpperCase()}</h5>
                      <p className="card-title card-price">
                      <span className="price">Price:</span>{p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                      <p className="card-text">
                    <span className="des">Description:</span>{p.description.substring(0, 60)}...
                    </p>
                    <button
                        className="category-button"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        MORE DEATILS
                      </button>
                    </div>                         
                    </div>
              ))}
            </div>
        </div>
    </Layout>
  );
};

export default CategoryProduct;
