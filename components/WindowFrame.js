import Image from "next/image";
import classNames from "classnames";

import "98.css";
import styles from "/styles/components/WindowFrame.module.css";

export default function WindowFrame({
  info: { icon, title },
  windowManagerStates: { maximized, minimized },
  setWindows,
  staticIndex,
  windows,
  children,
  style,
}) {
  function closeWindow() {
    const updatedWindows = windows?.filter(
      (window) => window.staticIndex !== staticIndex
    );
    setWindows(updatedWindows);
  }

  return (
    <div
      className={classNames({
        window: true,
        [styles.window]: true,
        maximized: maximized,
      })}
      style={
        style || {
          position: "absolute",
          top: (staticIndex + 1) * 24,
          left: (staticIndex + 1) * 24,
        }
      }
    >
      <div className="title-bar">
        {icon ? (
          <Image src={icon} width="16px" height="16px" alt="Window icon" />
        ) : null}
        <div className="title-bar-text">
          {title} {maximized.toString()}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label={maximized ? "Restore" : "Maximize"}></button>
          <button aria-label="Close" onClick={closeWindow}></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
