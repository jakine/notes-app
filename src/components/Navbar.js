import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  const [modeToggler, setModeToggler] = useState(false);

  const togglemodeHandler = () => {
    const modeState=!modeToggler
    setModeToggler(!modeToggler);
    props.modeToggler({modeState})
  };

  const h1classname=modeToggler ? styles.h1DarkBackgroundBackground:styles.h1LightBackgroundBackground;

  return (
    <div className={styles.navbarContainer}>
      <h1 className={h1classname}>Notes App</h1>
      <button onClick={togglemodeHandler} className={styles.iconMode}>
        {modeToggler ? <MdLightMode />: <MdDarkMode /> }
      </button>
    </div>
  );
};

export default Navbar;
