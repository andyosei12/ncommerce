import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

import styles from "../../styles/Cart/Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItems = cartCtx.items.length > 0;

  const addToCartHandler = (item) => {
    cartCtx.addToCart({
      ...item,
      amount: 1,
    });
  };

  const removeFromCartHandler = (id) => {
    cartCtx.removeFromCart(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      image={item.image}
      qty={item.amount}
      name={item.name}
      price={item.price}
      onAddToCart={addToCartHandler.bind(null, item)}
      onRemoveFromCart={removeFromCartHandler.bind(null, item.id)}
    />
  ));
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <h3 className={styles["cart__title"]}>Shopping Cart</h3>
      {!hasItems && (
        <h3 className={styles["cart-empty__text"]}>
          Your cart is currently empty
        </h3>
      )}
      <ul className={styles.cart}>{cartItems}</ul>
      <div className={styles["cart__cta"]}>
        {!hasItems && (
          <button
            className={styles["cart__cta--back"]}
            onClick={props.onCloseCart}
          >
            Start Shopping
          </button>
        )}
        {hasItems && (
          <button
            className={styles["cart__cta--back"]}
            onClick={props.onCloseCart}
          >
            Continue Shopping
          </button>
        )}

        <div className={styles["cart__total"]}>
          <h5>Total:</h5>
          <h5 className={styles["cart__total-amount"]}>GHC {totalAmount}</h5>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
