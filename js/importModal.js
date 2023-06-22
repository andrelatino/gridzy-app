function importModal() {
    // create the modal HTML
    var modalHtml = `
      <div class="modal import-modal"> 
        <div class="modal-content">
            <button onClick="closeImportModal(); closeOverlay();" class="close-button">
              <img src="./assets/svg/icons/close.svg">
            </button>
            
            <button onClick="sectionImport()" class="modal-button">
              <img src="./assets/svg/icons/section.svg">
              <p>Import Section </p> 
            </button>
            
            <button onClick="importPage()" class="modal-button">
              <img src="./assets/svg/icons/page.svg">
              <p>Import Page </p> 
            </button>
        </div>
      </div>
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
  
  function closeImportModal() {
    // find the modal and remove it from the DOM
    const modal = document.querySelector('.import-modal');
    if (modal) {
      modal.remove();
    }
  }

  // function sectionImport() {
  //   var fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.accept = '.json';
  //   fileInput.onchange = function(event) {
  //     var file = event.target.files[0];
  //     var reader = new FileReader();
  //     reader.onload = function(event) {
  //       var sectionData = JSON.parse(event.target.result);
  //       var sectionHtml = sectionData.sectionHtml;
  //       var newSectionId = `${generateRandomID(7)}`;
  //       let newSection = document.createElement('section');
  //       newSection.id = newSectionId;
  //       newSection.innerHTML = sectionHtml;
  
  //       // Generate new IDs for the section and its child elements
  //       var oldIds = new Set();
  //       newSection.querySelectorAll('[id]').forEach((element) => {
  //         oldIds.add(element.id);
  //       });
  //       let newIds = new Map();
  //       oldIds.forEach((oldId) => {
  //         var newId = generateRandomID(7);
  //         newIds.set(oldId, newId);
  //       });
  
  //       // Update the IDs in the section and its child elements
  //       newSection.querySelectorAll('[id]').forEach((element) => {
  //         var oldId = element.id;
  //         var newId = newIds.get(oldId) || generateRandomID(7);
  //         element.id = newId;
  //       });
  //       newSectionId = newIds.get(newSectionId) || newSectionId;
  
  //       // Update the CSS styles with the new IDs
  //       var style = newSection.querySelector('style');
  //       if (style) {
  //         var oldCssText = style.textContent;
  //         let newCssText = oldCssText;
  //         newIds.forEach((newId, oldId) => {
  //           newCssText = newCssText.replace(new RegExp(oldId, 'g'), newId);
  //         });
  //         style.textContent = newCssText;
  //       }
  
  //       // Add the new section to the "grid" div
  //       var grid = document.getElementById('grid');
  //       if (grid) {
  //         grid.appendChild(newSection);
  //       }
  
  //       // Add custom HTML code at the end of the new section
  //       var customHtml = sectionButtons();
  //       addCustomHTMLToImportedSection(newSectionId, customHtml);
  //       savePage();
  //     };
  //     reader.readAsText(file);
  //   };
  //   fileInput.click();
  // }
  
  // function addCustomHTMLToImportedSection(sectionId, html) {
  //   var section = document.getElementById(sectionId);
  //   if (section) {
  //     section.insertAdjacentHTML('beforeend', html.trim());
  //   }
  // }