import React from "react";

// Functional component CategoryForm
// It takes three props: handleSubmit, value, and setValue
const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        {/* Container for search input and submit button */}
        <div className="search-container">
          {/* Input field for entering a new category */}
          <input
            type="text"
            className="form-control search-input"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="search-button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
