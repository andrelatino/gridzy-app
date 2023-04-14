function observeSectionCount(callback) {
  const grid = document.getElementById('grid');
  
  const observer = new MutationObserver(mutations => {
    const sections = grid.querySelectorAll('section');
    const sectionCount = sections.length;
    
    callback(sectionCount);
  });
  
  observer.observe(grid, { childList: true });
  
  const initialSections = grid.querySelectorAll('section');
  const initialSectionCount = initialSections.length;
  callback(initialSectionCount);
}

observeSectionCount(sectionCount => {
  const emptySection = document.getElementById("empty-section");
  
  if (sectionCount === 0) {
    emptySection.style.display = "grid";
  } else {
    emptySection.style.display = "none";
  }
});