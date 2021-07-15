export default function toggleShowWindow(elementID) {
  const windowStyle = document.getElementById(elementID).style;
  const taskbarBtnStyle = document.getElementById(
    `${elementID}TaskbarBtn`
  ).style;
  taskbarBtnStyle.display = "flex";
  if (windowStyle.display === "none") {
    windowStyle.display = "block";
    taskbarBtnStyle.boxShadow =
      "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
  } else {
    windowStyle.display = "none";
    taskbarBtnStyle.boxShadow =
      "inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf";
  }
}
