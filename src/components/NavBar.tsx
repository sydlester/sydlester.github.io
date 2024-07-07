import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";

const Menu = () => {
  return <div>h</div>;
};

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className={`${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
          <Menu />
        </div>
        {/* TODO: collapse doesn't work */}
        <div
          className={`${showNavbar ? styles.navElements : styles.navElements}`}
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to="/"
              >
                SYDNEY LESTER
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to="/Code"
              >
                CODE
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to="/Creative"
              >
                CREATIVE
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                to="/Adventure"
              >
                ADVENTURE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
