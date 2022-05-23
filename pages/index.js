import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import PlayContainer from "../components/playContainer";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <Header />
      <PlayContainer />
      <Footer />
    </div>
  );
}
