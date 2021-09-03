import SearchInput from "../components/SearchInput";
import UserNav from "../components/UserNav";

import styles from "../styles/Header/Header.module.css";
import logo from "../assets/images/logo_transparent.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="site logo" className={styles["header--logo"]} />
      </div>
      <SearchInput />
      <UserNav />
    </header>
  );
};

export default Header;
