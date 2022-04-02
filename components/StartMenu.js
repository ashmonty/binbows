import styles from "/styles/components/StartMenu.module.css";
import "98.css";

import Toolbox from "/components/programs/Toolbox";
import StartEntry from "./StartEntry";

export default function StartMenu({ startState, setStartState, createWindow }) {
  if (startState) {
    return (
      <>
        <div className={styles.gutter} onClick={() => setStartState(false)} />
        <div className={styles.startMenu}>
          <div className={styles.sidebar}>
            <p>
              <span>Binbows</span>98
            </p>
          </div>
          <div className={styles.programList}>
            <StartEntry
              icon={
                "https://win98icons.alexmeub.com/icons/png/directory_control_panel-2.png"
              }
              text={"Toolbox"}
              onClick={() => {
                createWindow(
                  Toolbox,
                  "Toolbox",
                  "https://win98icons.alexmeub.com/icons/png/directory_control_panel-1.png"
                );
                setStartState(false);
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
