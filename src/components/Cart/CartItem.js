import styles from "../../styles/CartItem/CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div className={styles["cart-item__product"]}>
        <img
          className={styles["cart-item__product--image"]}
          src={props.image}
          alt="product"
        />
        <h3 className={styles["cart-item__product--name"]}>{props.name}</h3>
      </div>
      <h3 className={styles["cart-item__price"]}>GHC {props.price}</h3>
      <div className={styles["cart-item__actions"]}>
        <button
          className={styles["cart-item__actions-btn"]}
          onClick={props.onRemoveFromCart}
        >
          -
        </button>
        <span className={styles["cart-item__actions-qty"]}>{props.qty}</span>
        <button
          className={styles["cart-item__actions-btn"]}
          onClick={props.onAddToCart}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
