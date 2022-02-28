import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import User from "./Components/User";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const adminHandleLogin = (isAdminLog) => {
    setIsAdminLoggedIn(isAdminLog);
  };

  const userHandleLogin = (isUserLog) => {
    setIsUserLoggedIn(isUserLog);
  };

  const logoutHandler = (isLogout) => {
    setIsAdminLoggedIn(!isLogout);
    setIsUserLoggedIn(!isLogout);
  };

  return (
    <div>
      <CartProvider>
        {isAdminLoggedIn ? (
          <Admin isLogout={logoutHandler} />
        ) : isUserLoggedIn ? (
          <User isLogout={logoutHandler} isUserLog={userHandleLogin} />
        ) : (
          <Login isAdminLog={adminHandleLogin} isUserLog={userHandleLogin} />
        )}
      </CartProvider>
    </div>
  );
};

export default App;
