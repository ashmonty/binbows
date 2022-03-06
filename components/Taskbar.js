import Image from "next/image";
import React, { useState } from "react";
import classNames from "classnames";

import styles from "/styles/components/Taskbar.module.css";
import "98.css";

import Start from "./StartMenu";
import TaskbarEntry from "./TaskbarEntry";

export default function Taskbar({ windows, setWindows }) {
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
        <div className={styles.taskManager} id="task-manager">
          {windows.map((window, i) => (
            <React.Fragment key={i}>
              {React.createElement(TaskbarEntry, {
                key: window.index,
                index: window.index,
                title: window.title,
                icon: window.icon,
                setWindows: setWindows,
                windows,
              })}
            </React.Fragment>
          ))}
        </div>
        <span className={styles.clock}>{clock}</span>
      </div>

      <Start startState={startState} setStartState={setStartState} />
    </>
  );
}
