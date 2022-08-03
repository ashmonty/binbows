import { useRef } from "react";
import styles from "/styles/Start.module.css";

export default function Start({ toggleStart }) {
  const wrapperRef = useRef(null);
  onClickOutside(wrapperRef);

  // https://stackoverflow.com/a/42234988
  function onClickOutside(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleStart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  return (
    <div className={styles.startMenuWrapper} ref={wrapperRef}>
      <div className={styles.startMenu}>
        <div className={styles.sidebar}>
          <p>
            <span>Billows</span>90Gates
          </p>
        </div>
        <div className={styles.programList}></div>
      </div>
    </div>
  );
}
