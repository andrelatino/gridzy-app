function openOverlay() {
  // create overlay element
  const overlay = document.createElement('div');
  overlay.className="overlay"
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  overlay.style.zIndex = '9999';

  // add event listener to close overlay when clicked
  overlay.addEventListener('click', closeOverlay);

  // add overlay element to body
  document.body.appendChild(overlay);
}
function closeOverlay() {
  // find the overlay or modal and remove it from the DOM
  const overlayOrModal = document.querySelector('div.overlay, div.modal');
  if (overlayOrModal) {
    overlayOrModal.remove();
  }
}

    