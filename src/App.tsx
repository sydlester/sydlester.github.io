import React from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Parallax from "./components/Parallax";
import Code from "./pages/Code";
import Creative from "./pages/Creative";
import Adventure from "./pages/Adventure";

function App() {
  return (
    <div className="wrapper">
      <Parallax />
      <HashRouter>
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="Code" element={<Code />} />
            <Route path="Creative" element={<Creative />} />
            <Route path="Adventure" element={<Adventure />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
