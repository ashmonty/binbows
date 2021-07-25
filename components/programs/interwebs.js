import styles from "/styles/programs/interwebs.module.css";

import React from "react";

export default class InterwebsNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.handleState = this.handleState.bind(this);
  }

  handleState(newState) {
    this.props.setState(newState);
  }

  render() {
    if (this.props.state !== "closed") {
      const toggleMaximise = () => {
        if (this.props.state === "maximised") {
          this.handleState("open");
        } else {
          this.handleState("maximised");
        }
      };

      return (
        <div class={`window ${this.props.state}`} id="interwebs">
          <div class="title-bar" id="interwebsHeader">
            <div
              class="title-bar-text"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src="/icons/ie.png" className={styles.titleBarIcon} />
              Interwebs Navigator - NOTE TO SELF: re-add drag and fix janky
              resize - [state: {this.props.state}]
            </div>
            <div class="title-bar-controls">
              <button
                aria-label="Minimize"
                className={styles.controlButton}
                onClick={() => this.handleState("minimised")}
              />
              <button
                aria-label={
                  this.props.state === "open" ? "Maximize" : "Restore"
                }
                className={styles.controlButton}
                onClick={toggleMaximise}
              />
              <button
                aria-label="Close"
                className={styles.controlButton}
                onClick={() => this.handleState("closed")}
              />
            </div>
          </div>
          <div
            class="window-body"
            style={{ width: "calc(100% - 4px)", height: "calc(100% - 28px)" }}
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
    } else {
      return null;
    }
  }
}
