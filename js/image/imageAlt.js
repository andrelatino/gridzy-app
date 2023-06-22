function addAltAttributeAfterLoad(imageId, altText) {
  // Function to set alt attribute after the image has loaded
  function setAltAttribute() {
    image.alt = altText;
  }

  // Add event listener for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get the image element by its id
    const image = document.getElementById(imageId);
    
    // Check if image element exists
    if (image) {
      // Add event listener for the image load event
      image.addEventListener('load', setAltAttribute);
    }
  });
}

  
