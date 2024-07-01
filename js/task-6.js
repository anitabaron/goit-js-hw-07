function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]"); //create
btnCreate.addEventListener("click", () => {
  const amount = parseInt(document.querySelector("input").value);
  const inputField = document.querySelector("input");
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputField.value = "";
});

const elementBoxes = document.querySelector("div#boxes");
const badElementBoxes = document.querySelectorAll("div#boxes > div");
const fragmentBoxes = document.createDocumentFragment();

const destroyBoxes = () => {
  [...elementBoxes.children].forEach((child) => child.remove());
  // elementBoxes.replaceChildren();
};
// const destroyBoxes = () => {
//   console.log(badElementBoxes);
//   badElementBoxes.remove();
// };

// boxes.forEach(element) => console.log(box);
// ((box) => box.remove());

const btnDestroy = document.querySelector("button[data-destroy]"); //destroy
btnDestroy.addEventListener("click", destroyBoxes);

const createBoxes = (amount) => {
  console.log(amount);
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    elementBoxes.appendChild(box);
    box.style.width = `${30 + (i - 1) * 10}px`;
    box.style.height = `${30 + (i - 1) * 10}px`;
    const colorHex = getRandomHexColor();
    box.style.backgroundColor = colorHex;
  }
  destroyBoxes;
  // elementBoxes.appendChild(box);
  // boxes.prepend(fragmentBoxes);
};
// elementBoxes.insertAdjacentHTML("afterend", ...[createBoxes]);
// elementBoxes.append(...[createBoxes]);
