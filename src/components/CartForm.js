import { useRef, useState } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";

import styles from "../styles/Button/CartButton.module.css";
import classes from "../styles/Input/Input.module.css";

const CartForm = (props) => {
  const qtyRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredQty = qtyRef.current.value;
    const enteredNumberQty = +enteredQty;

    if (
      enteredQty.trim().length === 0 ||
      enteredNumberQty < 1 ||
      enteredNumberQty > 5
    ) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    props.onAddToCart(enteredNumberQty);
  };
  return (
    <form onSubmit={submitFormHandler}>
      <Input
        className={`${!isFormValid && classes["input__box-invalid"]}`}
        ref={qtyRef}
        label="Qty"
        input={{
          id: "amount" + props.id,
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
