import CartContext from "./cart-context";

const CartProvider = (props) => {
  const defaultValue = {
    items: [],
    totalQty: 0,
    addToCart: (item) => {},
    removeFromCart: (id) => {},
  };

  return (
    <CartContext.Provider value={defaultValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
