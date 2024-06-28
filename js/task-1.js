const allItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories:`, allItems.length);
allItems.forEach((category) => {
  const itemName = category.querySelector("h2").textContent;
  const smallListOne = category.querySelectorAll("li").length;
  console.log(`Category:`, itemName);
  console.log(`Elements:`, smallListOne);
});
