import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/Categories.css";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="main-category-container">
        {/* <div className="single-row"> */}
          {categories.map((c) => (
            <div className="" key={c._id}>
              <div className="card single-category">
                <Link to={`/category/${c.slug}`} className="btn categories-button">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </Layout>
  );
};

export default Categories;
