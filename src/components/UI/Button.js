import styles from "../../styles/Button/Button.module.css";

const Button = (props) => {
  const classes = `${styles.button} ` + props.className;
  return (
    <button className={classes} type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
