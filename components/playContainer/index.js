import { useState, useEffect } from "react";
import styles from "./PlayContainer.module.scss";
import Map from "./map";
import { VscDebugRestart } from "react-icons/vsc";
import useCountDown from "react-countdown-hook";
import Lists from "./lists";
import { CgClose } from "react-icons/cg";
import { HiOutlineDuplicate } from "react-icons/hi";

const initialTime = 720 * 1000;
const interval = 1000;

export default function PlayContainer() {
  const [modal, setModal] = useState(false);
  const [countriesDone, setCountriesDone] = useState([]);
  const [data, setData] = useState({});
  const [abbs, setAbbs] = useState({});
  const [guess, setGuess] = useState("");
  const [continents, setContinents] = useState({
    Europe: [],
    Africa: [],
    Asia: [],
    NorthAmerica: [],
    Oceania: [],
    SouthAmerica: [],
  });
  const [allContinents, setAllContinents] = useState({
    Europe: [],
    Africa: [],
    Asia: [],
    NorthAmerica: [],
    Oceania: [],
    SouthAmerica: [],
  });
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(["12", "00"]);
  const [timeLeft, actions] = useCountDown(initialTime, interval);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [duplicate, setDuplicate] = useState("");

  const format = (nb) => {
    if (nb < 10) {
      return "0" + nb.toString();
    } else {
      return nb;
    }
  };
  useEffect(() => {
    if (started) {
      if (timeLeft > 0) {
        var min = Math.floor(timeLeft / 60000);
        var sec = ((timeLeft % 60000) / 1000).toFixed(0);
        setTime([format(min), format(sec)]);
      } else {
        setStarted(false);
        setModal(true);
        setGuess("");
      }
    }
  }, [timeLeft]);
  useEffect(() => {
    if (countriesDone.length === 195) {
      setStarted(false);
      setModal(true);
    }
  }, [countriesDone]);
  const handelSubmit = (e) => {
    if (e.key === "Enter") {
      console.log(allContinents);
      console.log(abbs);
      let name = guess.toLowerCase();
      let infos = data[name] || abbs[name];
      if (infos !== undefined) {
        if (countriesDone.includes(infos.NAME.toLowerCase()) === false) {
          setCorrect(true);
          setTimeout(() => {
            setCorrect(false);
          }, 500);
          let cont = infos.CONTINENT.split(" ").join("");
          setCountriesDone([...countriesDone, infos.NAME.toLowerCase()]);
          allContinents[cont] = allContinents[cont].filter(
            (val, ind, arr) => val !== infos.NAME
          );
          continents[cont] = [...continents[cont], infos.NAME];
        } else {
          setDuplicate(name);
          setTimeout(() => {
            setDuplicate("");
          }, 1500);
        }
      } else {
        setWrong(true);
        setTimeout(() => {
          setWrong(false);
        }, 500);
      }
      setGuess("");
      console.log(countriesDone);
      console.log(continents);
    }
  };
  const resetGame = () => {
    setGuess("");
    setStarted(false);
    setCountriesDone([]);
    setContinents({
      Europe: [],
      Africa: [],
      Asia: [],
      NorthAmerica: [],
      Oceania: [],
      SouthAmerica: [],
    });
    actions.reset();
    setTime(["12", "00"]);
  };
  const startGame = () => {
    if (!started) {
      resetGame();
      setStarted(true);
      actions.start();
    }
  };
  return (
    <div className={styles.container}>
      {modal && (
        <div className={styles.modal}>
          <div
            onClick={() => {
              setModal(false);
            }}
            className={styles.clickAway}
          ></div>
          <div className={styles.box}>
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              <CgClose size={25} />
            </button>
            <h2>
              Your score: <br />
              {countriesDone.length}/195
            </h2>
          </div>
        </div>
      )}
      <div className={styles.inputContainer}>
        {duplicate !== "" && (
          <div className={styles.duplicate}>
            <HiOutlineDuplicate />
            <p>Already entered {duplicate}</p>
          </div>
        )}

        <input
          placeholder={!started ? "Click here to start" : "Enter a country"}
          type="text"
          onKeyDown={handelSubmit}
          onClick={startGame}
          disabled={modal}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className={correct ? styles.green : wrong ? styles.red : ""}
        />
        <button disabled={!started} onClick={resetGame}>
          <VscDebugRestart className={styles.logo} size={"30px"} />
          <span>Restart</span>
        </button>
      </div>
      <Map
        allContinents={allContinents}
        data={data}
        started={started}
        abbs={abbs}
        time={time}
        countriesDone={countriesDone}
      />
      <Lists
        allContinents={allContinents}
        started={started}
        countriesDone={countriesDone}
        continents={continents}
      />
    </div>
  );
}
