import React from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Parallax from "./components/Parallax";
import Code from "./pages/Code";
import Creative from "./pages/Creative";
import Adventure from "./pages/Adventure";
import Chronicle from "./pages/image-pages/Chronicle";
import VisualArts from "./pages/image-pages/VisualArts";
import Ski from "./pages/image-pages/Ski";
import NewZealand from "./pages/image-pages/NewZealand";
import Duke from "./pages/image-pages/Duke";

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
            <Route path="Creative/Chronicle" element={<Chronicle />} />
            <Route path="Creative/Art" element={<VisualArts />} />
            <Route path="Adventure/Ski" element={<Ski />} />
            <Route path="Adventure/NewZealand" element={<NewZealand />} />
            <Route path="Adventure/Duke" element={<Duke />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
