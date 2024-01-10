import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = cartCtx.totalAmount;

  return (
    <button onClick={props.onShowbtn} className={classes.button}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};
export default HeaderCartButton;
