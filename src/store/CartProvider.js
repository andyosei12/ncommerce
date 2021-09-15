import { useReducer } from "react";
import CartContext from "./cart-context";

const initialValue = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // info: Check if the item already exists
    const cartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItem = state.items[cartItemIndex];
    let updatedCartItems;
    if (existingCartItem) {
      // console.log(existingCartItem.amount, action.item.amount);
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[cartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }
    return {
      items: updatedCartItems,
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
