import "98.css";
import WindowFrame from "../WindowFrame";

export default function Hello(props) {
  return (
    <WindowFrame {...props}>
      <p>Hello! This is a test window. You can even close it, how cool.</p>
    </WindowFrame>
  );
}
