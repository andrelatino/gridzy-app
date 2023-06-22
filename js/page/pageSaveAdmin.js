
function savePage() {
  const grid = document.getElementById("grid");

  // Clone the grid element
  const gridClone = grid.cloneNode(true);

  // Recursively traverse through the cloned grid element and remove the specified classes
  removeClassByClass(gridClone, "admin-outline", "admin-tag");

  // Get the HTML content of the modified clone
  const pageAdmin = gridClone.innerHTML;

  // Save the modified content in the localStorage
  localStorage.setItem("pageAdmin", pageAdmin);
  pageSaveProd();
}

// Recursive function to remove specific classes from elements
function removeClassByClass(element, ...classNames) {
  classNames.forEach(className => {
    if (element.classList && element.classList.contains(className)) {
      element.classList.remove(className);
    }
  });

  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    removeClassByClass(children[i], ...classNames);
  }
}






window.addEventListener("load", function() {
  const grid = document.getElementById("grid");
  const html = localStorage.getItem("pageAdmin");
  if (html) {
    grid.innerHTML = html;

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionID = section.getAttribute("id");
      const sectionCSS = localStorage.getItem(sectionID);
      if (sectionCSS) {
        const styleTag = document.createElement("style");
        styleTag.setAttribute("id", `${sectionID}-style`);
        styleTag.setAttribute("type", "text/css");
        styleTag.textContent = sectionCSS;
        document.head.appendChild(styleTag);
      }
    });
  }
});



