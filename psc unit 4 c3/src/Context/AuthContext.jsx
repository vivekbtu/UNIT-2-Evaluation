import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

function AppContextProviderComponent({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const toggle = () => {
    setIsAuth(!isAuth);
  };
  const loginUser = (email, token) => {
    setEmail(email);
    setToken(token);
    setIsAuth(true);
  };
  const logoutUser = () => {
    setEmail("");
    setToken(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggle, loginUser, logoutUser, email, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AppContextProviderComponent;
