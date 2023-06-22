// function replaceSection() {
//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = '.json';
//     fileInput.onchange = function(event) {
//       const file = event.target.files[0];
//       const reader = new FileReader();
//       reader.onload = function(event) {
//         const sectionData = JSON.parse(event.target.result);
//         const sectionHtml = sectionData.sectionHtml;
//         const sectionId = sectionData.sectionId;
//         const section = document.createElement('section');
//         section.innerHTML = sectionHtml;
  
//         // Generate new IDs for the section and its child elements
//         const oldIds = new Set();
//         section.querySelectorAll('[id]').forEach((element) => {
//           oldIds.add(element.id);
//         });
//         let newIds = new Map();
//         oldIds.forEach((oldId) => {
//           const newId = generateNewId();
//           newIds.set(oldId, newId);
//         });
  
//         // Update the IDs in the section and its child elements
//         section.id = newIds.get(sectionId) || generateNewId();
//         section.querySelectorAll('[id]').forEach((element) => {
//           const oldId = element.id;
//           const newId = newIds.get(oldId) || generateNewId();
//           element.id = newId;
//         });
  
//         const oldSectionId = localStorage.getItem('sectionID');
//         const oldSection = document.getElementById(oldSectionId);
//         if (oldSection && oldSection.parentNode) {
//           oldSection.parentNode.replaceChild(section.firstElementChild, oldSection);
//         }
//         localStorage.setItem('sectionID', section.id);
//       };
//       reader.readAsText(file);
//     };
//     fileInput.click();
//   }
  
//   // Helper function to generate new IDs with the format ID-XXXXXXXXXX
//   function generateNewId() {
//     return 'ID-' + Math.random().toString(36).substr(2, 10).toUpperCase();
//   }
  