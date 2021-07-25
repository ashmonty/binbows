import React from "react";

import ProgramInTaskbar from "./programInTaskbar";

import styles from "/styles/Taskbar.module.css";
import StartMenu from "./startMenu";

export default class Taskbar extends React.Component {
  constructor(props) {
    super(props);
    this.setInterwebsState = this.setInterwebsState.bind(this);
    this.setStartState = this.setStartState.bind(this);
  }

  setInterwebsState(newState) {
    this.props.setInterwebsState(newState);
  }

  setStartState() {
    this.props.setStartState();
  }

  render() {
    const interwebsState = this.props.interwebsState;

    return (
      <div>
        <StartMenu state={this.props.startState} />

        <div className={styles.taskbar}>
          <button
            className={styles.startButton}
            id="startMenuBtn"
            title="Click here to begin."
            onClick={this.setStartState}
            style={
              this.props.startState === "closed"
                ? {
                    boxShadow:
                      "inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf",
                  }
                : {
                    boxShadow:
                      "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080",
                  }
            }
          >
            <img src="/icons/start.png" className={styles.icon} />
            Start
          </button>
          <div className={styles.pinned}>
            <div className={styles.divider} />
            <div className={styles.dragHandle} />
            <img src="/icons/explorer.png" className={styles.icon} />
            <img src="/icons/calculator.png" className={styles.icon} />

            <div
              title="Interwebs Navigator"
              onClick={() => this.setInterwebsState("open")}
              className={styles.clickable}
            >
              <img src="/icons/ie.png" className={styles.icon} />
            </div>
          </div>
          <div className={styles.openPrograms}>
            <div className={styles.divider} />
            <div className={styles.dragHandle} />
            <ProgramInTaskbar
              setProgramState={this.setInterwebsState}
              programState={interwebsState}
              icon={"ie"}
              name={"Interwebs Navigator"}
            />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.divider} />
            <div className={styles.clockSection}>
              <p id="time">3:14</p> {/* Just a random placeholder time */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const updateTimeElement = () => {
      const date = new Date();
      const currentTime = `${date.getHours()}:${date.getMinutes()}`;
      const timeElement = document.getElementById("time");
      timeElement.innerHTML = currentTime;
    };

    updateTimeElement();
    setInterval(updateTimeElement, 1000);
  }
}
