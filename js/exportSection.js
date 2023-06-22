// function exportSection() {
//   const sectionId = localStorage.getItem('sectionID');
//   const section = document.getElementById(sectionId);

//   if (section) {
//     // Get the inner HTML content of the section element
//     const sectionHtml = section.outerHTML;

//     // Create a JSON object with the section ID and HTML content
//     const sectionData = {
//       sectionId: sectionId,
//       sectionHtml: sectionHtml,
//     };

//     // Download the data as a JSON file
//     const dataStr = JSON.stringify(sectionData, null, 2);
//     const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
//     const exportFileName = `section-${sectionId}.json`;

//     const downloadLink = document.createElement('a');
//     downloadLink.setAttribute('href', dataUri);
//     downloadLink.setAttribute('download', exportFileName);
//     downloadLink.click();
//   }
// }
