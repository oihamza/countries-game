import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <button onClick={() => window.open("https://twitter.com/oihamza", "_blank")}>
        <img src="/twitter.png" alt="Twitter logo" />
      </button>
      <p>© Countries Game 2022</p>
    </div>
  );
}
