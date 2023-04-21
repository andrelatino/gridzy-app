function exportModal() {
    // create the modal HTML
    var modalHtml = `
      <div class="modal export-modal"> 
        <div class="modal-content">
            <button onClick="closeExportModal(); closeOverlay();" class="close-button">
            <img src="./assets/svg/icons/close.svg"></button>
            
            <button onclick="exportPage(document.getElementById('grid'))">
              <img src="./assets/svg/icons/page.svg">
              <p>Export Page</p> 
            </button>

            
            <button onclick="exportHtml(document.getElementById('grid'))">
              <img src="./assets/svg/icons/code.svg">
              <p>Export Html</p> 
            </button>

        </div>
      </div>
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
  
  function closeExportModal() {
    // find the modal and remove it from the DOM
    const modal = document.querySelector('.export-modal');
    if (modal) {
      modal.remove();
    }
  }