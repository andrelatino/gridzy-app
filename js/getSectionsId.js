function getSelectedSection() {
    const sectionToolbar = document.getElementById('section-toolbar');
    const sectionID = document.querySelector('.section-radio:checked');
    if (sectionID) {
      const selectedSectionId = sectionID.closest('section').id;
      localStorage.setItem('sectionID', selectedSectionId);
      console.log(`Section ID: ${selectedSectionId}`);
      sectionToolbar.style.visibility = 'visible';
    } else {
      localStorage.removeItem('sectionID');
      console.log('No section selected');
    }
  }

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
    

  