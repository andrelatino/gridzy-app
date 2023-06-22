function sectionImage(button) {
    
    showImageModal();

    const section = button.closest('section');
    const picture = section.querySelector('picture');
    var pictureID = picture.id;
    localStorage.setItem('pictureID', pictureID);
    var image = picture.querySelector('img');
    var imageID = image.id;
    localStorage.setItem('imageID', imageID);

    var relativePath = image.getAttribute('src');
    var editorDiv = document.getElementById("image-modal");

    const imageXsLocalStorage = localStorage.getItem('image-URL-XS');
   
    if (editorDiv) {
      var content = `
      <div id="image-container">  
        <div id="image-github-buttons">
          <button id="image-drag"><img src="./assets/svg/icons/drag.svg"></button>
          <button id="image-btn-all" onclick="imageAllButton();">ALL</button>
          <button id="image-btn-xl" onclick="imageXlButton();">XL</button>
          <button id="image-btn-l" onclick="imageLButton();">L</button>
          <button id="image-btn-m" onclick="imageMButton();">M</button>
          <button id="image-btn-s" onclick="imageSButton();">S</button>
          <button id="image-btn-xs" onclick=" imageXsButton(); getXsImage();">XS</button>
          <button id="image-modal-search" onclick="openImageSidebar();"><img src="./assets/svg/icons/search.svg"></button>           
        </div>
        
        <div id="image-all">          
            <img id="image-all-thumbnail" src="${relativePath}">           
            <input type="text" id="image-all-input" value="${relativePath}">
            <button id="image-all-save" onclick="imageAllUpdate('${imageID}');">SAVE</button>  
        </div>
        <div id="image-xl">
            <img id="image-xl-thumbnail" src=""> 
            <input type="text" id="image-xl-input" oninput="updateLocalStorage()"; placeholder="Image URL">
            <button id="image-xl-save" onclick="updateImageXS();">SAVE</button>    
        </div>
        <div id="image-l">
            <img id="image-l-thumbnail" src=""> 
            <input type="text" id="image-l-input" oninput="updateLocalStorage()"; placeholder="Image URL">
            <button id="image-l-save" onclick="updateImageXS();">SAVE</button>    
        </div>
        <div id="image-m">
            <img id="image-m-thumbnail" src=""> 
            <input type="text" id="image-m-input" oninput="updateLocalStorage()"; placeholder="Image URL">
            <button id="image-m-save" onclick="updateImageXS();">SAVE</button>    
        </div>
        <div id="image-s">
            <img id="image-s-thumbnail" src=""> 
            <input type="text" id="image-s-input" oninput="updateLocalStorage()"; placeholder="Image URL">
            <button id="image-s-save" onclick="updateImageXS();">SAVE</button>    
        </div>
        <div id="image-xs">
            <img id="image-xs-thumbnail" src="${imageXsLocalStorage}"> 
            <input type="text" id="image-xs-input" oninput="updateLocalStorage()"; placeholder="Image URL">
            <button id="image-xs-save" onclick="updateImageXS();">SAVE</button>    
        </div>

        </div>
        <button onclick="hideImageModal(); closeImageSidebar();" class="close-button">
          <img src="./assets/svg/icons/close.svg">
        </button>
      </div>  
      `;
      
      editorDiv.innerHTML = content;
      getXsImage();
      var imageModal = document.querySelector("#image-modal");
      var imageDrag = document.querySelector("#image-drag");
      makeElementDraggable(imageModal, imageDrag);
      
    } else {
      console.error("Editor element not found.");
    }
  }
  

  function showImageModal() {
    var divModal = document.getElementById("image-modal");
    divModal.style.display = "grid";
  }
  function hideImageModal() {
    var divModal = document.getElementById("image-modal");
    divModal.style.display = "none";
  }

