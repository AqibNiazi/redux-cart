import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/UI-Slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
