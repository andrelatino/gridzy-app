function importModal() {
    // create the modal HTML
    var modalHtml = `
      <div class="modal import-modal"> 
        <div class="modal-content">
            <button onClick="closeImportModal(); closeOverlay();" class="close-button"><img src="./assets/svg/icons/close.svg"></button>
            <button onClick="importSection()" class="modal-button">
              <img src="./assets/svg/icons/section.svg">
              <p>Import Section </p> 
            </button>
            <button onClick="importPage()" class="modal-button">
              <img src="./assets/svg/icons/page.svg">
              <p>Import Page </p> 
            </button>
        </div>
      </div>
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
  
  function closeImportModal() {
    // find the modal and remove it from the DOM
    const modal = document.querySelector('.import-modal');
    if (modal) {
      modal.remove();
    }
  }