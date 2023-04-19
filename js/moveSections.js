
function moveSectionUp() {
  const sectionId = localStorage.getItem('sectionID');
  const section = document.getElementById(sectionId);
  
  if (section && section.previousElementSibling) {
    section.parentNode.insertBefore(section, section.previousElementSibling);
    section.scrollIntoView({ behavior: 'smooth' });
    saveToLocalStorage();
  }
}

function moveSectionDown() {
  const sectionId = localStorage.getItem('sectionID');
  const section = document.getElementById(sectionId);
  
  if (section && section.nextElementSibling) {
    section.parentNode.insertBefore(section.nextElementSibling, section);
    section.scrollIntoView({ behavior: 'smooth' });
    saveToLocalStorage();
  }
}
