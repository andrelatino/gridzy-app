
function deleteSectionById(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.remove();
        saveToLocalStorage();
    }
}
  
  var deleteBtn = document.getElementById('delete-btn');
  deleteBtn.addEventListener('click', function() {
  var sectionID = localStorage.getItem('sectionID');
  deleteSectionById(sectionID);
  });  