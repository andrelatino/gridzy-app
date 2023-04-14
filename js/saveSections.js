function saveToLocalStorage() {
    try {
      localStorage.setItem("html", grid.innerHTML);
      console.log('Saved to localStorage!');
    } catch (e) {
      console.log('Error saving to localStorage:', e);
    }
  }  

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.keyCode === 83) {
      // Call your function here
      saveToLocalStorage();
      
      // Prevent default browser behavior of saving the page
      event.preventDefault();
    }
  });
  
  const html = localStorage.getItem("html");
if (html) {
  grid.innerHTML = html;
}