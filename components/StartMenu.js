import styles from "/styles/components/StartMenu.module.css";
import "98.css"

export default function StartMenu(props) {
  const { startState, setStartState } = props;
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
        </div>
      </>
    );
  } else {
    return null;
  }
}
