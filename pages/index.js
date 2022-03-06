import React, { useState } from "react";

import Taskbar from "../components/Taskbar";
import Hello from "../components/programs/Hello";

import styles from "../styles/Screen.module.css";

export default function Screen() {
  const [allWindows, setAllWindows] = useState([]);


  function newWindow(componentName, title, icon) {
    setAllWindows(
      allWindows.concat({
        componentName,
        index: allWindows.length,
        title,
        state: "open" /* open / maximized / minimized */,
        icon,
      })
    );
  }

  return (
    <div className={styles.screen}>
      {allWindows.map((window, i) => (
        <React.Fragment key={i}>
          {React.createElement(window.componentName, {
            key: window.index,
            index: window.index,
            title: window.title,
            icon: window.icon,
            setAllWindows: setAllWindows,
            allWindows: allWindows,
          })}
        </React.Fragment>
      ))}

      <button
        onClick={() => newWindow(Hello, "Hello", "https://win98icons.alexmeub.com/icons/png/help_book_cool-1.png")}
        style={{ position: "absolute", top: "12px", right: "12px" }}
      >
        Add a new component
      </button>

      <Taskbar />
    </div>
  );
}
