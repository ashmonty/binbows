import { useSelector, useDispatch } from "react-redux";
import { selectWindows, newWindow } from "../store/window/windowSlice";

import styles from "../styles/Home.module.css";
import WindowFrame from "../components/WindowFrame";
import Taskbar from "../components/shell/taskbar/Taskbar";

export default function Home() {
  const dispatch = useDispatch();
  const { windows } = useSelector(selectWindows);

  return (
    <div className={styles.monitor}>
      <div className={styles.windowLand}>
        {windows?.map((window, index) => {
          return <WindowFrame key={index} window={window} />;
        })}

        <button onClick={() => dispatch(newWindow({ icon: "/assets/icons/world.png", title: "testtitle this is very long owo uwu overflow weee" }))}>HelloWorld</button>
      </div>
      <Taskbar />
    </div>
  );
}
