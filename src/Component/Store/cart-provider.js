import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (Props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setAmount] = useState(0);

  const addItemToCart = (item, qty) => {
    const existingCartItem = items.findIndex(
      (iteme) => iteme.name === item.name
    );
    if (existingCartItem !== -1) {
      const copy = items;
      copy[existingCartItem].quantity += Number(qty);
      setItems(copy);
    } else {
      let newObj = { ...item, quantity: qty };
      const copy = items;
      copy.push(newObj);
      setItems(copy);
    }
    // TO FIND TOTAL NO OF CART ITEMS
    let quantity = 0;
    items.forEach((item) => {
      quantity = quantity + Number(item.quantity);
    });
    setAmount(quantity);
  };
  const removeItemFromCart = (item) => {
    const existingCartItem = items.findIndex(
      (iteme) => iteme.name === item.name
    );
    if (items[existingCartItem].quantity > 1) {
      const copy = items;
      copy[existingCartItem].quantity -= 1;
      setItems(copy);
    } else {
      const updatedItems = items.filter((each) => each.name !== item.name);
      setItems(updatedItems);
    }
    setAmount(prev=>prev-1)
  };
  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {Props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
