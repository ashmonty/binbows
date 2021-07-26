import Head from "next/head";
import Link from "next/link";
import "98.css";

import Favicon from "../components/head";
import Taskbar from "../components/taskbar";

import styles from "../styles/Home.module.css";

import InterwebsNavigator from "../components/programs/interwebs";

import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartState = this.handleStartState.bind(this);
    this.handleInterwebsState = this.handleInterwebsState.bind(this);

    this.state = {
      start: "closed", // Either "open", or "closed"
      interwebs: "closed", // Either "open", "closed", "minimised", "minimised-max", "maximised", or "toggle"
    };
  }

  handleStartState() {
    if (this.state.start === "closed") {
      this.setState({ start: "open" });
    } else {
      this.setState({ start: "closed" });
    }
  }

  handleInterwebsState(newState) {
    //toggles between open/maximised and minimised/minimised-max
    switch (newState) {
      case "toggle":
        {
          switch (this.state.interwebs) {
            case "minimised":
              newState = "open";
              break;
            case "open":
              newState = "minimised";
              break;
            case "minimised-max":
              newState = "maximised";
              break;
            case "maximised":
              newState = "minimised-max";
              break;
          }
        }
        break;
      case "minimised":
        {
          if (this.state.interwebs === "open") {
            newState = "minimised";
          } else {
            newState = "minimised-max";
          }
        }
        break;
    }

    this.setState({ interwebs: newState });
  }

  render() {
    const startState = this.state.start;
    const interwebsState = this.state.interwebs;
    return (
      <div id="home">
        <Head>
          <Favicon />
          <title>Michaelsoft Binbows</title>
        </Head>
        <section>
          <div className={styles.WIPtext}>
            <p>
              STATES:
              <br />
              <br />
              start: {startState}
              <br />
              <br />
              interwebs: {interwebsState}
              <br />
              <br />
            </p>
            <p>
              In case you couldn't tell, this is still very much a WIP (work in
              progress)
            </p>
            <p>
              If you wanna see something cool, click on the Netscape Navigator
              icon in the taskbar!
            </p>
            <p>
              Also, <Link href="/qwertyuiop">here</Link>'s a 404 page if you'd
              like.
            </p>
          </div>

          <InterwebsNavigator
            className="interwebs"
            state={interwebsState}
            setState={this.handleInterwebsState}
          />
        </section>
        <Taskbar
          interwebsState={interwebsState}
          setInterwebsState={this.handleInterwebsState}
          startState={startState}
          setStartState={this.handleStartState}
        />
      </div>
    );
  }
}
