import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, KeysToPress, ResultModal, TypingBox } from "./components";
import { generateKeys } from "./features/keySlice";
import { hit, miss, updateAccuracy } from "./features/scoreSlice";
import { RootState } from "./store";
import styles from "./styles/app.module.css";

const allowedKeys = ["a", "s", "d", "f", "j", "k", "l", ";"];

enum GameStatus {
  ENDED = "ended",
  NOT_STARTED = "not_started",
  STARTED = "started",
}

function App() {
  const dispatch = useDispatch();
  const { keySlice: keys, scoreSlice } = useSelector(
    (state: RootState) => state
  );
  const [input, setInput] = useState<string>("");
  const [freeze, setFreeze] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<GameStatus>(
    GameStatus.NOT_STARTED
  );

  function newRound() {
    dispatch(generateKeys({ arr: allowedKeys, length: 8 }));
    setInput("");
  }

  useEffect(() => {
    newRound();
  }, []);

  useEffect(() => {
    if (gameStatus === GameStatus.ENDED) {
      dispatch(updateAccuracy());
      console.log(scoreSlice);
    }
  }, [gameStatus]);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setGameStatus(GameStatus.STARTED);
    const currentIndex = input.length;
    const keyPressed = e.target.value[currentIndex];
    if (
      keyPressed.toLocaleLowerCase() === keys[currentIndex].toLocaleLowerCase()
    ) {
      setFreeze(false);
      setInput(e.target.value);
      dispatch(hit());
      if (currentIndex === keys.length - 1) {
        newRound();
      }
    } else {
      dispatch(miss());
      setFreeze(true);
    }
  }

  return (
    <>
      {gameStatus === GameStatus.ENDED && (
        <div className={styles["backdrop"]}>
          <ResultModal />
        </div>
      )}
      <Header
        started={gameStatus === GameStatus.STARTED}
        endGame={() => setGameStatus(GameStatus.ENDED)}
      />
      <main className={styles["main"]}>
        <KeysToPress at={input.length} keys={keys} isFrozen={freeze} />
        <TypingBox
          inputValue={input}
          onChangeHandler={handleInput}
          isFrozen={freeze}
        />
      </main>
    </>
  );
}

export default App;
