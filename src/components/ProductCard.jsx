import styles from './ProductCard.module.css'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function ProductCard(props) {
  const [quantity, setQuantity] = useState(1)

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  return (
    <div className={styles.product}>
        <img className={styles.productImage} src={props.image} alt="Produto" />
        <h3>{props.title}</h3>
        <p className={styles.description}>
        {props.description}
        </p>
        <footer>
          <div className={styles.price}>
            <p>R$ <strong>{props.price}</strong></p>
          </div>
          <div className={styles.icons}>
            <div className={styles.quantitySelector}>
              <button onClick={decrementQuantity}>
                <Minus size={14} weight="bold" />
              </button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <button className={styles.addToCartButton}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </footer>
      </div>
  )
}