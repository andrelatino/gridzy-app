function sectionToJSON(section) {
  const json = {
    id: section.id,
    section: section.innerHTML
  };
  return json;
}



function exportSection() {
  const sectionId = localStorage.getItem('sectionID');
  if (sectionId) {
    const section = document.getElementById(sectionId);
    const json = sectionToJSON(section);
    const jsonString = JSON.stringify(json, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `section-${sectionId}.json`;
    downloadLink.click();
    URL.revokeObjectURL(url);
  } else {
    console.log('No section selected');
  }
}
