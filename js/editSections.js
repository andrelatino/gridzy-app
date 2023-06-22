function updateElementClasses(element, classes) {
  element.classList = classes.join(' ');
  // Save the updated class list to local storage using the element's ID as the key
  localStorage.setItem(element.id, classes.join(' '));
}

function updateInput(classes) {
  const textarea = document.getElementById('all-textarea');
  if (textarea) {
    textarea.value = classes.join('\n'); // set the value of the textarea to a list of classes
    textarea.addEventListener('input', (event) => {
      const newClasses = event.target.value.split('\n');
      const elementId = event.target.getAttribute('data-element-id');
      const element = document.getElementById(elementId);
      if (element) {
        const updatedClasses = newClasses.filter((c) => c.trim() !== '');
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
      const textarea = document.getElementById('all-textarea');
      if (textarea) {
        textarea.value = classes.join('\n'); // set the value of the textarea to a list of classes
        textarea.setAttribute('data-element-id', elementId);
      }
    });
  });
}

const observer = new MutationObserver((mutationsList, observer) => {
  console.log('DOM changed');
  getElementClasses();
  savePage();
  pageSaveProd();
});

observer.observe(document, { childList: true, subtree: true });

const textarea = document.getElementById('all-textarea');

textarea.addEventListener('keydown', function(e) {
  if (e.key === ' ' && !e.shiftKey) {
    e.preventDefault();
    this.value += '\n';
  }
});