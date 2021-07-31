import { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";
const ProductCard = ({ product }) => {
  let opts = { format: "%s%v", symbol: "$" };
  const { addToCart } = useContext(CartContext);
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.title}</h4>
        <div className="productCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <button
          className="productCard__button"
          onClick={() => addToCart(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
