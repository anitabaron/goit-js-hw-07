function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("#controls > button:nth-child(2)"); //create
const btnCreate2 = document.querySelector('button[data-create]'); //create
const btnDestroy = document.querySelector("#controls > button:nth-child(3)"); //destroy
const btnCreate2 = document.querySelector('button[data-destroy]'); //destroy

createBoxes(amount){
  if (amount>=1 && amount <=100) {
  div#boxes
  }
  const box = document.createElement("div#boxes")
  document.body.append(box);
// input.reset();
}


// destroyBoxes(event) {

// }
