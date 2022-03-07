import "98.css";
import WindowFrame from "../WindowFrame";
import Hello from "/components/programs/Hello";

export default function Toolbox(props) {
  return (
    <WindowFrame {...props}>
      <p>Misc test stuff.</p>
      <button
        onClick={() =>
          props.createWindow(
            Hello,
            "Hello",
            "https://win98icons.alexmeub.com/icons/png/help_book_cool-1.png"
          )
        }
      >
        Create new Hello window
      </button>
    </WindowFrame>
  );
}
