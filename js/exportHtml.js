function exportHtml(grid) {
  // Clone the grid element
  const clonedGrid = grid.cloneNode(true);

  // Remove all delete buttons from the cloned grid
  const deleteButtons = clonedGrid.querySelectorAll('.admin-buttons');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].remove();
  }

  // Remove contenteditable attribute from all content
  const contentItems = clonedGrid.querySelectorAll('[contenteditable="true"]');
  for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].removeAttribute('contenteditable');
  }

  // Create the HTML file
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Add custom head content here -->
        <link rel="stylesheet" type="text/css" href="https://andrelatino.github.io/gridzy-css/gridzy.css">  
      </head>
      <body style="overflow-x:hidden;">
        <div class="page">      
          ${clonedGrid.innerHTML}
        </div>
        <footer>
            <!-- Footer content here -->
        </footer>
      </body>
    </html>
  `;

  // Create a Blob object and download the HTML file
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  
  a.download = `html-${generateHtmlId(10)}`; 
  a.click();
}

function generateHtmlId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return "ID-" + id;
}

