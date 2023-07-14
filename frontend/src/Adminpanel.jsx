import axios from "axios";
import { useEffect, React, useState } from "react";

function Adminpanel() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:7000/getUser")
      .then((result) => setUser(result.data));
  });

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {user.map((use) => {
          return (
            <tr>
              <td>{use.name}</td>
              <td>{use.email}</td>
              <button>update</button>
              <button>delete</button>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Adminpanel;
