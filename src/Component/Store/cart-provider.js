import CartContext from "./cart-context"
const CartProvider=()=>{
    const addItemToCart=item=>{};
    const removeItemFromCart=item=>{};
    const cartContext={
        items:[],
    totalAmount:0,
    addItem:addItemToCart,
    removeItem:removeItemFromCart
    }
return <CartContext.Provider valur={cartContext}>
    {Props.children}
</CartContext.Provider>
}
export default CartProvider