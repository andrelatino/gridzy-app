function getSectionId() {
  const sectionID = document.querySelector('.section-radio:checked');

  if (sectionID) {
    const selectedSectionId = sectionID.closest('section').id;
    const selectedSectionRadioId = sectionID.id;
    localStorage.setItem('sectionID', selectedSectionId);
    localStorage.setItem('sectionRadioID', selectedSectionRadioId);
    const selectedSectionToolbarId = sectionID.closest('section').querySelector('.section-toolbar').id;
    localStorage.setItem('sectionToolbarID', selectedSectionToolbarId);
    console.log(`Section ID: ${selectedSectionId}`);

    // Remove the "checked" attribute from all radio buttons in the group
    const radioGroup = document.getElementsByName('selectedSection');
    radioGroup.forEach((radio) => {
      if (radio.id !== selectedSectionRadioId) {
        radio.removeAttribute('checked');
      }
    });

    // Add the "checked" attribute to the selected radio button
    sectionID.setAttribute('checked', '');

    // Show the section toolbar of the current section
    showSelectedSectionToolbar();
  } else {
    localStorage.removeItem('sectionID');
    localStorage.removeItem('sectionRadioID');
    localStorage.removeItem('sectionToolbarID');
    console.log('No section selected');
  }
  saveToLocalStorage();
}



function showSelectedSectionToolbar() {
  const selectedSectionRadioId = localStorage.getItem('sectionRadioID');
  const selectedSectionToolbarId = localStorage.getItem('sectionToolbarID');
  
  // Hide all section toolbars except for the selected one
  const sectionToolbars = document.querySelectorAll('.section-toolbar');
  sectionToolbars.forEach((sectionToolbar) => {
    if (sectionToolbar.id !== selectedSectionToolbarId) {
      sectionToolbar.style.visibility = 'hidden';
    }
  });
  
  // Show the section toolbar for the selected section ID
  const selectedSectionToolbar = document.querySelector(`#${selectedSectionToolbarId}`);
  if (selectedSectionToolbar && document.getElementById(selectedSectionRadioId).checked) {
    selectedSectionToolbar.style.visibility = 'visible';
  }
  saveToLocalStorage();
}