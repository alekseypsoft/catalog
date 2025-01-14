import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Authprovider } from "./auth/Authcontext";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Authprovider>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="login/" Component={Login} />
            <Route path="register/" Component={Register} />
          </Routes>
        </Authprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
