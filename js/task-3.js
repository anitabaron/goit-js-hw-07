const formField = document.querySelector("input#name-input");
formField.addEventListener("input", writeAndErase);
function writeAndErase(event) {
  // formField.trim();
  console.log("Input: ", event.target.elements.input.value);
}
