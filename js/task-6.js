function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]"); // btn create
btnCreate.addEventListener("click", () => {
  const inputField = document.querySelector("input");
  const amount = parseInt(inputField.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  }
  inputField.value = "";
});

const destroyBoxes = () => {
  [...elementBoxes.children].forEach((child) => child.remove());
};

const btnDestroy = document.querySelector("button[data-destroy]"); // btn destroy
btnDestroy.addEventListener("click", destroyBoxes);

const elementBoxes = document.querySelector("div#boxes");
const fragmentBoxes = document.createDocumentFragment();

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
};
