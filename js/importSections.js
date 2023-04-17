function replaceJson(json) {
  const section = document.createElement('section');
  section.id = json.id;
  section.innerHTML = json.section;
  return section;
}

function importJSON(json) {
  const section = replaceJson(json);
  const gridDiv = document.getElementById('grid');
  gridDiv.appendChild(section);
  localStorage.setItem('sectionID', section.id);
}

function importSection() {
  const inputElement = document.createElement('input');
  inputElement.type = 'file';
  inputElement.accept = '.json';
  inputElement.onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonString = event.target.result;
      const json = JSON.parse(jsonString);
      importJSON(json);
      saveToLocalStorage();
    };
    reader.readAsText(file);
  };
  inputElement.click();
}
