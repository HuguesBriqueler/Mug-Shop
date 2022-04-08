import styles from "./Home.module.css";
import shopLogo from "./shopimg.jpg";

export default function Home() {
  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.homeTitle}>
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        repudiandae dolor placeat. Animi beatae officiis facere deserunt
        consequatur veniam, aspernatur eius sapiente itaque in expedita at quos
        ipsam minus ratione.
      </p>
      <img src={shopLogo} alt="Welcome logo" />
    </div>
  );
}
