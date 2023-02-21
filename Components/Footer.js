import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <h2>Quick Navigation Links</h2>
      </div>
      <div className={styles.column}>
        <h2>About artSam</h2>
      </div>
      <div className={styles.column}>
        <h2>Get In Touch</h2>
      </div>
    </div>
  );
}
