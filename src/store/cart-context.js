import React from "react";

const CartContext = React.createContext({
  items: [],
  totalQty: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
