
// const exportButton = document.getElementById("export-button");
// exportButton.addEventListener("click", function() {
//   // Get the grid element and clone it
//   const grid = document.getElementById("grid").cloneNode(true);

//   // Remove all delete buttons from the cloned grid
//   const deleteButtons = grid.querySelectorAll('.delete-button');
//   for (let i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].remove();
//   }

//   // Remove contenteditable attribute from all content
//   const contentItems = grid.querySelectorAll('[contenteditable="true"]');
//   for (let i = 0; i < contentItems.length; i++) {
//     contentItems[i].removeAttribute('contenteditable');
//   }

//   // Create the HTML file
//   const html = `
//     <html>
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <!-- Add custom head content here -->
//         <link rel="stylesheet" type="text/css" href="https://andrelatino.github.io/gridzy-css/gridzy.css">  
//       </head>
//       <body>
//         <div class="page">      
//           ${grid.innerHTML}
//         </div>
//         <footer>
//             <!-- Footer content here -->
//         </footer>
//       </body>
//     </html>
//   `;

//   // Create a Blob object and download the HTML file
//   const blob = new Blob([html], { type: "text/html" });
//   const a = document.createElement("a");
//   a.href = URL.createObjectURL(blob);
//   a.download = "page.html";
//   a.click();
// });