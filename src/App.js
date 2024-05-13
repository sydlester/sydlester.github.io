import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
//import Current from './Pages/Current'
import Creative from './Pages/Creative'
import Adventure from './Pages/Adventure'
import AllArt from './Pages/AllArt'

function App() {
  return (
    <HashRouter>
      <div> 
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="Projects" element={<Projects />} />
          {/* <Route path="Current" element={<Current />} /> */}
          <Route path="Creative" element={<Creative />} />
          <Route path="Adventure" element={<Adventure />} />
          <Route path="AllArt" element={<AllArt />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
