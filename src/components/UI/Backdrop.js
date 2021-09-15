import styles from "../../styles/Backdrop/Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={styles.overlay} onClick={props.onCloseCart} />;
};

export default Backdrop;
