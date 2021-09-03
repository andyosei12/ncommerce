import Cart from "./Cart";
import usericon from "../assets/images/sprite.svg";
import styles from "../styles/UserNav/UserNav.module.css";

const UserNav = () => {
  return (
    <div className={styles.usernav}>
      <div className={styles["usernav__user"]}>
        <svg className={styles["usernav__user-icon"]}>
          <use xlinkHref={`${usericon}#icon-user`}></use>
        </svg>
        <h3>Account</h3>
      </div>
      <Cart />
    </div>
  );
};

export default UserNav;
