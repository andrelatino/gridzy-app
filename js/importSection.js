function exportSection(button) {
    // Find the parent section element
    const section = button.closest("section");
  
    // Check if the section element exists
    if (!section) {
      console.error("Could not find section element");
      return;
    }
  
    // Create a new HTML document
    const htmlDoc = document.implementation.createHTMLDocument("Section");
  
    // Clone the section element and add it to the new document
    const clonedSection = section.cloneNode(true);
    htmlDoc.body.appendChild(clonedSection);
  
    // Get the outerHTML of the new document
    const html = htmlDoc.documentElement.outerHTML;
  
    // Download the HTML data as a file
    const filename = `${section.getAttribute('id')}.html`;
    const blob = new Blob([html], {type: "text/html"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  
    // Log the HTML data to the console for debugging purposes
    console.log(html);
  }
  