function importPage() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.json';
  fileInput.multiple = true; // Allow multiple file selection
  fileInput.onchange = function(event) {
    var files = event.target.files;
    Array.from(files).forEach(function(file) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var sectionData = JSON.parse(event.target.result);
        var sectionsHtml = sectionData.pageHtml;

        var container = document.createElement('div'); // Create a temporary container
        container.innerHTML = sectionsHtml;

        var sections = container.querySelectorAll('section'); // Retrieve all sections from the container

        // Loop through each section
        Array.from(sections).forEach(function(section) {
          var sectionHtml = section.innerHTML;
          var newSectionId = generateRandomID(7);
          var newSection = document.createElement('section');
          newSection.id = newSectionId;
          newSection.innerHTML = sectionHtml;

          // Generate new IDs for the section and its child elements
          var oldIds = new Set();
          newSection.querySelectorAll('[id]').forEach(function(element) {
            oldIds.add(element.id);
          });
          var newIds = new Map();
          oldIds.forEach(function(oldId) {
            var newId = generateRandomID(7);
            newIds.set(oldId, newId);
          });

          // Update the IDs in the section and its child elements
          newSection.querySelectorAll('[id]').forEach(function(element) {
            var oldId = element.id;
            var newId = newIds.get(oldId) || generateRandomID(7);
            element.id = newId;
          });
          newSectionId = newIds.get(newSectionId) || newSectionId;

          // Update the CSS styles with the new IDs
          var style = newSection.querySelector('style');
          if (style) {
            var oldCssText = style.textContent;
            var newCssText = oldCssText;
            newIds.forEach(function(newId, oldId) {
              newCssText = newCssText.replace(new RegExp(oldId, 'g'), newId);
            });
            style.textContent = newCssText;
          }

          // Add the new section to the "grid" div
          var grid = document.getElementById('grid');
          if (grid) {
            grid.appendChild(newSection);
          }

          // Add custom HTML code at the end of the new section
          var customHtml = sectionButtons();
          addCustomHTMLToImportedSection(newSectionId, customHtml);
          savePage();
        });
      };
      reader.readAsText(file);
    });
  };
  fileInput.click();
}
