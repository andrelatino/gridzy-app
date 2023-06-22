
  function imageAllUpdate(imageID) {
    var inputValue = document.getElementById('image-all-input').value;
    
    var imageElement = document.getElementById(imageID);
    if (imageElement) {
      imageElement.src = inputValue;
      
    } else {
      console.log("Image element not found with ID: " + imageID);
    }
    savePage();
  } 
  
function updateImageXS() {
    var getPictureID = localStorage.getItem('pictureID')
    var imageUrlInput = document.getElementById('image-xs-input');
    var picture = document.getElementById(getPictureID);
    var sourceXS = picture.querySelector('source[media="(max-width:640px)"]');
    var imgElement = document.getElementById('image-xs-thumbnail');
    
  
    if (imageUrlInput.value === '') {
      
        if (sourceXS) {
            picture.removeChild(sourceXS);
            localStorage.removeItem('image-URL-XS');
            imageUrlInput.value = '';
            imgElement.src = './assets/svg/icons/image.svg';
  
        }
    } else if (sourceXS && sourceXS.hasAttribute('srcset') && sourceXS.getAttribute('srcset') !== '') {
        // If the input field is not empty and the source element exists and its srcset is not empty, update it
        sourceXS.setAttribute('srcset', imageUrlInput.value);
    } else {
        // If the input field is not empty and the source element does not exist or its srcset is empty, add a new source element
        var newSource = document.createElement('source');
        newSource.setAttribute('srcset', imageUrlInput.value);
        newSource.setAttribute('media', '(max-width:640px)');
        picture.insertBefore(newSource, picture.firstChild);
    }
  
    getXsImage();
    savePage();
    
  }
  
  function updateLocalStorage() {
    var imageUrlInput = document.getElementById('image-xs-input');
    localStorage.setItem('image-URL-XS', imageUrlInput.value);
  }
  
  function getXsImage(){
    const imageXsInputConst = document.getElementById('image-xs-input');
    const imageXsLocalStorage = localStorage.getItem('image-URL-XS');
    imageXsInputConst.value = imageXsLocalStorage;
    // alert (imageXsLocalStorage);
  }
  