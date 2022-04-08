import cartIcon from "./shopping-cart.svg";
import { Link } from "react-router-dom";
import styles from "./FloatingCart.module.css";

export default function FloatingCart() {
  return (
    <Link to="shoppingcart">
      <div className={styles.floatingCart}>
        <p>Votre panier</p>
        <div className={styles.cartNotifContainer}>
          <img src={cartIcon} alt="Cart icon" />
          <span className={styles.notif}>0</span>
        </div>
      </div>
    </Link>
  );
}
