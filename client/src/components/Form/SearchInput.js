import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Search.css";

const SearchInput = () => {
  // Accessing state and state-modifying function using the useSearch custom hook
  const [values, setValues] = useSearch();
  
  const navigate = useNavigate();

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Send a GET request to the server to search for products based on the keyword value
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );

      // Update the 'results' property in the state with the received data from the server
      setValues({ ...values, results: data });

      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2 search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })} 
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
