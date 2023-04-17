document.addEventListener('DOMContentLoaded', () => {
    const gridH = document.querySelector('#grid');
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const sectionsH = gridH.querySelectorAll('section');
          const newHeight = `${70 * sectionsH.length}vh`;
          gridH.style.height = newHeight;
          localStorage.setItem('gridHeight', newHeight);
        }
      }
    });
  
    // Retrieve height from local storage on page load
    const savedHeight = localStorage.getItem('gridHeight');
    if (savedHeight) {
      gridH.style.height = savedHeight;
    }
  
    observer.observe(gridH, { childList: true });
  });