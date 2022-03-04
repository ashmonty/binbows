import styles from "../styles/components/Taskbar.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Taskbar() {
  const [clock, setClock] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  setInterval(
    () =>
    setClock(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      ),
    1000
  );

  return (
    <div className={styles.taskbar}>
      <div className={styles.startButton}>
        <Image
          src="/assets/images/icons/system/start.png"
          width="16"
          height="16"
          alt="Start icon"
        />
        <span className={styles.text}>Start</span>
      </div>
      <span className={styles.separator} />
      <span className={styles.handle} />
      <span className={styles.clock}>{clock}</span>
    </div>
  );
}
