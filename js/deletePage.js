const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
  grid.innerHTML = "";
  savePage();
  
});