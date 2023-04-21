function importSection() {
  const fileInputJS = document.createElement('input');
  fileInputJS.type = 'file';
  fileInputJS.accept = '.json';
  fileInputJS.onchange = function(eventJS) {
    const fileJS = eventJS.target.files[0];
    const readerJS = new FileReader();
    readerJS.onload = function(eventJS) {
      const sectionDataJS = JSON.parse(eventJS.target.result);
      const sectionHtmlJS = sectionDataJS.sectionHtml;
      const sectionIdJS = sectionDataJS.sectionId;
      const sectionJS = document.createElement('section');
      sectionJS.innerHTML = sectionHtmlJS;

      // Generate new IDs for the section and its child elements
      const oldIdsJS = new Set();
      sectionJS.querySelectorAll('[id]').forEach((elementJS) => {
        oldIdsJS.add(elementJS.id);
      });
      let newIdsJS = new Map();
      oldIdsJS.forEach((oldIdJS) => {
        const newIdJS = generateNewIdJS();
        newIdsJS.set(oldIdJS, newIdJS);
      });

      // Update the IDs in the section and its child elements
      sectionJS.id = newIdsJS.get(sectionIdJS) || generateNewIdJS();
      sectionJS.querySelectorAll('[id]').forEach((elementJS) => {
        const oldIdJS = elementJS.id;
        const newIdJS = newIdsJS.get(oldIdJS) || generateNewIdJS();
        elementJS.id = newIdJS;
      });

      // Add the new section to the grid div
      const gridJS = document.getElementById('grid');
      gridJS.innerHTML += sectionJS.innerHTML;

      // Save changes to local storage
      localStorage.setItem('sectionID', sectionJS.id);
      const newSectionRadioJS = sectionJS.querySelector('.section-radio');
      if (newSectionRadioJS) {
        localStorage.setItem('sectionRadioID', newSectionRadioJS.id);
      }
      const sectionToolbarJS = sectionJS.querySelector('.section-toolbar');
      if (sectionToolbarJS) {
        localStorage.setItem('sectionToolbarID', sectionToolbarJS.id);
      }
      savePage();
    };
    readerJS.readAsText(fileJS);
  };
  fileInputJS.click();

  function generateNewIdJS() {
    return 'ID-' + Math.random().toString(36).substr(2, 10).toUpperCase();
  }
}  