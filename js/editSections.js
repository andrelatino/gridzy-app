
// // function updateInput(classes) {
// //   const input = document.getElementById('class-list-input');
// //   if (input) {
// //     input.value = classes.join(' ');
// //   }
// // }

// // function getElementClasses() {
// //   const editableElements = document.querySelectorAll('[contenteditable="true"]');
// //   editableElements.forEach((element) => {
// //     element.addEventListener('click', (event) => {
// //       const classes = Array.from(event.target.classList);
// //       updateInput(classes);
// //     });
// //   });
// // }

// // const observer = new MutationObserver((mutationsList, observer) => {
// //   console.log('DOM changed');
// //   getElementClasses();
// // });

// // observer.observe(document, { childList: true, subtree: true });


// // function updateElementClasses(element, classes) {
// //   element.classList = classes;
// //   // Save the updated class list to local storage using the element's ID as the key
// //   localStorage.setItem(element.id, classes);
// // }

// // function updateInput(classes) {
// //   const input = document.getElementById('class-list-input');
// //   if (input) {
// //     input.value = classes.join(' ');
// //     input.addEventListener('input', (event) => {
// //       const newClasses = event.target.value.split(' ');
// //       const element = document.getElementById('class-list-input');
// //       if (element) {
// //         updateElementClasses(element, newClasses);
// //       }
// //     });
// //   }
// // }


// // function getElementClasses() {
// //   const editableElements = document.querySelectorAll('[contenteditable="true"]');
// //   editableElements.forEach((element) => {
// //     element.addEventListener('click', (event) => {
// //       const classes = Array.from(event.target.classList);
// //       updateInput(classes);
// //       const inputElement = document.getElementById('input-element');
// //       if (inputElement) {
// //         inputElement.value = event.target.id;
// //         inputElement.setAttribute('data-original-classes', classes.join(' '));
// //       }
// //     });
// //   });
// // }

// // const observer = new MutationObserver((mutationsList, observer) => {
// //   console.log('DOM changed');
// //   getElementClasses();
// // });

// // observer.observe(document, { childList: true, subtree: true });


// function updateElementClasses(element, classes) {
//   element.classList = classes.join(' ');
//   // Save the updated class list to local storage using the element's ID as the key
//   localStorage.setItem(element.id, classes.join(' '));
// }

// function updateInput(classes) {
//   const input = document.getElementById('class-list-input');
//   if (input) {
//     input.value = classes.join(' ');
//     input.addEventListener('input', (event) => {
//       const newClasses = event.target.value.split(' ');
//       const element = document.getElementById('class-list-input');
//       if (element) {
//         updateElementClasses(element, newClasses);
//       }
//     });
//   }
// }


// function getElementClasses() {
//   const editableElements = document.querySelectorAll('[contenteditable="true"]');
//   editableElements.forEach((element) => {
//     element.addEventListener('click', (event) => {
//       const classes = Array.from(event.target.classList);
//       updateInput(classes);
//       const inputElement = document.getElementById('input-element');
//       if (inputElement) {
//         inputElement.value = event.target.id;
//         inputElement.setAttribute('data-original-classes', classes.join(' '));
//       }
//     });
//   });
// }

// const observer = new MutationObserver((mutationsList, observer) => {
//   console.log('DOM changed');
//   getElementClasses();
// });

// observer.observe(document, { childList: true, subtree: true });

function updateElementClasses(element, classes) {
  element.classList = classes.join(' ');
  // Save the updated class list to local storage using the element's ID as the key
  localStorage.setItem(element.id, classes.join(' '));
}

function updateInput(classes) {
  const input = document.getElementById('class-list-input');
  if (input) {
    input.value = classes.join(' ');
    input.addEventListener('input', (event) => {
      const newClasses = event.target.value.split(' ');
      const elementId = event.target.getAttribute('data-element-id');
      const element = document.getElementById(elementId);
      if (element) {
        const updatedClasses = newClasses.filter((c) => c !== '');
        updateElementClasses(element, updatedClasses);
      }
    });
  }
}

function getElementClasses() {
  const editableElements = document.querySelectorAll('[contenteditable="true"]');
  editableElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      const classes = Array.from(event.target.classList);
      const elementId = event.target.id;
      updateInput(classes);
      const inputElement = document.getElementById('class-list-input');
      if (inputElement) {
        inputElement.value = classes.join(' ');
        inputElement.setAttribute('data-element-id', elementId);
        // saveElementId();
      }
    });
  });
}

const observer = new MutationObserver((mutationsList, observer) => {
  console.log('DOM changed');
  getElementClasses();
  saveToLocalStorage();
});

observer.observe(document, { childList: true, subtree: true });
