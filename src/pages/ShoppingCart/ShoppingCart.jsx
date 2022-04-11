import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="global-container">
      <p className={styles.headingCart}></p>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt={item.title}
            />
            <div className={styles.bloc_cart_infos}>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
            <div className={styles.bloc_input}>
              <label htmlFor="inputQuantity">Quantité</label>
              <input type="number" id="inputQuantity" value={item.quantity} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
