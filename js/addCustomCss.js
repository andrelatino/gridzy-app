
// function editorGetSectionId(element) {
//   while (element && element.tagName !== 'SECTION') {
//       element = element.parentNode;
//   }
//   return element ? element.id : null;
// }
// function editorGetElementId(element) {
//   while (element && !element.id) {
//       element = element.parentNode;
//   }
//   return element ? element.id : null;
// }
// function editorGetStyleId(sectionId) {
//   const section = document.getElementById(sectionId);
//   if (!section) {
//       return null;
//   }
//   const firstChild = section.firstElementChild;
//   return firstChild ? firstChild.id : null;
// }



function addOrUpdateAllCss() {
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
      const formattedStyleValue = styleValue.replace(/;\s+/g, ';').replace(/\s*{\s*/g, '{').replace(/\s*}\s*/g, '}');
      const newCSSRule = `#${elementID}{${formattedStyleValue}}`;
      // Check if a rule for the current element ID already exists with the same media query
      const regex = new RegExp(`@media screen and \\(min-width:0px\\){#${elementID}{[^}]*}}`, 'g');
      const matchedRules = existingCSS.match(regex);
  
      if (matchedRules) {
        if (styleValue.trim() === '') {
          // Remove the rule if the styleValue is empty
          const updatedCSS = existingCSS.replace(regex, '');
          // Remove the media query if there are no rules left
          const emptyMediaQueryRegex = /@media screen and \(min-width:0px\) \{\s*\}/g;
          const updatedCSSWithoutMediaQuery = updatedCSS.replace(emptyMediaQueryRegex, '');
          styleElement.innerHTML = updatedCSSWithoutMediaQuery.trim();
        } else {
          // Replace the existing rule with the new rule
          const updatedRule = matchedRules[0].replace(/#\S+{[^}]*}/, newCSSRule.trim());
          styleElement.innerHTML = existingCSS.replace(regex, updatedRule);
        }
      } else if (styleValue.trim() !== '') {
        // Add the new rule to the existing rules, only if the styleValue is not empty
        const mediaQuery = `@media screen and (min-width:0px)`;
        const newCSSRuleWithMediaQuery = `${mediaQuery}{${newCSSRule}}`;
        styleElement.innerHTML = newCSSRuleWithMediaQuery.trim() + '\n' + existingCSS.trim();
      }
      savePage();
    }
  }
document.getElementById("all-textarea").addEventListener("input", addOrUpdateAllCss);
  
function addOrUpdateXsCss() {
    const elementIDText = document.getElementById('elementID-text');
    const localStorageStyleID = localStorage.getItem('styleID');
    const styleID = localStorageStyleID;
    const styleValue = document.getElementById("xs-textarea").value;
    const elementID = elementIDText.innerText;
    // Save the styleValue to localStorage with elementID as the key
    localStorage.setItem(elementID, styleValue);
    // Update the style element in the DOM
    const styleElement = document.getElementById(styleID);
    if (styleElement) {
      const existingCSS = styleElement.innerHTML;
      const formattedStyleValue = styleValue.replace(/;\s+/g, ';').replace(/\s*{\s*/g, '{').replace(/\s*}\s*/g, '}');
      const newCSSRule = `#${elementID}{${formattedStyleValue}}`;
      // Check if a rule for the current element ID already exists with the same media query
      const regex = new RegExp(`@media screen and \\(max-width:640px\\){#${elementID}{[^}]*}}`, 'g');
      const matchedRules = existingCSS.match(regex);
  
      if (matchedRules) {
        if (styleValue.trim() === '') {
          // Remove the rule if the styleValue is empty
          const updatedCSS = existingCSS.replace(regex, '');
          // Remove the media query if there are no rules left
          const emptyMediaQueryRegex = /@media screen and \(max-width:640px\) \{\s*\}/g;
          const updatedCSSWithoutMediaQuery = updatedCSS.replace(emptyMediaQueryRegex, '');
          styleElement.innerHTML = updatedCSSWithoutMediaQuery.trim();
        } else {
          // Replace the existing rule with the new rule
          const updatedRule = matchedRules[0].replace(/#\S+{[^}]*}/, newCSSRule.trim());
          styleElement.innerHTML = existingCSS.replace(regex, updatedRule);
        }
      } else if (styleValue.trim() !== '') {
        // Add the new rule to the existing rules, only if the styleValue is not empty
        const mediaQuery = `@media screen and (max-width:640px)`;
        const newCSSRuleWithMediaQuery = `${mediaQuery}{${newCSSRule}}`;
        
        styleElement.innerHTML = existingCSS.trim() + '\n' + newCSSRuleWithMediaQuery.trim();

      }
      savePage();
    }
  }
document.getElementById("xs-textarea").addEventListener("input", addOrUpdateXsCss); 

  
  function getSectionID(element) {
    while (element && element.tagName !== 'SECTION') {
      element = element.parentNode;
      
    }
    return element ? element.id : null;
    
  }
  
  function getElementID(element) {
    while (element && !element.id) {
      element = element.parentNode;
    }
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
      listAllElementsInSection();
      
    }
  });

  let previousElement;
  function listElementsInSection(element, list) {
    if (element.classList && (element.classList.contains('admin-buttons') || element.closest('.editor-list-content'))) {
      return; // Skip admin buttons and elements inside treeview list
    }
    var styleButton = document.createElement('button');
    // styleButton.innerText = `${element.tagName.toLowerCase()} (#${element.id})`;
    styleButton.innerText = `${element.tagName.toLowerCase()}`;

    if (styleButton.innerText.toLowerCase().startsWith('style')) {
      return;
    }
    
    const button = document.createElement('button');
    button.innerText = `${element.tagName.toLowerCase()}`;    
    button.addEventListener('click', () => {

      const getCSS = localStorage.getItem('sectionID');

      const sectionCss = document.getElementById(getCSS);
      sectionCss.classList.add('admin-index2');
      sectionCss.classList.remove('admin-index1');

      const sectionTagName = document.getElementsByTagName('section');
      for (let i = 0; i < sectionTagName.length; i++) {
        if (sectionTagName[i].id !== getCSS) {
          sectionTagName[i].classList.add('admin-index1');
          sectionTagName[i].classList.remove('admin-index2');
        }
      }

      const elementID = element.id;
      
      // console.log(`${elementID} clicked`);
      localStorage.setItem('elementID', elementID);

      const localStorageSectionID = localStorage.getItem('sectionID');
      const localStorageStyleID = localStorage.getItem('styleID');

      const AllCssProperties = getCssFromAllElements(elementID, localStorageStyleID);
      const allTextarea = document.getElementById('all-textarea');
      allTextarea.value = AllCssProperties;
      



      document.getElementById('elementID-text').textContent = elementID;
      document.getElementById('editor-list-selected').textContent = button.innerText;
      
      if (previousElement) {
        previousElement.classList.remove('admin-outline');
        previousElement.classList.remove('admin-tag');
        
      }
      element.classList.add('admin-outline');
      element.setAttribute('tag', `${element.tagName.toLowerCase()}`);
      element.classList.add('admin-tag');
      
      previousElement = element;
    });
    const listItem = document.createElement('li');
    listItem.appendChild(button);
    list.appendChild(listItem);
    for (let i = 0; i < element.children.length; i++) {
      listElementsInSection(element.children[i], listItem);
    }
    
  }
    
  function listAllElementsInSection() {
    const sectionId = document.getElementById('sectionID-text').textContent;
    const section = document.getElementById(sectionId);
    if (!section) {
      console.log(`Section with ID "${sectionId}" not found`);
      return;
    }
    const list = document.createElement('ul');
    listElementsInSection(section, list);
    const container = document.querySelector('.editor-list-content');
    container.innerHTML = ''; // clear any previous content
    container.appendChild(list);
  }