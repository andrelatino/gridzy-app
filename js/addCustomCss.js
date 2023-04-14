function applyCustomCSS() {
    var css = document.getElementById("custom-css").value;
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }