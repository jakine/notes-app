import React from "react";
import styes from './Button.module.css'
const Button = (props, styles) => {
  return (
    <button type="submit" onClick={props.onPress} className={styles.passStyle}>
      {props.text} {props.children}
    </button>
  );
};

export default Button;
