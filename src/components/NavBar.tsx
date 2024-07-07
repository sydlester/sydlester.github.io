import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";

const MenuIcon = () => {
  return <div>h</div>;
};
const CloseMenu = () => {
  return <div>x</div>;
};

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMobileMenu = () => setShowMenu(false);
  return (
    <nav className={`${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.menuIcon} onClick={handleShowMenu}>
          {showMenu ? <CloseMenu /> : <MenuIcon />}
        </div>
        <div
          className={`${styles.navElements} ${showMenu ? styles.active : ""}`}
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeMobileMenu}
                to="/"
              >
                ABOUT ME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
