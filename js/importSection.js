function importSection() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.onchange = function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const sectionData = JSON.parse(event.target.result);
        const sectionHtml = sectionData.sectionHtml;
        const sectionId = sectionData.sectionId;
        const section = document.createElement('section');
        section.innerHTML = sectionHtml;
  
        // Generate new IDs for the section and its child elements
        const oldIds = new Set();
        section.querySelectorAll('[id]').forEach((element) => {
          oldIds.add(element.id);
        });
        let newIds = new Map();
        oldIds.forEach((oldId) => {
          const newId = generateNewId();
          newIds.set(oldId, newId);
        });
  
        // Update the IDs in the section and its child elements
        section.id = newIds.get(sectionId) || generateNewId();
        section.querySelectorAll('[id]').forEach((element) => {
          const oldId = element.id;
          const newId = newIds.get(oldId) || generateNewId();
          element.id = newId;
        });
  
        // Add the new section to the grid div
        const grid = document.getElementById('grid');
        grid.innerHTML += section.innerHTML;
  
        // Save changes to local storage
        localStorage.setItem('sectionID', section.id);
        const newSectionRadio = section.querySelector('.section-radio');
        if (newSectionRadio) {
          localStorage.setItem('sectionRadioID', newSectionRadio.id);
        }
        const sectionToolbar = section.querySelector('.section-toolbar');
        if (sectionToolbar) {
          localStorage.setItem('sectionToolbarID', sectionToolbar.id);
        }
        saveToLocalStorage();
      };
      reader.readAsText(file);
    };
    fileInput.click();
  
    function generateNewId() {
      return 'ID-' + Math.random().toString(36).substr(2, 10).toUpperCase();
    }
  }
  