function replaceJson(json) {
  const section = document.createElement('section');
  section.id = json.id;
  section.innerHTML = json.section;
  return section;
}


function replaceSection() {
  const sectionId = localStorage.getItem('sectionID');
  if (sectionId) {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = '.json';
    inputElement.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonString = event.target.result;
        const json = JSON.parse(jsonString);
        const section = replaceJson(json);
        const currentSection = document.getElementById(sectionId);
        currentSection.parentNode.replaceChild(section, currentSection);
        saveToLocalStorage();
      };
      reader.readAsText(file);
    };
    inputElement.click();
  } else {
    console.log('No section selected');
  }
}
