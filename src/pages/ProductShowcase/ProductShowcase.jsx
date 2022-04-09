import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductShowcase.module.css";
import inventory from "../../data/inventory";

export default function ProductShowcase() {
  const id = useParams().id;
  const item = inventory.find((item) => item.id === id);
  const [nbItems, setNbItems] = useState(1);

  const handleQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity > 0) {
      setNbItems(Number(e.target.value));
    } else {
      setNbItems(1);
    }
  };
  return (
    <div className={styles.showcase}>
      <div className={styles.containerShowcase}>
        <img
          className={styles.imgShowcase}
          src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
          alt={item.title}
        />
      </div>
      <div className={styles.productInfos}>
        <h2>{item.title}</h2>
        <p>Prix: {item.price}€</p>
        <form>
          <label htmlFor="quantity">Quantité:</label>
          <input
            type="number"
            id="quantity"
            value={nbItems}
            onChange={handleQuantity}
          />
          <button>Ajouter au panier</button>
          <span></span>
        </form>
      </div>
    </div>
  );
}
