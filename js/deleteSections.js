function deleteSection(event) {
  if (event.target.classList.contains("delete-button")) {
    const section = event.target.closest("section");
    section.remove();
    saveToLocalStorage();
  }
}

grid.addEventListener("click", deleteSection);


