import React from "react";
import styles from "../../styles/Products.module.css";

function ProductList() {
  return (
    <main className={styles.container}>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </main>
  );
}

export default ProductList;
