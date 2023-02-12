import styles from "./keysToPress.module.css";

export function KeysToPress({
  at,
  isFrozen,
  keys,
}: {
  at: number;
  isFrozen: boolean;
  keys: string[];
}) {
  return (
    <div className={styles["keys-container"]}>
      {keys.map((key, index) => (
        <span
          key={index}
          className={`${styles["key"]} ${
            at === index ? styles["active-key"] : ""
          } ${isFrozen && at === index ? styles["frozen-key"] : ""}`}
        >
          {key}
        </span>
      ))}
    </div>
  );
}
