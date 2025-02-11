import { useState } from "react";
import styles from "./nav.module.css";

export default function Nav() {
  const [menuClosed, setmenuClosed] = useState(true);

  const handlemenueOpen = () => {
    setmenuClosed(!menuClosed);
  };

  return (
    <div className={styles.nav}>
      {menuClosed
        ? <img
            src="../close.png"
            alt=""
            onClick={handlemenueOpen}
            className={styles.openMenue}
          />
        : <img
            onClick={handlemenueOpen}
            className={styles.menue}
            src="../align-justify.png"
            alt="align-justify.png"
          />}

      {menuClosed
        ? <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
              <p />
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        : null}
    </div>
  );
}
