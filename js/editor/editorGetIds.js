function editorGetSectionId(element) {
    while (element && element.tagName !== 'SECTION') {
        element = element.parentNode;
    }
    return element ? element.id : null;
}
function editorGetElementId(element) {
    while (element && !element.id) {
        element = element.parentNode;
    }
    return element ? element.id : null;
}
function editorGetStyleId(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) {
        return null;
    }
    const firstChild = section.firstElementChild;
    return firstChild ? firstChild.id : null;
}
  
document.addEventListener('click', function(event) {   

    var sectionID = editorGetSectionId(event.target);
    var elementID = editorGetElementId(event.target);
    var styleID = editorGetStyleId(sectionID);   

    console.log('Section:', sectionID);
    console.log('Style:', styleID);
    console.log('Element:', elementID);
    
    var classListInput = document.getElementById('all-textarea');
    
    if (!sectionID) {
      classListInput.disabled = false;
    } else {
    
    classListInput.disabled = false;
    var sectionIDText = document.getElementById('sectionID-text');
    sectionIDText.innerHTML = sectionID;
    sectionIDText.classList.remove('hidden');

    var styleIDText = document.getElementById('styleID-text');
    styleIDText.innerHTML = styleID;
    styleIDText.classList.remove('hidden');

    var elementIDText = document.getElementById('elementID-text');
    elementIDText.innerHTML = elementID || 'Select an element';
    
    localStorage.setItem('sectionID', sectionID);
    localStorage.setItem('styleID', styleID);
    localStorage.setItem('elementID', elementID);

    const AllCssProperties = getCssFromAllElements(elementID, styleIDText.innerHTML);
    console.log(AllCssProperties);
    const AllTextValues = document.getElementById('all-textarea');
    AllTextValues.value = AllCssProperties;

    const XsCssProperties = getCssFromXsElements(elementID, styleIDText.innerHTML);
    console.log(XsCssProperties);
    const XsTextValues = document.getElementById('xs-textarea');
    XsTextValues.value = XsCssProperties;
    
    savePage();
        
    }  
});  






function getCssFromAllElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let AllCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (min-width:0px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      AllCssProperties += `${properties}\n`;
    } else {
      AllCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  return AllCssProperties;
}


function getCssFromXsElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let XsCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (max-width:640px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      XsCssProperties += `${properties}\n`;
    } else {
      XsCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  return XsCssProperties;
}