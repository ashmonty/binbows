import Image from "next/image";
import classNames from "classnames";

import "98.css";
import styles from "/styles/components/WindowFrame.module.css";

export default function WindowFrame({
  icon,
  title,
  setWindows,
  index,
  windows,
  children,
  style
}) {
  function closeWindow(windows, setWindows) {
    const updatedWindows = windows?.filter(
      (window) => window.index !== index
    );
    setWindows(updatedWindows);
  }

  return (
    <div
      className={classNames({ window: true, [styles.window]: true })}
      style={style || {
        position: "absolute",
        top: (index + 1) * 24,
        left: (index + 1) * 24,
      }}
    >
      <div className="title-bar">
        {icon ? (
          <Image src={icon} width="16px" height="16px" alt="Window icon" />
        ) : null}
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button
            aria-label="Close"
            onClick={() => closeWindow(windows, setWindows)}
          ></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
