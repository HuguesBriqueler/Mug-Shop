import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./ProductShowcase.module.css";
import inventory from "../../data/inventory";

export default function ProductShowcase() {
  const id = useParams().id;
  const item = inventory.find((item) => item.id === id);
  const [nbItems, setNbItems] = useState(1);
  const addedToCart = useRef();
  let timerId;
  let isNotificationVisible = false;
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
    // Here we display a notification message when the item is added to the cart
    addedToCart.current.innerText = "Ajouté au panier";
    // Then we set a timer to hide the notification after 2 seconds
    if (!isNotificationVisible) {
      timerId = setTimeout(() => {
        addedToCart.current.innerText = "";
        isNotificationVisible = false;
      }, 2000);
      isNotificationVisible = true;
    }
  };

  useEffect(() => {
    // Here we clear the timer when the component is unmounted in case the notification
    // is still visible when the user navigates to another page.
    return () => {
      clearTimeout(timerId);
    };
  }, []);

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
          <span ref={addedToCart}></span>
        </form>
      </div>
    </div>
  );
}
