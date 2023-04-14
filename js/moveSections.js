
function moveSections() {
  grid.addEventListener("click", function(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("move-up-button")) {
      const section = clickedElement.closest("section");
      const prevSection = section.previousElementSibling;
      if (prevSection) {
        section.parentNode.insertBefore(section, prevSection);
        saveToLocalStorage();
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (clickedElement.classList.contains("move-down-button")) {
      const section = clickedElement.closest("section");
      const nextSection = section.nextElementSibling;
      if (nextSection) {
        section.parentNode.insertBefore(nextSection, section);
        saveToLocalStorage();
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // if the section is the last one, append it to the grid
        section.parentNode.appendChild(section);
        saveToLocalStorage();
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

/* <button class="move-up-button">Up</button>
<button class="move-down-button">Down</button> */
