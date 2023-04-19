function saveElementId() {
    let inputElement = document.querySelector("input[data-element-id]");
    if (inputElement) {
      let elementId = inputElement.getAttribute("data-element-id");
      localStorage.setItem("sectionElementID", elementId);
    }
  }
  