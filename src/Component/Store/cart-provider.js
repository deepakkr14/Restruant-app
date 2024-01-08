import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
  quantity:0
};
// {description:"Finest fish and veggies"
// name: "Sushi",price: 22.99}
const cartReducer = (state, action) => {
  if (action.type=='ADD'){
const updatedItems=state.items.concat(action.item)

const updatedTotalAmount=state.totalAmount+action.item.price;
const updatedQuantity=state.quantity+1;
console.log('i am final',updatedItems,updatedTotalAmount)
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount,
      quantity:updatedQuantity
  }};
  if (action.type=='REMOVE'){
return 
  } 
  return defaultCartState;
};
const CartProvider = (Props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    console.log('uuuuuuuuuuu',item)
    dispatchCartAction({type:'ADD',item:item})
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({type:'REMOVE',id:id})
  };
  const cartContext = {
    items:cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    quantity:cartState.quantity
  };
  return (
    <CartContext.Provider value={cartContext}>
      {Props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
