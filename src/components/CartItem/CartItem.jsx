import styles from "./CartItem.module.css";
function CartItem({ item, handleQuantity, handleRemoveItem }) {
  return (
    <li>
      <img
        src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
        alt={item.title}
      />
      <div className={styles.bloc_cart_infos}>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </div>
      <button type="button" onClick={() => handleRemoveItem(item.id)}>
        Supprimer
      </button>
      <div>
        <label htmlFor="inputQuantity">Quantité</label>
        <input
          type="number"
          onChange={(e) => handleQuantity(e, item.id)}
          id="inputQuantity"
          value={item.quantity}
        />
      </div>
    </li>
  );
}

export default CartItem;
