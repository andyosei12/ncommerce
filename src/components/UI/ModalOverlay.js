import styles from "../../styles/ModalOverlay/ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

export default ModalOverlay;
