import styles from "./typingBox.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function TypingBox({
  inputValue,
  isFrozen,
  onChangeHandler,
}: {
  inputValue: string;
  isFrozen: boolean;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      spellCheck={false}
      value={inputValue}
      className={`${styles["typing-box"]} ${
        isFocused ? styles["focused"] : ""
      } ${isFrozen ? styles["frozen"] : ""}`}
      placeholder="Start typing here..."
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => onChangeHandler(e)}
    />
  );
}
