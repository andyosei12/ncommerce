import React from "react";
import styles from "../../styles/Input/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const classes = `${styles["input__box"]} ` + props.className;
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id} className={styles["input__label"]}>
        {props.label}
      </label>
      <input ref={ref} className={classes} {...props.input} />
    </div>
  );
});

export default Input;
