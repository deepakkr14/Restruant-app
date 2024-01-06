import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import  classes from "./header.module.css";
import mealsImg from "../UI/vuu85b5q.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header  className={classes.header}>
        <h3>Welcome to React Meal!</h3>
        <HeaderCartButton/>
      </header>
      <div>
        <img className={classes['main-image']} src={mealsImg} alt="foods" />
      </div>

      <p>A website for food lovers who love cooking and eating.</p>
    </Fragment>
  );
};
export default Header;