import React, { useState } from "react";

import Taskbar from "/components/Taskbar";
import Hello from "/components/programs/Hello";
import WindowFrame from "/components/WindowFrame";

import styles from "/styles/Screen.module.css";

export default function Screen() {
  const [windows, setWindows] = useState([]);

  function newWindow(componentName, title, icon) {
    setWindows(
      windows.concat({
        componentName,
        index: windows.length,
        title,
        state: "open" /* open / maximized / minimized */,
        icon,
      })
    );
  }

  return (
    <div className={styles.screen}>
      {windows.map((window, i) => (
        <React.Fragment key={i}>
          {React.createElement(window.componentName, {
            key: window.index,
            index: window.index,
            title: window.title,
            icon: window.icon,
            setWindows: setWindows,
            windows,
          })}
        </React.Fragment>
      ))}

      <WindowFrame
        title="Toolbox"
        icon="https://win98icons.alexmeub.com/icons/png/tools_gear-1.png"
        style={{ position: "absolute", top: "12px", right: "12px" }}
      >
        <p>Misc test stuff.</p>
        <button
          onClick={() =>
            newWindow(
              Hello,
              "Hello",
              "https://win98icons.alexmeub.com/icons/png/help_book_cool-1.png"
            )
          }
        >
          Create new Hello window
        </button>
      </WindowFrame>

      <Taskbar setWindows={setWindows} windows={windows} />
    </div>
  );
}
