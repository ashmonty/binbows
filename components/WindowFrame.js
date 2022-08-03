import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

import styles from "/styles/WindowFrame.module.css";

import React from "react";
import Image from "next/image";
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
import clsx from "clsx";

export default function WindowFrame({
  window,
  window: {
    title,
    index,
    icon,
    zIndex,
    component,
    position,
    size,
    minimized,
    maximized,
    isOnTop,
  },
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={clsx("title-bar", styles.fakeTitleBar)}
        id={`fakeTitleBar${index}`}
      >
        <div className={styles.titleBarInfoWrapper}>
          {icon && (
            <Image
              src={icon}
              alt="Window icon"
              width={14}
              height={14}
              layout="fixed"
            />
          )}
          <div className={clsx("title-bar-text", styles.titleBarText)}>
            {title}
          </div>
        </div>
      </div>
      <Rnd
        dragHandleClassName="title-bar"
        cancel=".title-bar-controls"
        size={{
          width: maximized ? "100%" : size.x,
          height: maximized ? "100%" : size.y,
        }}
        position={{
          x: maximized ? 0 : position.x,
          y: maximized ? 0 : position.y,
        }}
        minWidth={300}
        minHeight={91}
        disableDragging={maximized}
        onResizeStart={(e) => {
          if (maximized) {
            const { width, height } = document
              .querySelector(`#draggable${index}`)
              .getBoundingClientRect();
            dispatch(
              setSize({
                index,
                newProp: { x: width, y: height },
                override: true,
              })
            );
            dispatch(
              setPosition({
                index,
                newProp: { x: 0, y: 0 },
                override: true,
              })
            );
            dispatch(toggleMaximize(index));
          }
        }}
        onResizeStop={(e, direction, ref, d, pos) => {
          dispatch(
            setSize({
              index,
              newProp: { x: d.width, y: d.height },
            })
          );
          dispatch(
            setPosition({
              index,
              newProp: { x: pos.x, y: pos.y },
              override: true,
            })
          );
        }}
        onDragStart={(e, d) => {
          dispatch(
            setPosition({ index, newProp: { x: d.x, y: d.y }, override: true })
          );
        }}
        onDragStop={(e, d) => {
          dispatch(
            setPosition({ index, newProp: { x: d.x, y: d.y }, override: true })
          );
        }}
        onMouseDown={() => {
          dispatch(bringToFront(index));
        }}
        style={{
          zIndex: zIndex,
          display: minimized
            ? "none"
            : "block" /* we do this instead of not rendering because it's cheaper */,
        }}
        id={`window${index}`}
      >
        <div className={clsx("window", { maximized: maximized })}>
          <div className={`title-bar ${!isOnTop && "inactive"}`}>
            <div className={styles.titleBarInfoWrapper}>
              {icon && (
                <Image
                  src={icon}
                  alt="Window icon"
                  width={14}
                  height={14}
                  layout="fixed"
                />
              )}
              <div className={clsx("title-bar-text", styles.titleBarText)}>
                {title}
              </div>
            </div>
            <div className="title-bar-controls">
              <button
                aria-label="Minimize"
                onClick={() => {
                  animations.minimize(index, () =>
                    dispatch(toggleMinimize(index))
                  );
                }}
              />
              <button
                aria-label={!maximized ? "Maximize" : "Restore"}
                onClick={() => {
                  if (maximized) {
                    animations.restore(
                      index,
                      () => dispatch(toggleMaximize(index)),
                      window
                    );
                  } else {
                    animations.maximize(index, () =>
                      dispatch(toggleMaximize(index))
                    );
                  }
                }}
              />
              <button
                aria-label="Close"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(closeWindow(index));
                }}
              />
            </div>
          </div>

          <div className="window-body">
            {React.createElement(component, {
              closeWindow: (e) => {
                // we pass this prop to be used for popups, as an example, with an ok button to close them
                e.stopPropagation();
                dispatch(closeWindow(index));
              },
            })}
          </div>
        </div>
      </Rnd>
    </>
  );
}
