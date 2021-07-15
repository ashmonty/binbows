import styles from "/styles/programs/interwebs.module.css";
import toggleShowWindow from "../utils";

export default function InterwebsNavigator() {
  const minimizeInterwebs = () => {
    toggleShowWindow("interwebs");
  };

  const closeInterwebs = () => {
    document.getElementById("interwebs").style.display = "none";
    document.getElementById("interwebsTaskbarBtn").style.display = "none";
    // This resets the "browser" to the homepage
    const iframe = document.getElementById("interwebsIframe");
    iframe.src = iframe.src;
  };

  const maximizeInterwebs = () => {
    if (document.getElementById("interwebs").style.position === "absolute") {
      document.getElementById("interwebs").style.position = "static";
      document.getElementById("interwebsIframe").style.width = "996px";
      document.getElementById("interwebsIframe").style.height = "700px";
    } else {
      document.getElementById("interwebs").style.position = "absolute";
      document.getElementById("interwebsIframe").style.width =
        "calc(100vw - 10px)";
      document.getElementById("interwebsIframe").style.height =
        "calc(100vh - 60px)";
    }
  };

  return (
    <div
      class="window"
      id="interwebs"
      style={{
        position: "static",
        top: "0px",
        left: "0px",
        width: "fit-content",
        display: "none",
      }}
    >
      <div class="title-bar">
        <div class="title-bar-text">Interwebs Navigator</div>
        <div class="title-bar-controls">
          <button
            aria-label="Minimize"
            className={styles.controlButton}
            onClick={minimizeInterwebs}
          />
          <button
            aria-label="Maximize"
            className={styles.controlButton}
            onClick={maximizeInterwebs}
          />
          <button
            aria-label="Close"
            className={styles.controlButton}
            onClick={closeInterwebs}
          />
        </div>
      </div>
      <div class="window-body">
        <iframe
          className={styles.iframe}
          id="interwebsIframe"
          src="https://theoldnet.com/browser/"
          title="Interwebs Navigator"
        />
      </div>
    </div>
  );
}
