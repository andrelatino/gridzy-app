function createOverlay() {
    // create overlay element
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '99999999999';
  
    // add event listener to close overlay when clicked
    overlay.addEventListener('click', function() {
      overlay.remove();
    });
  
    // add overlay element to body
    document.body.appendChild(overlay);
  }
    
    