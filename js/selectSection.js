function getPreviousStyleID(sectionElement) {
  const styleElement = sectionElement.previousElementSibling;
  if (styleElement && styleElement.tagName === 'STYLE') {
    return styleElement.id;
  } else {
    return null;
  }
}

function getSectionId() {
  const sectionID = document.querySelector('.section-radio:checked');
  if (sectionID) {

    const selectedSectionId = sectionID.closest('section').id;
    const selectedSectionRadioId = sectionID.id;
    
    localStorage.setItem('sectionID', selectedSectionId);
    localStorage.setItem('RadioID', selectedSectionRadioId);


    const section = document.getElementById(selectedSectionId);
    const styleID = getPreviousStyleID(section);
    // console.log('Previous Style ID:', styleID);
    localStorage.setItem('styleID', styleID);


    showIDs();
    const selectedSectionToolbarId = sectionID.closest('section').querySelector('.section-toolbar').id;
    localStorage.setItem('toolbarID', selectedSectionToolbarId);
    console.log(`SectionID: ${selectedSectionId}`);
    // Remove the "checked" attribute from all radio buttons in the group
    const radioGroup = document.getElementsByName('selectedSection');
    radioGroup.forEach((radio) => {
      if (radio.id !== selectedSectionRadioId) {
        radio.removeAttribute('checked');
      }
    });

    // Add the "checked" attribute to the selected radio button
    sectionID.setAttribute('checked', '');

    // Show the section toolbar of the current section
    showSelectedsectionButtons();
  } else {
    localStorage.removeItem('sectionID');
    localStorage.removeItem('radioID');
    localStorage.removeItem('toolbarID');
    localStorage.removeItem('styleID');
    console.log('No section selected');
  }
  savePage();
}


function showSelectedsectionButtons() {
  const selectedSectionRadioId = localStorage.getItem('sectionRadioID');
  const selectedSectionToolbarId = localStorage.getItem('sectionToolbarID');
  
  // Hide all section toolbars except for the selected one
  const sectionToolbars = document.querySelectorAll('.section-toolbar');
  sectionToolbars.forEach((sectionToolbar) => {
    if (sectionToolbar.id !== selectedSectionToolbarId) {
      sectionToolbar.style.visibility = 'hidden';
    }
  });
  
  // Show the section toolbar for the selected section ID
  const selectedSectionToolbar = document.querySelector(`#${selectedSectionToolbarId}`);
  if (selectedSectionToolbar && document.getElementById(selectedSectionRadioId).checked) {
    selectedSectionToolbar.style.visibility = 'visible';
  }
  savePage();
}

function showIDs() {
  const styleID = localStorage.getItem('styleID');
  const sectionID = localStorage.getItem('sectionID');
  const styleText = document.getElementById('styleID-text');
  const sectionText = document.getElementById('sectionID-text');
  if (styleText && sectionText) {
    styleText.textContent = styleID;
    sectionText.textContent = sectionID;
  }
}
showIDs();



function addOrUpdateFromInput() {
  const elementIDText = document.getElementById('elementID-text');
  const localStorageStyleID = localStorage.getItem('styleID');
  const styleID = localStorageStyleID;
  const styleValue = document.getElementById("all-textarea").value;
  const elementID = elementIDText.innerText;

  // Save the styleValue to localStorage with elementID as the key
  localStorage.setItem(elementID, styleValue);

  // Update the style element in the DOM
  const styleElement = document.getElementById(styleID);
  if (styleElement) {
    const existingCSS = styleElement.innerHTML;
    const formattedStyleValue = styleValue.replace(/;\s+/g, ';');
    const newCSSRule = `#${elementID} { ${formattedStyleValue} }`;

    // Check if a rule for the current element ID already exists
    const regex = new RegExp(`#${elementID} {[^}]*}`, 'g');
    if (existingCSS.match(regex)) {
      if (styleValue.trim() === '') {
        // Remove the rule if the styleValue is empty
        styleElement.innerHTML = existingCSS.replace(regex, '').trim();
      } else {
        // Replace the existing rule with the new rule
        styleElement.innerHTML = existingCSS.replace(regex, newCSSRule.trim());
      }
    } else if (styleValue.trim() !== '') {
      // Add the new rule to the existing rules, only if the styleValue is not empty
      styleElement.innerHTML = existingCSS.trim() + '\n' + newCSSRule.trim();
    }

    savePage();
  }
}

document.getElementById("all-textarea").addEventListener("input", addOrUpdateFromInput);



function getSectionID(element) {
  // Traverse up the DOM tree until a section element is found
  while (element && element.tagName !== 'SECTION') {
    element = element.parentNode;
  }

  // If a section element was found, return its ID, otherwise return null
  return element ? element.id : null;
}

function getElementID(element) {
  // Traverse up the DOM tree until an element with an ID is found
  while (element && !element.id) {
    element = element.parentNode;
  }

  // If an element with an ID was found, return its ID, otherwise return null
  return element ? element.id : null;
}

// Attach a click event listener to the document
document.addEventListener('click', function(event) {
  
  // Call the getSectionID and getElementID functions with the clicked element as an argument
  var sectionID = getSectionID(event.target);
  var elementID = getElementID(event.target);

  


  // If sectionID is null, disable the all-textarea textarea and display a message
  var classListInput = document.getElementById('all-textarea');
  if (!sectionID) {
    // classListInput.value = 'No section found containing the clicked element.';
    // classListInput.disabled = true;
  } else {
    // Otherwise, enable the textarea, update the sectionID-text, elementID-text, and styleID-text elements, and log the IDs to the console
    classListInput.disabled = false;
    var sectionIDText = document.getElementById('sectionID-text');
    sectionIDText.innerHTML = sectionID;
    sectionIDText.classList.remove('hidden');
    var styleIDText = document.getElementById('styleID-text');
    styleIDText.innerHTML = 'style-' + sectionID.replace('section-', '');
    styleIDText.classList.remove('hidden');
    var elementIDText = document.getElementById('elementID-text');
    elementIDText.innerHTML = elementID || 'Select an element';

    // Update the sectionID, styleID, and elementID items in localStorage
    localStorage.setItem('sectionID', sectionID);
    localStorage.setItem('styleID', 'style-' + sectionID.replace('section-', ''));
    localStorage.setItem('elementID', elementID);
    savePage();

    console.log(sectionID, elementID);
    
  }
});


