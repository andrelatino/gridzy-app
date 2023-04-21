function deleteSection() {
    const sectionId = localStorage.getItem('sectionID');
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.remove();
      localStorage.removeItem('sectionID');
      localStorage.removeItem('sectionRadioID');
      savePage();
    }  
  }
  
  