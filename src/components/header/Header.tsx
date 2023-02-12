import styles from "./header.module.css";
import { useEffect, useRef, useState } from "react";

export function Header({
  started,
  endGame,
}: {
  started: boolean;
  endGame: () => void;
}) {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(300);
  const intervalId = useRef<NodeJS.Timer | null>(null);

  function start() {
    intervalId.current = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);
  }

  useEffect(() => {
    if (started) {
      if (intervalId.current === null) {
        start();
      }
    }
  }, [started]);

  useEffect(() => {
    if (secondsRemaining === 0 && intervalId.current) {
      endGame();
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, [secondsRemaining, endGame]);

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <header className={styles["header"]}>
      <span className={styles["logo"]}>Touch Type</span>
      <div
        className={`${styles["timer"]} ${
          secondsRemaining <= 30 ? styles["alert"] : ""
        }`}
      >
        <span>
          {(() => {
            const minutes = Math.floor(secondsRemaining / 60);
            if (String(minutes).length === 2) {
              return minutes;
            }
            return `0${minutes}`;
          })()}
        </span>
        :
        <span>
          {(() => {
            const seconds = secondsRemaining % 60;
            if (String(seconds).length === 2) {
              return seconds;
            }
            return `0${seconds}`;
          })()}
        </span>
      </div>
    </header>
  );
}
