import styles from "./Card.module.css";
import heart from "./heart.svg";

export default function Card({ item }) {
  return (
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
  );
}
