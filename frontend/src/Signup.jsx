import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:7000/Signup", { name, email, password });
  };

  return (
    <div>
      <form method="POST">
        <label htmlFor="name" />
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
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
    </div>
  );
}

export default Signup;
