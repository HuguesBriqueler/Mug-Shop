import cartIcon from "./shopping-cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./FloatingCart.module.css";

export default function FloatingCart() {
  // We retrieve the cart from the Redux store
  const cart = useSelector((state) => state.cart);
  // then we calculate the number of items in the cart to display it next to the cart icon
  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <Link to="/shoppingcart">
      <div className={styles.floatingCart}>
        <p>Votre panier</p>
        <div className={styles.cartNotifContainer}>
          <img src={cartIcon} alt="Cart icon" />
          <span className={styles.notif}>{totalItems}</span>
        </div>
      </div>
    </Link>
  );
}
