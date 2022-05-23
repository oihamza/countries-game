import { useEffect } from "react";
import styles from "./PlayContainer.module.scss";

export default function Lists({
  continents,
  allContinents,
  started,
  countriesDone,
}) {
  return (
    <div className={styles.listsContainer}>
      <h2>Countries guessed correctly:</h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.title}>
            <p>Africa</p>
          </div>
          <div className={styles.list}>
            {continents.Africa.map((item, index) => (
              <div key={index} className={styles.item}>
                <p>{item}</p>
              </div>
            ))}
            {allContinents.Africa.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${styles.missed} ${
                  started || countriesDone.length === 0 ? styles.invis : ""
                }`}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <p>Asia</p>
          </div>
          <div className={styles.list}>
            {continents.Asia.map((item, index) => (
              <div key={index} className={styles.item}>
                <p>{item}</p>
              </div>
            ))}
            {allContinents.Asia.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${styles.missed} ${
                  started || countriesDone.length === 0 ? styles.invis : ""
                }`}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <p>Europe</p>
          </div>
          <div className={styles.list}>
            {continents.Europe.map((item, index) => (
              <div key={index} className={styles.item}>
                <p>{item}</p>
              </div>
            ))}
            {allContinents.Europe.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${styles.missed} ${
                  started || countriesDone.length === 0 ? styles.invis : ""
                }`}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <p>North America</p>
          </div>
          <div className={styles.list}>
            {continents.NorthAmerica.map((item, index) => (
              <div key={index} className={styles.item}>
                <p>{item}</p>
              </div>
            ))}
            {allContinents.NorthAmerica.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${styles.missed} ${
                  started || countriesDone.length === 0 ? styles.invis : ""
                }`}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <p>South America</p>
          </div>
          <div className={styles.list}>
            {continents.SouthAmerica.map((item, index) => (
              <div key={index} className={styles.item}>
                <p>{item}</p>
              </div>
            ))}
            {allContinents.SouthAmerica.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${styles.missed} ${
                  started || countriesDone.length === 0 ? styles.invis : ""
                }`}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <p>Oceania</p>
          </div>
          <div className={styles.list}>
            {continents.Oceania.map((item, index) => (
              <div key={index} className={styles.item}>
                <p>{item}</p>
              </div>
            ))}
            {allContinents.Oceania.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${styles.missed} ${
                  started || countriesDone.length === 0 ? styles.invis : ""
                }`}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
