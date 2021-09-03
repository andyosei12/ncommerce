import carticon from "../assets/images/sprite.svg";
import styles from "../styles/Cart/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <svg className={styles["cart__cart-icon"]}>
        <use xlinkHref={`${carticon}#icon-shopping-cart`}></use>
      </svg>
      <h3>Cart</h3>
      <h5 className={styles["cart__counter"]}>3</h5>
    </div>
  );
};

export default Cart;
