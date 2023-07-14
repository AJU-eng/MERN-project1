import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Adminlogin from "./Adminlogin";
import Adminpanel from "./Adminpanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/hello" element={<Adminlogin />}></Route>
          <Route path="/panel" element={<Adminpanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
