import React from "react";

import styles from "/styles/StartMenu.module.css";

export default class StartMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.state === "open") {
      return (
        <div className={styles.startMenu} id="startMenu">
          <div className={styles.sidebar}>
            <p>
              <span style={{fontWeight: "bold"}}>Binbows</span>69
            </p>
          </div>
          <div>
            <p>Nothing to see here yet...</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
