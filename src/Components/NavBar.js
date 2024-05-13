import { NavLink } from 'react-router-dom'
import '../Styles/NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbutton-container">
        <div className='name'>
          SYDNEY LESTER
          {/* <a href="https://github.com/sydlester" className='link-button'><i class="fa fa-github"></i></a>
          <a href="https://linkedin.com/in/sydneylester31" className='link-button'><i class="fa fa-linkedin"></i></a> */}
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">ABOUT ME</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">PROJECTS</NavLink>
            </li>
            {/* <li>
              <NavLink to="/Current">CURRENT</NavLink>
            </li> */}
            <li>
              <NavLink to="/Creative">CREATIVE</NavLink>
            </li>
            <li>
              <NavLink to="/Adventure">ADVENTURES</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar