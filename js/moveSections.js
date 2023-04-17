function moveSection(sectionId, direction) {
  const section = document.getElementById(sectionId);
  const sibling = direction === 'up' ? section.previousElementSibling : section.nextElementSibling;
  if (sibling) {
    section.parentNode.insertBefore(section, direction === 'up' ? sibling : sibling.nextElementSibling);
    section.scrollIntoView({ behavior: 'smooth' });
    saveToLocalStorage();
  }
}

const moveUpBtn = document.querySelector('.move-up-button');
moveUpBtn.addEventListener('click', function() {
  const sectionId = localStorage.getItem('sectionID');
  moveSection(sectionId, 'up');
});

const moveDownBtn = document.querySelector('.move-down-button');
moveDownBtn.addEventListener('click', function() {
  const sectionId = localStorage.getItem('sectionID');
  moveSection(sectionId, 'down');
});