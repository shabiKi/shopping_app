import { useContext, useState } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import axios from "axios";

const Cart = () => {
  const { showCart, cartItems, showHideCart, child } = useContext(CartContext);
  const [msg, setmsg] = useState("");
  let opts = { format: "%s%v", symbol: "$" };
  let uniqueItems = [...new Set(cartItems)];

  //counting idential item with percentage
  let n = (cartItems.length - uniqueItems.length) * 10;
  //counting discount
  const total = Object.values(cartItems).reduce(
    (t, { price }) => t + parseInt(price),
    0
  );
  let discount = (total * n) / 100;
  let discount_price = total - discount;
  //making order
  const makeOrder = async (e) => {
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/products",
        cartItems
      );
      if (data) {
        setmsg("Order Successful");
      } else {
        setmsg("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {msg && <h2 style={{ color: "green" }}>{msg}</h2>}
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce(
                  (amount, item) => parseInt(item.price) + amount,
                  0
                ),
                opts
              )}
            </div>
          </div>
          <div>after discount: {discount_price} </div>
          <div>
            {!child && (
              <button onClick={makeOrder} className="bt">
                order
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
