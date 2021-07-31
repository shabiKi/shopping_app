import React, { useContext } from "react";
import "./Nav.css";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart, showChild, child } = useContext(CartContext);

  return (
    <nav>
      <div className="nav__left">
        {child ? (
          <button onClick={showChild} className="button">
            Child User
          </button>
        ) : (
          <button onClick={showChild} className="button">
            Parent User
          </button>
        )}
      </div>
      <div className="nav__middle">
        <h2 style={{ fontFamily: "Papyrus" }}> Shopping App </h2>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
