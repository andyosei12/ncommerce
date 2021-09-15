import HeaderCartButton from "./Layouts/HeaderCartButton";
import usericon from "../assets/images/sprite.svg";
import styles from "../styles/UserNav/UserNav.module.css";

const UserNav = (props) => {
  return (
    <div className={styles.usernav}>
      <div className={styles["usernav__user"]}>
        <svg className={styles["usernav__user-icon"]}>
          <use xlinkHref={`${usericon}#icon-user`}></use>
        </svg>
        <h3>Account</h3>
      </div>
      <HeaderCartButton onOpenCart={props.onOpenCart} />
    </div>
  );
};

export default UserNav;
