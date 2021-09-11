import { useReducer } from "react";
import CartContext from "./cart-context";

const initialValue = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialValue;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialValue);
  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const defaultValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={defaultValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
