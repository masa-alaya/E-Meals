import React, { Fragment } from "react";
import mealsImage from "../../assests/HeaderImg.avif";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> E-Meals </h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A Table Full of Delecious Food!!" />
      </div>
    </Fragment>
  );
};

export default Header;
