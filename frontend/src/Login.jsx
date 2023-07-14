import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Signup from "./Signup";
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7000/Login", { email, password })
      .then((res) => {
        if (res.data == "exist") {
          history("/Home");
          // alert("correct");
        } else if (res.data == "not exist") {
          alert("Invalid User credential");
        }
      });

    console.log("hello world");
  };

  return (
    <form method="POST">
      <label htmlFor="email" />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" onClick={formSubmit} />
    </form>
  );
}
export default Login;
