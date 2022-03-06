import Image from "next/image";
import classNames from "classnames";

import "98.css";
import styles from "../styles/components/WindowFrame.module.css";

export default function WindowFrame({
  icon,
  title,
  setAllWindows,
  index,
  allWindows,
  style,
  children,
}) {
  function closeWindow(allWindows, setAllWindows) {
    const updatedWindows = allWindows?.filter(
      (window) => window.index !== index
    );
    setAllWindows(updatedWindows);
  }

  return (
    <div
      className={classNames({ window: true, [styles.window]: true })}
      style={style}
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
            onClick={() => closeWindow(allWindows, setAllWindows)}
          ></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
