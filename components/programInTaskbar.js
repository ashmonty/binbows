import React from "react";

import styles from "./../styles/programInTaskbar.module.css";

export default class programInTaskbar extends React.Component {
  constructor(props) {
    super(props);
    this.setProgramState = this.setProgramState.bind(this);
  }

  setProgramState(newState) {
    this.props.setProgramState(newState);
  }

  render() {
    if (this.props.programState === "closed") {
      return null;
    } else {
      return (
        <button
          id="interwebsTaskbarBtn"
          onClick={() => this.setProgramState("toggle")}
          className={
            this.props.programState === "minimised" ||
            this.props.programState === "minimised-max"
              ? styles.button
              : styles.buttonOpen
          }
        >
          <img src={`/icons/${this.props.icon}`} className={styles.icon} />
          {this.props.name}
        </button>
      );
    }
  }
}
