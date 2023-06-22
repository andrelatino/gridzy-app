 
function addStrongTag() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        if (selectedText) {
          var newNode = document.createElement("strong");
          range.deleteContents();
          var newTextNode = document.createTextNode(selectedText);
          newNode.appendChild(newTextNode);
          newNode.setAttribute("id", "ID-" + Math.random().toString(36).substring(2, 11));
          newNode.setAttribute("contenteditable", "true");
          range.insertNode(newNode);
          selection.removeAllRanges();
          selection.addRange(range);
          savePage();
        }
      }
    }
  }
  
  
  function removeStrongTag() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var node = range.commonAncestorContainer;
        while (node && node.nodeName !== "STRONG") {
          node = node.parentNode;
        }
        if (node && node.nodeName === "STRONG") {
          var parent = node.parentNode;
          var children = node.childNodes;
          for (var i = children.length - 1; i >= 0; i--) {
            parent.insertBefore(children[i], node);
          }
          parent.removeChild(node);
          savePage();
        }
      }
    }
  }
  
  function addLink() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        var parentNode = range.commonAncestorContainer.parentNode;
        var linkNode = parentNode.closest("a");
        if (linkNode && linkNode.nodeName === "A") {
          var linkUrl = prompt("Enter the URL for the link:", linkNode.getAttribute("href"));
          if (linkUrl) {
            linkNode.setAttribute("href", linkUrl);
          }
        } else {
          if (selectedText) {
            var linkUrl = prompt("Enter the URL for the link:", "http://");
            if (linkUrl) {
              var newNode = document.createElement("a");
              var uniqueId = "ID-" + Math.floor(Math.random() * 1000000);
              newNode.setAttribute("href", linkUrl);
              newNode.setAttribute("id", uniqueId);
              newNode.setAttribute("contenteditable", "true");
              newNode.appendChild(document.createTextNode(selectedText));
              range.deleteContents();
              range.insertNode(newNode);
            }
          }
        }
      }
    }
  }
  
  
  function removeLink() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var node = range.commonAncestorContainer;
        while (node && node.nodeName !== "A") {
          node = node.parentNode;
        }
        if (node && node.nodeName === "A") {
          var parent = node.parentNode;
          var children = node.childNodes;
          for (var i = children.length - 1; i >= 0; i--) {
            parent.insertBefore(children[i], node);
          }
          parent.removeChild(node);
        }
      }
    }
  }


function addContentEditableSpan() {
    // Generate a new ID for the span element
    var newId = "ID-" + Math.random().toString(36).substring(2, 11);
    // Create the new span element with the ID and contenteditable attribute
    var newSpan = document.createElement("span");
    newSpan.setAttribute("id", newId);
    newSpan.setAttribute("contenteditable", "true");
    // Add the new span element to the document
    document.body.appendChild(newSpan);
  }
  
  function addSpanTag() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        if (selectedText) {
          var newNode = document.createElement("span");
          range.deleteContents();
          var newTextNode = document.createTextNode(selectedText);
          newNode.setAttribute("contenteditable", "true");
          newNode.setAttribute("id", "ID-" + Math.random().toString(36).substring(2, 11));
          newNode.appendChild(newTextNode);
          range.insertNode(newNode);
          selection.removeAllRanges();
          selection.addRange(range);
          savePage();
        } else {
          addContentEditableSpan();
        }
      }
    }
  }

  function removeSpanTag() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        var parentNode = range.commonAncestorContainer.parentNode;
        var spanNode = parentNode.closest("span");
        if (spanNode && spanNode.nodeName === "SPAN") {
          var spanText = spanNode.textContent;
          if (selectedText === spanText) {
            var textNode = document.createTextNode(selectedText);
            spanNode.replaceWith(textNode);
            savePage();
          }
        }
      }
    }
  }
