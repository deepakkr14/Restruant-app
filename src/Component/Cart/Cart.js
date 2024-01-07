import Modal from '../UI/Modal'
import classes from './Cart.module.css'
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "suchi", price: "20", amount: "2" }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  
  console.log(cartItems)
  return (
    <Modal onClosebtn={props.onClosebtn}>
      {/* {cartItems} */}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>34.45</span>
      </div>
      <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClosebtn}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
    </Modal>
  );
};
export default Cart;
