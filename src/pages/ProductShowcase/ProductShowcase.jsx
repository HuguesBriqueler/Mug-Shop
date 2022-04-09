import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./ProductShowcase.module.css";
import inventory from "../../data/inventory";

export default function ProductShowcase() {
  const id = useParams().id;
  const item = inventory.find((item) => item.id === id);
  const [nbItems, setNbItems] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity > 0) {
      setNbItems(Number(e.target.value));
    } else {
      setNbItems(1);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    // Here we dispatch the action ADDITEM with current item and quantity to the cart
    dispatch({
      type: actions.ADDITEM,
      payload: { ...item, quantity: nbItems },
    });
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
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité:</label>
          <input
            type="number"
            id="quantity"
            value={nbItems}
            onChange={handleQuantity}
          />
          <button type="submit">Ajouter au panier</button>
          <span></span>
        </form>
      </div>
    </div>
  );
}
