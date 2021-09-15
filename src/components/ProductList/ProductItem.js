import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import styles from "../../styles/Product/ProductItem.module.css";
import CartForm from "../CartForm";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = props.price.toFixed(2);
  const addProductToCart = (amount) => {
    cartCtx.addToCart({
      id: props.id,
      name: props.name,
      amount: amount,
      price: price,
      image: props.image,
    });
  };
  return (
    <Card>
      <div className={styles["product-item__image-container"]}>
        <img
          src={props.image}
          alt="product"
          className={styles["product-item__image"]}
        />
      </div>
      <div className={styles["product-item__details"]}>
        <div className={styles["product-item__info"]}>
          <h3 className={styles["product-item__name"]}>{props.name}</h3>
          <p className={styles["product-item__company"]}>
            Offered by: {props.company}
          </p>
          <h3 className={styles["product-item__price"]}>GHC {price}</h3>
        </div>
        <CartForm onAddToCart={addProductToCart} id={props.id} />
      </div>
    </Card>
  );
};

export default ProductItem;
