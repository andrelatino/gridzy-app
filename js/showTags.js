function showTags() {
  const grid = document.getElementById('grid');

  const elements = grid.querySelectorAll('*');
  elements.forEach(element => {
    const name = element.tagName;
    if (!element.closest('.admin-buttons')) {
      // If the element or any of its ancestors don't have the admin-buttons class,
      // add the tag attribute to the element.
      element.setAttribute('tag', name);
    }
  });

  const css = `[tag]::before {
    content: attr(tag);
  }`;

  const style = document.createElement('style');
  style.innerHTML = css;
  document.body.appendChild(style);

  // Save the tag status to localStorage
  localStorage.setItem('tagStatus', 'on');
}

function removeTags() {
  const elements = document.querySelectorAll('[tag]');
  elements.forEach(element => {
    element.removeAttribute('tag');
  });

  // Remove the style element that was added to show the tags
  const style = document.querySelector('style');
  if (style) {
    style.remove();
  }

  // Save the tag status to localStorage
  localStorage.setItem('tagStatus', 'off');
}

// Check the tag status in localStorage and show or remove the tags accordingly
const tagStatus = localStorage.getItem('tagStatus');
if (tagStatus === 'on') {
  showTags();
} else {
  removeTags();
}

// Add click event listeners to the show and remove buttons
const showButton = document.getElementById('show-tags-button');
showButton.addEventListener('click', function() {
  showTags();
});

const removeButton = document.getElementById('remove-tags-button');
removeButton.addEventListener('click', function() {
  removeTags();
});

 
  