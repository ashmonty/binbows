import styles from "/styles/Taskbar.module.css";

export default function Taskbar() {
  const toggleStartMenu = () => {
    const startMenu = document.getElementById("startMenu");
    const startMenuBtn = document.getElementById("startMenuBtn");
    if (startMenu.style.bottom === "-400px") {
      startMenu.style.bottom = "28px";
      startMenuBtn.style.boxShadow =
        "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    } else {
      startMenu.style.bottom = "-400px";
      startMenuBtn.style.boxShadow =
        "inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf";
    }
  };

  return (
    <div>
      <div
        className={styles.startMenu}
        style={{ bottom: "-400px" }}
        id="startMenu"
      >
        <div className={styles.sidebar}>
          <p>
            <span className={styles.bold}>Binbows</span>69
          </p>
        </div>
        <div>
          <p>Nothing to see here yet</p>
        </div>
      </div>
      <div className={styles.taskbar}>
        <button
          className={styles.startButton}
          id="startMenuBtn"
          title="Click here to begin."
          onClick={toggleStartMenu}
          style={{
            boxShadow:
              "inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf",
          }}
        >
          <img src="/icons/start.png" className={styles.icon} />
          Start
        </button>
        <div className={styles.pinned}>
          <div className={styles.divider} />
          <div className={styles.dragHandle} />
          <img src="/icons/desktop.png" className={styles.icon} />
          <img src="/icons/explorer.png" className={styles.icon} />
          <img src="/icons/ie.png" className={styles.icon} />
        </div>
        <div className={styles.openPrograms}>
          <div className={styles.divider} />
          <div className={styles.dragHandle} />
          <p>Haha programs go brrrr</p>
        </div>
      </div>
    </div>
  );
}
