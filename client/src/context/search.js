import { useState, useContext, createContext } from "react";

// Create a SearchContext to hold the search state and provide it to components
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook 'useSearch' to get the state of the search from SearchContext
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
