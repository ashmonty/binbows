import styles from "/styles/programs/interwebs.module.css";
import * as utils from "../utils";

import { useEffect } from "react";

export default function InterwebsNavigator(props) {
  useEffect(() => {
    utils.makeWindowDraggable(document.getElementById("interwebs"));
  });

  const minimizeInterwebs = () => {
    utils.toggleShowWindow("interwebs");
  };

  const closeInterwebs = () => {
    document.getElementById("interwebs").style.display = "none";
    document.getElementById("interwebsTaskbarBtn").style.display = "none";
    // This resets the "browser" to the homepage
    const iframe = document.getElementById("interwebsIframe");
    iframe.src = iframe.src;
  };

  const maximizeInterwebs = () => {
    const interwebs = document.getElementById("interwebs");
    if (interwebs.style.width === "100vw") {
      interwebs.style.width = "1000px";
      interwebs.style.height = "700px";
      interwebs.style.top = "100px";
      interwebs.style.left = "150px";
    } else {
      interwebs.style.width = "100vw";
      interwebs.style.height = "calc(100vh - 28px)";
      interwebs.style.top = "-2px";
      interwebs.style.left = "-2px";
    }
  };

  return (
    <div
      class="window"
      id="interwebs"
      style={{
        position: "absolute",
        top: "100px",
        left: "150px",
        width: "fit-content",
        display: "none",
        width: "1000px",
        height: "700px",
        minWidth: "500px",
        minHeight: "500px",
        resize: "both",
        overflow: "auto",
      }}
    >
      <div class="title-bar" id="interwebsHeader">
        <div class="title-bar-text">
          Interwebs Navigator - NOTE TO SELF: fix janky drag and resize
        </div>
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
      <div
        class="window-body"
        style={{ width: "calc(100% - 4px)", height: "calc(100% - 24px)" }}
      >
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
