import styles from "/styles/TaskbarEntry.module.css";
import Image from "next/image";
import { clsx } from "clsx";

import { useDispatch } from "react-redux";
import {
  selectWindows,
  newWindow,
  closeWindow,
  setTitle,
  setIcon,
  setSize,

  setPosition,
  toggleMinimize,
  toggleMaximize,
  bringToFront,
} from "/store/window/windowSlice";

import { animations } from "/util/animations";

export default function TaskbarEntry({
  window: { title, index, icon, minimized, maximized, isOnTop, position, size },
}) {
  const dispatch = useDispatch();
  return (
    <button
      id={`taskbarEntry${index}`}
      className={clsx(styles.entry, {
        [styles.active]: isOnTop && !minimized,
      })}
      onClick={async () => {
        if (!isOnTop && !minimized) {
          dispatch(bringToFront(index));
        } else {
          if (minimized) {
            animations.unminimize(index, () =>
            dispatch(toggleMinimize(index))
          );
          } else {
            animations.minimize(index, () =>
            dispatch(toggleMinimize(index))
          );
          }
        }
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt="Window icon"
          layout="fixed"
          width={14}
          height={14}
        />
      )}
      <span>{title}</span>
    </button>
  );
}
