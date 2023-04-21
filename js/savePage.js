function savePage() {
    try {
      localStorage.setItem("pageHtml", grid.innerHTML);
      console.log('Page saved!');
    } catch (e) {
      console.log('Error saving to localStorage:', e);
    }
  }  

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.keyCode === 83) {
      // Call your function here
      savePage();
      
      // Prevent default browser behavior of saving the page
      event.preventDefault();
    }
  });
  
  const html = localStorage.getItem("pageHtml");
if (html) {
  grid.innerHTML = html;
}