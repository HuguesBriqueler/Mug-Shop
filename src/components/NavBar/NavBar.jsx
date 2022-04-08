import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navTop}>
      <Link to="/">ACCUEIL</Link>
      <Link to="/products">PRODUITS</Link>
      <Link to="contact">CONTACT</Link>
    </nav>
  );
}
