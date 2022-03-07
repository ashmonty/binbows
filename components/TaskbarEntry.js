import Image from "next/image";
import classNames from "classnames";

import "98.css";
import styles from "/styles/components/TaskbarEntry.module.css";

export default function TaskbarEntry({
  info: { icon, title },
  setWindows,
  windows,
  staticIndex,
}) {
  return (
    <button className={styles.button}>
      <Image src={icon} width="16px" height="16px" alt="Window icon" />
      <span>{title}</span>
    </button>
  );
}
