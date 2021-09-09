import Button from "./UI/Button";
import Input from "./UI/Input";

import styles from "../styles/Button/CartButton.module.css";

const CartForm = (props) => {
  return (
    <form>
      <Input
        label="Qty"
        input={{
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <Button type="submit" className={styles["cart-button"]}>
        Add to Cart
      </Button>
    </form>
  );
};

export default CartForm;
