import classes from "./MealItemForm.module.css";
import Input from "../../UI/input";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const MealItemForm = (props) => {
  const cart=useContext(CartContext)
  const addmeal=e=>
   { e.preventDefault()
    console.log(cart)
    cart.addItem(props.item)
  }
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addmeal}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
