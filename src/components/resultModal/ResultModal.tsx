import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./resultModal.module.css";

export function ResultModal() {
  const { accuracy, hits, misses } = useSelector(
    (state: RootState) => state.scoreSlice
  );
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["categories-container"]}>
        <div className={styles["category"]}>
          <span className={styles["title"]}>Accuracy</span>
          <span className={styles["score"]}>{Math.round(accuracy)}%</span>
        </div>
        <div className={styles["category"]}>
          <span className={styles["title"]}>Hits</span>
          <span className={styles["score"]}>{hits}</span>
        </div>
        <div className={styles["category"]}>
          <span className={styles["title"]}>Misses</span>
          <span className={styles["score"]}>{misses}</span>
        </div>
      </div>
      <button
        className={styles["restart-btn"]}
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </div>
  );
}
