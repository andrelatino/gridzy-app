// function getSectionIds(element) {
//     // Traverse up the DOM tree until a section element is found
//     while (element && element.tagName !== 'SECTION') {
//       element = element.parentNode;
//     }
  
//     // If a section element was found, return its ID, otherwise return null
//     return element ? element.id : null;
//   }
  
//   function getElementID(element) {
//     // Traverse up the DOM tree until an element with an ID is found
//     while (element && !element.id) {
//       element = element.parentNode;
//     }
  
//     // If an element with an ID was found, return its ID, otherwise return null
//     return element ? element.id : null;
//   }
//   // Define the getStyleId function
//   function getFirstChildId(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (!section) {
//       return null;
//     }
//     const firstChild = section.firstElementChild;
//     return firstChild ? firstChild.id : null;
//   }
//   // Attach a click event listener to the document
//   document.addEventListener('click', function(event) {
    
    
//     // Call the getSectionIds and getElementID functions with the clicked element as an argument
//     var sectionID = getSectionIds(event.target);
//     var elementID = getElementID(event.target);
//     var styleID = getFirstChildId(sectionID);

    
    
    
//     console.log('Section:', sectionID);
//     console.log('Style:', styleID);
//     console.log('Element:', elementID);
    
//     // var sectionCss = sectionID;
//     // alert(sectionCss);
//     // sectionID.style.padding = "100px";
  
//     // If sectionID is null, disable the all-textarea textarea and display a message
//     var classListInput = document.getElementById('all-textarea');
//     if (!sectionID) {
//     //   classListInput.value = 'No section found containing the clicked element.';
//       classListInput.disabled = false;
//     } else {
//       // Otherwise, enable the textarea, update the sectionID-text, elementID-text, and styleID-text elements, and log the IDs to the console
//     classListInput.disabled = false;
   
//     var sectionIDText = document.getElementById('sectionID-text');
//     sectionIDText.innerHTML = sectionID;
//     sectionIDText.classList.remove('hidden');

//     var styleIDText = document.getElementById('styleID-text');
//     styleIDText.innerHTML = styleID;
//     styleIDText.classList.remove('hidden');

//     var elementIDText = document.getElementById('elementID-text');
//     elementIDText.innerHTML = elementID || 'Select an element';
    
//     localStorage.setItem('sectionID', sectionID);
//     localStorage.setItem('styleID', styleID);
//     localStorage.setItem('elementID', elementID);

//     const AllCssProperties = getCssFromAllElements(elementID, styleIDText.innerHTML);
//     console.log(AllCssProperties);
//     const AllTextValues = document.getElementById('all-textarea');
//     AllTextValues.value = AllCssProperties;

//     const XsCssProperties = getCssFromXsElements(elementID, styleIDText.innerHTML);
//     console.log(XsCssProperties);
//     const XsTextValues = document.getElementById('xs-textarea');
//     XsTextValues.value = XsCssProperties;

    

//     savePage();
//     // console.log(sectionID, elementID);

//     }
//   });  

// function getCssFromAllElements(elementId, styleId) {
//   const styleTag = document.querySelector(`#${styleId}`);
//   if (!styleTag) {
//     console.log(`Could not find style tag with ID "${styleId}".`);
//     return '';
//   }
//   const cssText = styleTag.textContent;
//   const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
//   const matches = cssText.matchAll(regex);
//   let AllCssProperties = '';
//   for (const match of matches) {
//     if (match[1] && !match[1].includes('screen and (min-width:0px)')) {
//       continue;
//     }
//     const properties = match[2]
//       .split(';')
//       .map(prop => `${prop.trim()};`)
//       .filter(prop => prop !== ';')
//       .join('\n');
//     if (match[1]) {
//       AllCssProperties += `${properties}\n`;
//     } else {
//       AllCssProperties += `Media query: None\n${properties}\n`;
//     }
//   }
//   return AllCssProperties;
// }


// function getCssFromXsElements(elementId, styleId) {
//   const styleTag = document.querySelector(`#${styleId}`);
//   if (!styleTag) {
//     console.log(`Could not find style tag with ID "${styleId}".`);
//     return '';
//   }
//   const cssText = styleTag.textContent;
//   const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
//   const matches = cssText.matchAll(regex);
//   let XsCssProperties = '';
//   for (const match of matches) {
//     if (match[1] && !match[1].includes('screen and (max-width:640px)')) {
//       continue;
//     }
//     const properties = match[2]
//       .split(';')
//       .map(prop => `${prop.trim()};`)
//       .filter(prop => prop !== ';')
//       .join('\n');
//     if (match[1]) {
//       XsCssProperties += `${properties}\n`;
//     } else {
//       XsCssProperties += `Media query: None\n${properties}\n`;
//     }
//   }
//   return XsCssProperties;
// }
