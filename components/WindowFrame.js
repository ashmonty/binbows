import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";
import React from "react";
import {
  selectWindows,
  newWindow,
  closeWindow,
  setTitle,
  setIcon,
  sizeX,
  sizeY,
  setPosition,
  toggleMinimize,
  toggleMaximize,
  bringToFront,
} from "/store/window/windowSlice";

export default function WindowFrame({
  window: { title, index, zIndex, component, position },
}) {
  const dispatch = useDispatch();

  const handleOnStop = () => {
    const xTranslateRegex = /(?<=translate\()[\d-]*(?!, )/;
    const yTranslateRegex = /[\d-]*(?=px\))/;

    const transformAttr = document.querySelector(`#draggable${index}`).style
      .transform;
    const transformX = parseInt(xTranslateRegex.exec(transformAttr)[0]);
    const transformY = parseInt(yTranslateRegex.exec(transformAttr)[0]);

    dispatch(setPosition({ index, newProp: { x: transformX, y: transformY } }));
    document.querySelector(`#draggable${index}`).style.transform = null;
  };
  return (
    <Draggable
      handle=".title-bar"
      cancel=".title-bar-controls"
      position={{ x: 0, y: 0 }}
      onStop={handleOnStop}
      onMouseDown={() => {
        dispatch(bringToFront(index));
      }}
    >
      <div
        style={{
          zIndex: zIndex,
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="window"
        id={`draggable${index}`}
      >
        <div className="title-bar">
          <div className="title-bar-text">
            {title} index: {index}
          </div>
          <div className="title-bar-controls">
            <button
              aria-label="Minimize"
              onClick={(e) => {
                e.stopPropagation();

                dispatch(toggleMinimize(index));
              }}
            />
            <button
              aria-label="Maximize"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleMaximize(index));
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

        <div className="window-body">{React.createElement(component)}</div>
      </div>
    </Draggable>
  );
}
