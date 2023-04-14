function duplicateSection(button) {
    // Find the nearest section element that contains the button
    const section = button.closest('section');
  
    // Clone the section element
    const newSection = section.cloneNode(true);
  
    // Replace all elements with ID with a random one
    newSection.querySelectorAll('[id]').forEach(element => {
      const randomId = Math.random().toString(36).substring(2);
      element.setAttribute('id', randomId);
    });
  
    // Insert the new section after the original section
    section.parentNode.insertBefore(newSection, section.nextSibling);
    saveToLocalStorage();
  }
  
  