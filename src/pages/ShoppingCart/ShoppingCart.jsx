import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleQuantity = (e, id) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity > 0) {
      const index = cart.findIndex((item) => item.id === id);
      dispatch({
        type: actions.UPDATEITEM,
        payload: { ...cart[index], quantity: newQuantity },
      });
    }
  };

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
              <input
                type="number"
                onChange={(e) => handleQuantity(e, item.id)}
                id="inputQuantity"
                value={item.quantity}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
