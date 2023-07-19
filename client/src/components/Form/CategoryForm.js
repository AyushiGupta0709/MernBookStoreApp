import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-container">
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
