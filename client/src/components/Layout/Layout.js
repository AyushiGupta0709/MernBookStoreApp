import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

// Layout component that serves as a template for the application's pages
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      {/* Helmet component to manage the metadata for the page */}
      <Helmet>
        <meta charSet="utf-8" />
        {/* Meta tags for description, keywords, and author */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        {/* <title>{title}</title> */}
      </Helmet>

      {/* Header component */}
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Default props for the Layout component, in case the parent component doesn't pass these props
Layout.defaultProps = {
  title: "THE BOOK SPOT",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Ayushi Gupta",
};

export default Layout;
