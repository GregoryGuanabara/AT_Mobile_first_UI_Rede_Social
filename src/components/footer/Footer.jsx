import styles from './Footer.module.css'

export default function Foorter({ children }) {
  return (
    <footer className={styles["footer"]}>{children}</footer>
  )
}