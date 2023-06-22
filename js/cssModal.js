function editorShow() {
  const editor = document.getElementById('editor');
  editor.style.visibility = 'visible';
  localStorage.setItem('editorStatus', 'on');
}
function editorClose(){
  const editor = document.getElementById('editor');
  editor.style.visibility = 'hidden';
  localStorage.setItem('editorStatus', 'off');
}

const editorState = localStorage.getItem('editor');
if (editorState === 'on') {
  editorShow();
} else {
  editorClose();
}

// function logMediaQueryForViewportWidth() {
//   const viewportWidth = window.innerWidth;
//   if (viewportWidth <= 640) {
//     console.log('@media screen and (max-width: 640px)');
//   } else if (viewportWidth >= 641 && viewportWidth <= 768) {
//     console.log('@media screen and (min-width: 641px) and (max-width: 768px)');
//   } else if (viewportWidth >= 769 && viewportWidth <= 1024) {
//     console.log('@media screen and (min-width: 769px) and (max-width: 1024px)');
//   } else if (viewportWidth >= 1025 && viewportWidth <= 1280) {
//     console.log('@media screen and (min-width: 1025px) and (max-width: 1280px)');
//   } else {
//     console.log('@media screen and (min-width: 1281px)');
//   }
// }
// // Log the initial media query on page load
// logMediaQueryForViewportWidth();
// // Log the media query whenever the window is resized
// window.addEventListener('resize', logMediaQueryForViewportWidth);


