function exportAllSections() {
    const gridDiv = document.getElementById('grid');
    const sections = gridDiv.getElementsByTagName('section');
    const jsonSections = [];
  
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const json = sectionToJSON(section);
      jsonSections.push(json);
    }
  
    const jsonString = JSON.stringify(jsonSections, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `page.json`;
    downloadLink.click();
    URL.revokeObjectURL(url);
  }
  