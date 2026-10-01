import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const userInit = {}
    const tokenInit = ""
    const [token,setToken] = useState(tokenInit)
    const [user,setUser] = useState(userInit)
    const Logout=  () => {
        setToken(tokenInit);
        setUser(userInit);
    };

  return (
    <AuthContext.Provider
      value={{
        userInit,
        setUser,
        setToken,
        token,
        user,
        Logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
