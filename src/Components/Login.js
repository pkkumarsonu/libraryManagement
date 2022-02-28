import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (userName === "admin" && password === "admin123") {
      console.log("inside admin");
      props.isAdminLog(true);
    } else if (userName === "user" && password === "user123") {
      console.log("inside user");
      props.isUserLog(true);
    }
  };

  return (
    <div>
      Login here
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        required
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button type="submit" onClick={handleClick}>
        {" "}
        Log In{" "}
      </button>
    </div>
  );
};

export default Login;
