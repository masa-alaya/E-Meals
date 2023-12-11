import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighligthted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return (curNumber += item.amount);
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : " "
  } `;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighligthted(true);
    const timer = setTimeout(() => {
      setBtnIsHighligthted(false);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
