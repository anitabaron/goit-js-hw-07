function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const btnChange = document.querySelector("button.change-color");
const bodyColor = document.querySelector("body");
const colorNameDisplay = document.querySelector("span.color");

btnChange.addEventListener("click", getRandomHexColor);
bodyColor.style.backgroundColor = getRandomHexColor;
