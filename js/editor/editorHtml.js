function addCustomHTML() {
    var editorDiv = document.getElementById("editor");
    if (editorDiv) {
      var content = `
      <div id="editor-content">
        <div id="editor-header" style="display:none; grid-template-columns: 1fr 1fr 1fr;">
            
        <button id="editor-css"><img src="./assets/svg/icons/drag.svg">Visual</button>
        <button id="editor-css"><img src="./assets/svg/icons/drag.svg">Css</button>
        <button id="editor-css"><img src="./assets/svg/icons/drag.svg">Class</button>
            
        </div>
        <div id="editor-css">            
            <div id="editor-buttons">
                <button id="editor-drag"><img src="./assets/svg/icons/drag.svg"></button>
                <button id="all-button">ALL</button>
                <button id="xl-button">XL</button>
                <button id="l-button">L</button>
                <button id="m-button">M</button>
                <button id="s-button">S</button>
                <button id="xs-button">XS</button>
                
            </div>
            <div id="editor-css-inputs">
                <textarea id="all-textarea"></textarea>
                <textarea id="xl-textarea"></textarea>
                <textarea id="l-textarea"></textarea>
                <textarea id="m-textarea"></textarea>
                <textarea id="s-textarea"></textarea>
                <textarea id="xs-textarea"></textarea>
            </div>	
        </div>
        <div id="editor-list">
            <div id ="editor-list-title"> 
                <span id="editor-list-selected">Element</span>
            </div>
            <div class="editor-list-content"></div>
        </div>

        <div id="editor-tag">
          <button id="editor-css" onclick="addSpanTag();">Add Span</button>
          <button id="editor-css" onclick="removeSpanTag();">Remove Span</button>
        </div>

        <div class="inputs-ids" style="display:none;">					
            <p><span>Section:</span> <span id="sectionID-text"></span> </p>
            <p><span>Style:</span> <span id="styleID-text" ></span> </p>  
            <p><span>Element:</span> <span id="elementID-text"></span> </p>				 
		    </div>
        <button onclick="editorClose();" class="close-button">
          <img src="./assets/svg/icons/close.svg">
        </button>        
      </div>
      `;
      editorDiv.innerHTML = content;
    } else {
      console.error("Editor element not found.");
    }
  }
  addCustomHTML();
  var editor = document.querySelector("#editor");
  var editorDrag = document.querySelector("#editor-drag");
  makeElementDraggable(editor, editorDrag);

//   <button onclick="editorClose();" class="close-button">
//     <img src="./assets/svg/icons/close.svg">
//   </button>


