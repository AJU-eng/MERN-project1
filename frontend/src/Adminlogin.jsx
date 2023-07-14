import axios from "axios";
import React, { useState } from "react";

function Adminlogin() {
  const [admin, setAdmin] = useState();
  const [password, setPassword] = useState();

  function onSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost:7000/hello", { admin, password });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          onChange={(e) => setAdmin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" onSubmit={onSubmit} />
      </form>
    </div>
  );
}

export default Adminlogin;
