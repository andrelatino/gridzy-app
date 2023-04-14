function exportSection(button) {
    // Find the parent section element
    const section = button.closest("section");
  
    // Check if the section element exists
    if (!section) {
      console.error('Could not find section element');
      return;
    }
  
    // Get the id of the section element
    const sectionId = section.getAttribute('id');
  
    // Find all child elements of the section
    const children = section.querySelectorAll('*');
  
    // Create an object to store the section data
    const sectionData = {};
  
    // Loop through all child elements of the section and store their data in the object
    children.forEach(child => {
      const tagName = child.tagName.toLowerCase();
      const id = child.id;
      const className = child.className;
  
      // Store the tag name, id, and class name of the element
      sectionData[tagName] = {
        id,
        className
      };
  
      // If the element has any attributes, store them as well
      if (child.hasAttributes()) {
        const attributes = child.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const attrName = attributes[i].name;
          const attrValue = attributes[i].value;
          sectionData[tagName][attrName] = attrValue;
        }
      }
    });
  
    // Add the section id to the section data object
    sectionData.sectionId = sectionId;
  
    // Convert the section data object to JSON
    const sectionJSON = JSON.stringify(sectionData);
  
    // Download the JSON data as a file
    const filename = `${sectionId}.json`;
    const blob = new Blob([sectionJSON], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  
    // Log the JSON data to the console for debugging purposes
    console.log(sectionJSON);
  }
  