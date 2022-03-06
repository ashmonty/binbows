import "98.css";
import WindowFrame from "../WindowFrame";

export default function Hello({
  title,
  icon,
  index,
  setAllWindows,
  allWindows,
  fakeIndex,
}) {
  return (
    <WindowFrame
      allWindows={allWindows}
      setAllWindows={setAllWindows}
      title={title}
      index={index}
      icon={icon}
      style={{
        position: "absolute",
        top: (index + 1) * 24,
        left: (index + 1) * 24,
      }}
    >
      <p>
        Hello! This is a test window. You can even close it, how cool.
      </p>
    </WindowFrame>
  );
}
