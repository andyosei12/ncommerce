import styles from "../styles/ActivityTab/ActivityTab.module.css";

const ActivityTab = () => {
  return (
    <div className={styles.activity}>
      <h3 className={styles["activity__tab"]}>Trending</h3>
      <h3 className={styles["activity__tab"]}>New</h3>
      <h3 className={styles["activity__tab"]}>Most popular</h3>
    </div>
  );
};

export default ActivityTab;
