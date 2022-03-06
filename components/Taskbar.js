import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

import styles from "../styles/components/Taskbar.module.css";
import "98.css";

import Start from "./StartMenu";

export default function Taskbar() {
  const [clock, setClock] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  setInterval(
    () =>
      setClock(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      ),
    1000
  );

  const [startState, setStartState] = useState(false);

  return (
    <>
      <div className={styles.taskbar}>
        <button
          className={classNames({
            [styles.startButton]: true,
            [styles.active]: startState,
          })}
          onClick={() => setStartState(!startState)}
        >
          <Image
            src="/assets/images/icons/system/start.png"
            width="16"
            height="16"
            alt="Start icon"
          />
          <span className={styles.text}>Start</span>
        </button>
        <span className={styles.separator} />
        <span className={styles.handle} />
        <div className={styles.taskManager} id="task-manager"></div>
        <span className={styles.clock}>{clock}</span>
      </div>

      <Start startState={startState} setStartState={setStartState} />
    </>
  );
}
