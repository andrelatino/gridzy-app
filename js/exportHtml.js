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
    <!DOCTYPE html>
    <html lang="fr" translate="no">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;font-family:system-ui;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}</style>
      </head>
      <body>
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
  
  a.download = `html-${generateRandomID(7)}`; 
  a.click();
}