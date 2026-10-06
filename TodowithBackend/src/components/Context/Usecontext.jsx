import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
  const userInit = {};
  const tokenInit = "";
  const [token, setToken] = useState(tokenInit);
  const [data, setdata] = useState([]);
  const [user, setUser] = useState(userInit);
  const AuthHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const Logout = () => {
    setToken(tokenInit);
    setUser(userInit);
  };

  return (
    <AuthContext.Provider
      value={{
        tokenInit,
        userInit,
        setUser,
        setToken,
        token,
        user,
        Logout,
        AuthHeader,
        data,
        setdata
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
