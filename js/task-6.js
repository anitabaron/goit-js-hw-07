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

btnCreate.addEventListener("click", () => {
  let keypressCounter = 0;
  if ("click") {
    keypressCounter += 1;
    console.log(keypressCounter);
  }
  return keypressCounter;
});

const btnDestroy = document.querySelector("button[data-destroy]"); //destroy
btnDestroy.addEventListener("click", destroyBoxes);

const boxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  console.log(amount);
  for (let i = 1; i <= amount; i++) {
    const size = "30px";
    const box = document.createElement("div");
    box.style.width = size;
    box.style.height = size;
    const colorHex = getRandomHexColor();
    box.style.backgroundColor = colorHex;
    document.body.after(box);
  }
}

function destroyBoxes() {}
