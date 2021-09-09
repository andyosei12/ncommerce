import styles from "../../styles/Input/Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label className={styles["input__label"]}>{props.label}</label>
      <input className={styles["input__box"]} {...props.input} />
    </div>
  );
};

export default Input;
