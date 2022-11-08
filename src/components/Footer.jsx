import styles from './Footer.module.css'
import archLogo from '../assets/arch-store.jpg'

export function Footer() {
  return (
    <footer className={styles.pageFooter}>
      <div className={styles.logo}>
        <a href="">
          <img src={archLogo} alt="Logo da Arch Store" />
          <strong>-Store</strong>
        </a>
      </div>
    </footer>
  )
}