import { useContext } from "react";

import CartContext from "../store/cart-context";

import carticon from "../assets/images/sprite.svg";
import styles from "../styles/Cart/Cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const totalQty = items.reduce(
    (acc, currentItem) => acc + currentItem.amount,
    0
  );
  return (
    <div className={styles.cart}>
      <svg className={styles["cart__cart-icon"]}>
        <use xlinkHref={`${carticon}#icon-shopping-cart`}></use>
      </svg>
      <h3>Cart</h3>
      <h5 className={styles["cart__counter"]}>{totalQty}</h5>
    </div>
  );
};

export default Cart;
