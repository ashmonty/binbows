import styles from "/styles/components/StartEntry.module.css";
import "98.css";

import Image from "next/image";

export default function StartEntry({ text, icon, onClick }) {
  return (
    <div className={styles.startEntry} onClick={onClick}>
      <Image src={icon} height="32px" width="32px" alt="Start entry icon" />
      <p>{text}</p>
    </div>
  );
}
