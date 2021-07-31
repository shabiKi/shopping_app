import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM ,SHOW_CHILD} from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    child: true,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const showChild = () =>{
    dispatch({type: SHOW_CHILD});
  }

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        child: state.child,
        showCart: state.showCart,
        cartItems: state.cartItems,
        showChild,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;