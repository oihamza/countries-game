import styles from "./Header.module.scss";
import { CgReadme, CgClose } from "react-icons/cg";
import { useState } from "react";
import Link from 'next/link'

export default function Header() {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.container}>
      {modal && (
        <div className={styles.modal}>
          <div
            onClick={() => setModal(false)}
            className={styles.clickAway}
          ></div>
          <div className={styles.box}>
            <button onClick={() => setModal(false)}>
              <CgClose size={25} />
            </button>
            <p>About:</p>
            <l>
              <li>Enter as many countries as you can think of within 12 mins.</li>
              <li>You only have twelve minutes. No stopping or pausing!</li>
              <li>Abbreviations of countries are allowed. e.g. USA</li>
              <li>Made by <Link href="https://twitter.com/oihamza" target='_blank'>oihamza</Link></li>
            </l>
          </div>
        </div>
      )}
      <div className={styles.invis}></div>
      <h1>Countries - How Many Do You Know?</h1>
      <button onClick={() => setModal(true)}>
        <CgReadme className={styles.logo} size={25} />
        read me
      </button>
    </div>
  );
}
