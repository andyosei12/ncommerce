import Card from "../UI/Card";
import styles from "../../styles/Product/ProductItem.module.css";
import CartForm from "../CartForm";

const ProductItem = (props) => {
  const addProductToCart = (amount) => {
    console.log("Item added");
  };
  return props.products.map((product) => (
    <Card key={product.id}>
      <div className={styles["product-item__image-container"]}>
        <img
          src={product.image}
          alt="product"
          className={styles["product-item__image"]}
        />
      </div>
      <div className={styles["product-item__details"]}>
        <div className={styles["product-item__info"]}>
          <h3 className={styles["product-item__name"]}>{product.name}</h3>
          <p className={styles["product-item__company"]}>
            Offered by: {product.company}
          </p>
          <h3 className={styles["product-item__price"]}>GHC {product.price}</h3>
        </div>
        <CartForm onAddToCart={addProductToCart} id={product.id} />
      </div>
    </Card>
  ));
};

export default ProductItem;
