import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../Store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {
const ctx=useContext(CartContext)
// console.log(ctx)
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <li>{item.name} {item.price} quantity:{item.eachQty}</li>
        // <li>{item.name} {item.price} </li>
      ))}
    </ul>
  );
  
  // console.log(cartItems)
  return (
    <Modal onClosebtn={props.onClosebtn}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClosebtn}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
    </Modal>
  );
};
export default Cart;
