import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import heart from "./heart.svg";
import inventory from "../../data/inventory";

export default function Products() {
  return (
    <div className={styles.containerProducts}>
      {inventory.map((item) => (
        <Link
          to={{
            pathname: `/products/${item.title.replace(/\s+/g, "").trim()}`,
          }}
          key={item.id}
        >
          <div className={styles.blocCard}>
            <div className={styles.productCard}>
              <div className={styles.visualAspect}>
                <img
                  className={styles.imgProduct}
                  src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
                  alt="Product visual"
                />
                <div className={styles.likeContainer}>
                  <img src={heart} alt="J'aime" />
                </div>
              </div>
              <div className={styles.info}>
                <p>{item.title}</p>
                <p>Prix : {item.price}€</p>
              </div>
            </div>
            <div className={styles.backCard}></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
