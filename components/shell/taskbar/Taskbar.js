import { useSelector, useDispatch } from "react-redux";
import { selectWindows, newWindow } from "/store/window/windowSlice";
import { selectShell, toggleStart } from "/store/shell/shellSlice";

import TaskbarEntry from "./TaskbarEntry";
import Start from "./Start";
import Image from "next/image";
import styles from "/styles/Taskbar.module.css";
import { clsx } from "clsx";

import windowsLogo from "/public/assets/icons/windows.png";
import { updateClock } from "../../../store/shell/shellSlice";

export default function Taskbar() {
  const dispatch = useDispatch();
  const { windows } = useSelector(selectWindows);
  const { shell } = useSelector(selectShell);

  // If anyone has a better way to do this, please let me know
  setInterval(() => dispatch(updateClock()), 1000);

  return (
    <>
      {shell.isStartOpen && (
        <Start toggleStart={() => dispatch(toggleStart())} />
      )}
      <div className={styles.taskbar}>
        <button
          className={clsx(styles.start, {
            [styles.active]: shell.isStartOpen,
          })}
          style={{ pointerEvents: shell.isStartOpen ? "none" : "auto" }}
          onClick={() => {
            dispatch(toggleStart());
          }}
        >
          <Image
            src={windowsLogo}
            priority={true}
            width={24}
            height={24}
            layout="fixed"
            alt="Microsoft Windows logo"
          />
          <span>Start</span>
        </button>
        <div className={styles.windowTray}>
          {windows?.map((window, index) => {
            return <TaskbarEntry key={index} window={window} />;
          })}
        </div>
        <div className={styles.clock}>{shell.time}</div>
      </div>
    </>
  );
}
