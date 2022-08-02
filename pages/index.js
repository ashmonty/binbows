import { useSelector, useDispatch } from 'react-redux'
import {
  selectWindows,
  newWindow,
} from "../store/window/windowSlice";

import styles from "../styles/Home.module.css";
import WindowFrame from '../components/WindowFrame';

export default function Home() {
  const dispatch = useDispatch()
  const { windows } = useSelector(selectWindows);

  return (
    <div className={styles.container}>
      {windows?.map((window, index) => {
        return <WindowFrame key={index} index={index} window={window} />
      })}

      <button onClick={() => dispatch(newWindow())}></button>
    </div>
  );
}
