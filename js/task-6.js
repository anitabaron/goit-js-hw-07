function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("#controls > button:nth-child(2)"); //create
btnCreate.addEventListener
// const btnCreate2 = document.querySelector('button[data-create]'); //create
const btnDestroy = document.querySelector("#controls > button:nth-child(3)"); //destroy
btnDestroy.addEventListener
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


Do nasłuchiwacza zdarzeń należy przekazać poszczególne wywołania zwrotne,
  poprawnie nazwane za pomocą 
on lub handle,
  a następnie wywołać w nich odpowiednio funkcje 
  createBoxes i destroyBoxes
