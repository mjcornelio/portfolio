import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "animate.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Route exact path="/portfolio">
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
