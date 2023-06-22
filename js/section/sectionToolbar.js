 
  function sectionButtons() {
    return `
    <div class="admin-buttons">
        <div class="section-toolbar">
          <button class="delete-section" onclick="sectionDelete(this);">
            <img src="./assets/svg/icons/delete.svg"><span class="icon-text">Delete</span>
          </button>
      
          <button class="duplicate-section" onclick="sectionDuplicate(this);">
            <img src="./assets/svg/icons/duplicate.svg"><span class="icon-text">Duplicate</span>
          </button>
      
          <button class="move-up-section" onclick="sectionMoveUp(this);">
            <img src="./assets/svg/icons/up.svg"><span class="icon-text">Move Up</span>
          </button>
      
          <button class="move-down-section" onclick="sectionMoveDown(this);">
            <img src="./assets/svg/icons/down.svg"><span class="icon-text">Move Down</span>
          </button>
      
          <button class="export-section" onclick="sectionExport(this);">
            <img src="./assets/svg/icons/export.svg"><span class="icon-text">Export</span>
          </button>
          
          <button class="replace-section" onclick="sectionReplace(this);">
            <img src="./assets/svg/icons/import.svg"><span class="icon-text">Replace</span>
          </button>
          <button class="image-section" onclick="sectionImage(this); loadDefaultImages(); imageAllButton();">
            <img src="./assets/svg/icons/image.svg"><span class="icon-text">Replace</span>
          </button>
          <button class="video-section" onclick="openVideoSidebar();">
            <img src="./assets/svg/icons/video.svg"><span class="icon-text">Video</span>
          </button>  
          
      </div>
    </div> 
    `;
  }
  function sectionDelete(button) {
    const section = button.closest('section');
    if (!section) {
      console.error('Could not find closest section element.');
      return null;
    }
    const sectionId = section.id;
    section.remove();  
    return sectionId;
  }
  function sectionDuplicate(button) {
    
    const section = button.closest('section');
    if (!section) {
      console.error('Could not find closest section element.');
      return null;
    }
    
    const sectionID = generateRandomID(7);
    const styleID = generateRandomID(7);
    
    const clonedSection = section.cloneNode(true);
    const clonedElements = clonedSection.querySelectorAll('[id]');
    
    clonedElements.forEach(element => {
      const randomID = generateRandomID(7);
      const oldID = element.getAttribute('id');
      const newID = `${randomID}`;
      element.setAttribute('id', newID);
      
      const style = clonedSection.querySelector('style');
      const oldCssText = style.textContent;
      const newCssText = oldCssText.replace(new RegExp(oldID, 'g'), newID);
      style.textContent = newCssText;
    });
    
    clonedSection.setAttribute('id', sectionID);
    clonedSection.querySelector('style').setAttribute('id', styleID);
    section.insertAdjacentElement('afterend', clonedSection);
    
    // Scroll smoothly to the cloned section
    clonedSection.scrollIntoView({ behavior: "smooth" });
    
    return sectionID;
  }  
  function sectionMoveUp(button) {
    const section = button.closest('section');
    const prevSection = section.previousElementSibling;
    prevSection.before(section);
    section.scrollIntoView({ behavior: "smooth" });
    savePage();
  }
  function sectionMoveDown(button) {
    const section = button.closest('section');
    const nextSection = section.nextElementSibling;
    nextSection.after(section);
    section.scrollIntoView({ behavior: "smooth" });
    savePage();
  }
  function sectionExport(button) {
    const findClosestSection = button.closest('section');
    const sectionId = findClosestSection.id;
    const section = document.getElementById(sectionId);
    if (section) {
      let sectionHtml = section.innerHTML; // Get the innerHTML of the section
      const adminButtons = section.querySelector('.admin-buttons');
      if (adminButtons) {
        sectionHtml = sectionHtml.replace(adminButtons.outerHTML, ''); // Remove the admin-buttons div and its contents
      }
      sectionHtml = sectionHtml.trim().replace(/\n\s+/g, "");
       // Clean up the extra spaces and line breaks
      const sectionData = {
        sectionId: sectionId,
        sectionHtml: sectionHtml,
      };
      const dataStr = JSON.stringify(sectionData, null, 2);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      const exportFileName = `section-${sectionId}.json`;
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', dataUri);
      downloadLink.setAttribute('download', exportFileName);
      downloadLink.click();
    }
  }
  function sectionReplace(button) {
    const section = button.closest('section');
    const currentSectionId = section.id;
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.onchange = function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const sectionData = JSON.parse(event.target.result);
        const sectionHtml = sectionData.sectionHtml;
        const newSectionId = `${generateRandomID(7)}`;
        const newSection = document.createElement('section');
        newSection.id = newSectionId;
        newSection.innerHTML = sectionHtml;
  
        // Generate new IDs for the section and its child elements
        const oldIds = new Set();
        newSection.querySelectorAll('[id]').forEach((element) => {
          oldIds.add(element.id);
        });
        let newIds = new Map();
        oldIds.forEach((oldId) => {
          const newId = generateRandomID(7);
          newIds.set(oldId, newId);
        });
  
        // Update the IDs in the section and its child elements
        newSection.id = newIds.get(currentSectionId) || newSectionId;
        newSection.querySelectorAll('[id]').forEach((element) => {
          const oldId = element.id;
          const newId = newIds.get(oldId) || generateRandomID(7);
          element.id = newId;
        });
  
        // Update the CSS styles with the new IDs
        const style = newSection.querySelector('style');
        if (style) {
          const oldCssText = style.textContent;
          let newCssText = oldCssText;
          newIds.forEach((newId, oldId) => {
            newCssText = newCssText.replace(new RegExp(oldId, 'g'), newId);
          });
          style.textContent = newCssText;
        }

        section.parentNode.replaceChild(newSection, section);
  
        // Add custom HTML code at the end of the new section
        const customHtml = sectionButtons();
        addCustomHTMLToSection(newSectionId, customHtml);
        savePage();
      };
      reader.readAsText(file);
    };
    fileInput.click();
  }
  function addCustomHTMLToSection(sectionId, html) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.insertAdjacentHTML('beforeend', html.trim());
    }
  }