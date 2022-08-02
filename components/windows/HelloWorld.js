export default function HelloWorld({ closeWindow }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Hello world!</p>
      <button onClick={closeWindow}>Ok</button>
    </div>
  );
}
