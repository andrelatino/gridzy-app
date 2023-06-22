function pageSaveProd() {
  // Get the pageAdmin content from local storage
  const pageAdmin = localStorage.getItem("pageAdmin");

  if (pageAdmin) {
    // Create a temporary element to hold the pageAdmin content
    const tempElement = document.createElement("div");
    tempElement.innerHTML = pageAdmin;

    // Remove div elements with the class "admin-buttons"
    const adminButtons = tempElement.querySelectorAll(".admin-buttons");
    adminButtons.forEach((button) => {
      button.remove();
    });

    // Remove contenteditable="true" attribute from all elements
    const editableElements = tempElement.querySelectorAll("[contenteditable]");
    editableElements.forEach((element) => {
      element.removeAttribute("contenteditable");
    });

    // Get the cleaned HTML content
    const pageProd = tempElement.innerHTML;

    // Save the cleaned content as pageProd in local storage
    localStorage.setItem("pageProd", pageProd);

    console.log("Page saved as pageProd!");
  } else {
    console.log("No pageAdmin content found in local storage.");
  }
}