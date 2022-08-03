const translateXRegex = /(?<=translate\()[\d-]*/;
const translateYRegex = /(?<=, )[\d-]*/;

async function minimize(index, toggleMinimize) {
  const windowRect = document
    .querySelector(`#window${index}`)
    .getBoundingClientRect();
  const taskbarEntryRect = document
    .querySelector(`#taskbarEntry${index}`)
    .getBoundingClientRect();
  const fakeTitleBar = document.querySelector(`#fakeTitleBar${index}`);

  fakeTitleBar.style.display = "block";

  fakeTitleBar.style.top = `${windowRect.top + 3}px`;
  fakeTitleBar.style.left = `${windowRect.left + 3}px`;
  fakeTitleBar.style.width = `${windowRect.width - 6}px`;

  await new Promise((resolve) => setTimeout(resolve, 10));

  fakeTitleBar.style.top = `${taskbarEntryRect.top + 3}px`;
  fakeTitleBar.style.left = `${taskbarEntryRect.left + 3}px`;
  fakeTitleBar.style.width = `${taskbarEntryRect.width - 4}px`;
  fakeTitleBar.style.height = `${taskbarEntryRect.height - 4}px`;

  await new Promise((resolve) => setTimeout(resolve, 300));
  toggleMinimize();
  fakeTitleBar.style.display = "none";
}

async function unminimize(index, toggleMinimize) {
  const windowRect = document
    .querySelector(`#window${index}`)
    .getBoundingClientRect();
  const windowStyle = document.querySelector(`#window${index}`).style;
  const taskbarEntryRect = document
    .querySelector(`#taskbarEntry${index}`)
    .getBoundingClientRect();
  const fakeTitleBar = document.querySelector(`#fakeTitleBar${index}`);

  fakeTitleBar.style.display = "block";

  fakeTitleBar.style.top = `${taskbarEntryRect.top + 3}px`;
  fakeTitleBar.style.left = `${taskbarEntryRect.left + 3}px`;
  fakeTitleBar.style.width = `${taskbarEntryRect.width - 4}px`;
  fakeTitleBar.style.height = `${taskbarEntryRect.height - 4}px`;

  const xPosOffset = parseInt(translateXRegex.exec(windowStyle.transform)[0]);
  const yPosOffset = parseInt(translateYRegex.exec(windowStyle.transform)[0]);

  await new Promise((resolve) => setTimeout(resolve, 10));

  fakeTitleBar.style.top = `${windowRect.top + yPosOffset + 3}px`;
  fakeTitleBar.style.left = `${windowRect.left + xPosOffset + 3}px`;
  fakeTitleBar.style.width = windowStyle.width;
  fakeTitleBar.style.height = "20px";

  await new Promise((resolve) => setTimeout(resolve, 300));

  toggleMinimize();
  fakeTitleBar.style.display = "none";
}

async function maximize(index, toggleMaximize) {
  const windowRect = document
    .querySelector(`#window${index}`)
    .getBoundingClientRect();
  const fakeTitleBar = document.querySelector(`#fakeTitleBar${index}`);

  fakeTitleBar.style.display = "block";

  fakeTitleBar.style.top = `${windowRect.top + 3}px`;
  fakeTitleBar.style.left = `${windowRect.left + 3}px`;
  fakeTitleBar.style.width = `${windowRect.width - 6}px`;

  await new Promise((resolve) => setTimeout(resolve, 10));

  fakeTitleBar.style.top = "0";
  fakeTitleBar.style.left = "0";
  fakeTitleBar.style.width = "100%";
  fakeTitleBar.style.height = "20px";

  await new Promise((resolve) => setTimeout(resolve, 300));

  toggleMaximize();
  fakeTitleBar.style.display = "none";
}

async function restore(index, toggleMaximize, window) {
  const fakeTitleBar = document.querySelector(`#fakeTitleBar${index}`);

  fakeTitleBar.style.display = "block";

  fakeTitleBar.style.top = "0";
  fakeTitleBar.style.left = "0";
  fakeTitleBar.style.width = "100%";
  fakeTitleBar.style.height = "20px";

  await new Promise((resolve) => setTimeout(resolve, 10));

  fakeTitleBar.style.top = `${window.position.y + 3}px`;
  fakeTitleBar.style.left = `${window.position.x + 3}px`;
  fakeTitleBar.style.width = `${window.size.x}px`;
  fakeTitleBar.style.height = "20px";

  await new Promise((resolve) => setTimeout(resolve, 300));

  toggleMaximize();
  fakeTitleBar.style.display = "none";
}

export const animations = { minimize, unminimize, maximize, restore };
