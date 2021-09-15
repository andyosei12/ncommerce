import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";

import carticon from "../../assets/images/sprite.svg";
import styles from "../../styles/HeaderCartButton/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isCartAnimated, setIsCartAnimated] = useState(false);
  const classes = `${styles.cart} ${
    isCartAnimated ? styles["cart__bump"] : ""
  }`;
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsCartAnimated(true);
    const timer = setTimeout(() => setIsCartAnimated(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const totalQty = items.reduce(
    (acc, currentItem) => acc + currentItem.amount,
    0
  );
  return (
    <div className={classes} onClick={props.onOpenCart}>
      <svg className={styles["cart__cart-icon"]}>
        <use xlinkHref={`${carticon}#icon-shopping-cart`}></use>
      </svg>
      <h3>Cart</h3>
      <h5 className={styles["cart__counter"]}>{totalQty}</h5>
    </div>
  );
};

export default HeaderCartButton;
