
function showTextarea(event) {
    var buttonId = event.target.id;
    var textareaId = buttonId.replace("-button", "-textarea");
  
    var allTextarea = document.getElementById("all-textarea");
    var xlTextarea = document.getElementById("xl-textarea");
    var lTextarea = document.getElementById("l-textarea");
    var mTextarea = document.getElementById("m-textarea");
    var sTextarea = document.getElementById("s-textarea");
    var xsTextarea = document.getElementById("xs-textarea");
  
    var allButton = document.getElementById("all-button");
    var xlButton = document.getElementById("xl-button");
    var lButton = document.getElementById("l-button");
    var mButton = document.getElementById("m-button");
    var sButton = document.getElementById("s-button");
    var xsButton = document.getElementById("xs-button");
  
    // Hide all textareas
    allTextarea.style.display = "none";
    xlTextarea.style.display = "none";
    lTextarea.style.display = "none";
    mTextarea.style.display = "none";
    sTextarea.style.display = "none";
    xsTextarea.style.display = "none";
  
    // Show only the clicked textarea
    var clickedTextarea = document.getElementById(textareaId);
    clickedTextarea.style.display = "grid";
  
  
    // Color the current textarea and reset the color for all other textareas
    allButton.style.backgroundColor = allTextarea.style.display === "grid" ? "#ccc" : "";
    xlButton.style.backgroundColor = xlTextarea.style.display === "grid" ? "#ccc" : "";
    lButton.style.backgroundColor = lTextarea.style.display === "grid" ? "#ccc" : "";
    mButton.style.backgroundColor = mTextarea.style.display === "grid" ? "#ccc" : "";
    sButton.style.backgroundColor = sTextarea.style.display === "grid" ? "#ccc" : "";
    xsButton.style.backgroundColor = xsTextarea.style.display === "grid" ? "#ccc" : "";
    event.target.style.backgroundColor = "red";
  
    
  }
  
  // Attach click event listeners to buttons
  
  document.getElementById("all-button").addEventListener("click", showTextarea );
  document.getElementById("xl-button").addEventListener("click", showTextarea);
  document.getElementById("l-button").addEventListener("click", showTextarea);
  document.getElementById("m-button").addEventListener("click", showTextarea);
  document.getElementById("s-button").addEventListener("click", showTextarea);
  document.getElementById("xs-button").addEventListener("click", showTextarea);
  
  // Call the function on page load to show the 'ALL' textarea by default
  showTextarea({ target: document.getElementById("all-button") });
  
  