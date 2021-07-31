import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="item" />
      <div>
        {item.productName} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
