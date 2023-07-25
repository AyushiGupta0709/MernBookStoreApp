import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// Create an AuthContext to hold the authentication state and provide it to components
const AuthContext = createContext();

// AuthProvider component to manage authentication state and provide it to child components
const AuthProvider = ({ children }) => {
  // State variable 'auth' to hold user and token information
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Set default authorization header for axios with the token
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      // Parse and set the authentication data from localStorage to 'auth' state
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook 'useAuth' to consume the authentication state from AuthContext
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
