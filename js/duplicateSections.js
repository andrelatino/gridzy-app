function duplicateSectionById(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var clone = section.cloneNode(true);
    var container = section.parentNode;
    container.insertBefore(clone, section.nextSibling);
    saveToLocalStorage();
  }
}

var duplicateBtn = document.getElementById('toolbar-duplicate');
duplicateBtn.addEventListener('click', function() {
  var sectionID = localStorage.getItem('sectionID');
  duplicateSectionById(sectionID);
});
