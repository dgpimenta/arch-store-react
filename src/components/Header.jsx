import styles from './Header.module.css'
import archLogo from '../assets/arch-store.jpg'
import cart from '../assets/cart.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header id={theme === 'dark' && styles.dark}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="">
            <img src={archLogo} alt="Logo da Arch Store" />
            <strong>-Store</strong>
          </a>
        </div>
        <div className={styles.userDetails}>
          <label htmlFor='switch' className={styles.switch}>
            <input type="checkbox" id="switch" onClick={toggleTheme} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <a href="#">
            <img
              src={cart}
              alt="Meu carrinho de compras"
              title="Carrinho de compras"
            />
          </a>
          <p>Login</p>
        </div>
      </div>
    </header>
  )  
}