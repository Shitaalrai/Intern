import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const userInit = {}
    const tokenInit = ""
    const [token,setToken] = useState(tokenInit)
    const [user,setUser] = useState(userInit)

  return (
    <AuthContext.Provider
      value={{
        setUser,
        setToken,
        token,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
