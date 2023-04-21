function duplicateSection() {
  // Get the section ID from local storage
  const sectionId = localStorage.getItem('sectionID');
  const section = document.getElementById(sectionId);

  if (section) {
    // Clone the section
    const newSection = section.cloneNode(true);

    // Generate new IDs for the new section and its child elements
    newSection.id = generateRandomID(10);
    const sectionChildren = newSection.querySelectorAll('*[id]');
    sectionChildren.forEach((child) => {
      child.id = generateRandomID(10);
    });

    // Insert the new section after the original section
    section.insertAdjacentElement('afterend', newSection);

    // Save changes to local storage
    localStorage.setItem('sectionID', newSection.id);
    const newSectionRadio = newSection.querySelector('.section-radio');
    if (newSectionRadio) {
      localStorage.setItem('sectionRadioID', newSectionRadio.id);
    }

    // Hide all section toolbars
    const sectionToolbars = document.querySelectorAll('.section-toolbar');
    sectionToolbars.forEach((sectionToolbar) => {
      sectionToolbar.style.visibility = 'hidden';
    });

    // Show the section toolbar for the new section
    const sectionToolbar = newSection.querySelector('.section-toolbar');
    if (sectionToolbar) {
      sectionToolbar.style.visibility = 'visible';
      localStorage.setItem('sectionToolbarID', sectionToolbar.id);
    }

    // Scroll to the new section
    newSection.scrollIntoView({ behavior: 'smooth' });
    savePage();
  }
}
