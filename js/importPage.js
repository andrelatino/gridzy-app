// function replaceJson(json) {
//     const section = document.createElement('section');
//     section.id = json.id;
//     section.innerHTML = json.section;
//     return section;
//   }
  
//   function addPageToGrid(jsonSections) {
//     const gridDiv = document.getElementById('grid');
  
//     for (let i = 0; i < jsonSections.length; i++) {
//       const json = jsonSections[i];
//       const section = replaceJson(json);
//       gridDiv.appendChild(section);
//     }
  
//     localStorage.setItem('sectionID', gridDiv.firstChild.id);
//   }
  
  
//   function importPage() {
//     const inputElement = document.createElement('input');
//     inputElement.type = 'file';
//     inputElement.accept = '.json';
//     inputElement.onchange = (event) => {
//       const file = event.target.files[0];
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const jsonString = event.target.result;
//         const jsonSections = JSON.parse(jsonString);
//         addPageToGrid(jsonSections);
//         saveToLocalStorage();
//       };
//       reader.readAsText(file);
//     };
//     inputElement.click();
//   }
  