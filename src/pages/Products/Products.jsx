import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import inventory from "../../data/inventory";
import Card from "../../components/Card/Card";

export default function Products() {
  return (
    <div className={styles.containerProducts}>
      {inventory.map((item) => (
        <Link
          to={{
            pathname: `/products/${item.id}`,
          }}
          key={item.id}
        >
          <Card item={item} />
        </Link>
      ))}
    </div>
  );
}
