import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./ShoppingCart.module.css";
import CartItem from "../../components/CartItem/CartItem";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleQuantity = (e, id) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity > 0) {
      const index = cart.findIndex((item) => item.id === id);
      dispatch({
        type: actions.UPDATEITEM,
        payload: { ...cart[index], quantity: newQuantity },
      });
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: actions.REMOVEITEM,
      payload: id,
    });
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="global-container">
      <p className={styles.headingCart}></p>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleQuantity={handleQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </ul>
      <p className={styles.total_price}>Total: {totalPrice.toFixed(2)}€</p>
      <button className={styles.btn_cart}>Paiement</button>
    </div>
  );
}
