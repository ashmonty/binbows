import React, { useState } from "react";

import Taskbar from "/components/Taskbar";

import styles from "/styles/Screen.module.css";

export default function Screen() {
  const [windows, setWindows] = useState([]);

  function createWindow(componentName, title, icon) {
    const newWindow = {
      componentName,
      staticIndex: (windows?.[windows?.length - 1]?.staticIndex || 0) + 1,
      info: {
        title,
        icon,
      },
      windowManagerStates: {
        maximized: false /* Is the window maximized or is it draggable? (bool) */,
        minimized: false /* Is the window minimized to the taskbar? (bool) */,
      },
    };
    setWindows(windows.concat(newWindow));
  }

  return (
    <div className={styles.screen}>
      {windows.map((window, i) => (
        <React.Fragment key={i}>
          {React.createElement(window.componentName, {
            key: window.staticIndex,
            staticIndex: window.staticIndex,
            info: window.info,
            windowManagerStates: window.windowManagerStates,
            setWindows: setWindows,
            createWindow,
            windows,
          })}
        </React.Fragment>
      ))}

      <Taskbar
        setWindows={setWindows}
        windows={windows}
        createWindow={createWindow}
      />
    </div>
  );
}
