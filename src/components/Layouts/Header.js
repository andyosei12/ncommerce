import SearchInput from "../SearchInput";
import UserNav from "../UserNav";

import styles from "../../styles/Header/Header.module.css";
import logo from "../../assets/images/logo_transparent.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="site logo" className={styles["header--logo"]} />
      </div>
      <SearchInput />
      <UserNav onOpenCart={props.onOpenCart} />
    </header>
  );
};

export default Header;
