import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
import classes from './HeaderCartButton.module.css'
import { useContext } from "react";
const HeaderCartButton=props=>{
  const contextValue = useContext(CartContext);
console.log(contextValue.totalAmount)

  return (
    <button onClick={props.onShowbtn} className={classes.button}>
        <span>
            <CartIcon className= {classes.icon}/>
        </span>
        <span>
            Your Cart
        </span> 
        <span className={classes.badge}>
        {contextValue.quantity} 
        </span>
    </button>
  )
}
export default HeaderCartButton;