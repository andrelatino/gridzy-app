function showListFromSection() {
    const sectionID = localStorage.getItem('sectionID');
    const section = document.getElementById(sectionID);
  
    if (section) {
      const sectionItems = [...section.querySelectorAll('*')].filter(item => {
        // Check if the item is the last child of the section and has the 'admin-buttons' class
        if (item.parentNode === section && item.classList.contains('admin-buttons')) {
          return false;
        }
  
        let parent = item.parentNode;
        while (parent) {
          if (parent.classList && parent.classList.contains('admin-buttons')) {
            return false;
          }
          parent = parent.parentNode;
        }
        return true;
      });
  
      if (sectionItems.length === 0) {
        console.error(`No items found in section ${sectionID}`);
        return;
      }
  
      const list = document.createElement('ul');
      list.classList.add('list');
      const sectionItem = document.createElement('li');
      const sectionLink = document.createElement('a');
      sectionLink.textContent = 'section';
      sectionLink.href = '#';
      sectionLink.onclick = (event) => {
        event.preventDefault();
        const activeClass = 'active';
        const activeItem = document.querySelector('.' + activeClass);
        if (activeItem) {
          activeItem.classList.remove(activeClass);
        }
        section.classList.add(activeClass);
  
        // Update input element with section classes
        const textarea = document.getElementById('all-textarea');
        if (textarea) {
          textarea.value = [...section.classList].join('\n');
          const updatedClasses = textarea.value.split('\n').filter((c) => c.trim() !== '');
          updateElementClasses(section, updatedClasses);
        }
      };
      sectionItem.appendChild(sectionLink);
      list.appendChild(sectionItem);
  
      for (let i = 0; i < sectionItems.length; i++) {
        const item = sectionItems[i];
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');
        const itemTagName = item.nodeName.toLowerCase();
        itemLink.textContent = itemTagName;
        itemLink.href = '#';
        itemLink.onclick = (event) => {
          event.preventDefault();
          const activeClass = 'active';
          const activeItem = document.querySelector('.' + activeClass);
          if (activeItem) {
            activeItem.classList.remove(activeClass);
          }
          item.classList.add(activeClass);
  
          // Update input element with item classes
          const textarea = document.getElementById('all-textarea');
          if (textarea) {
            textarea.value = [...item.classList].join('\n');
            const updatedClasses = textarea.value.split('\n').filter((c) => c.trim() !== '');
            updateElementClasses(item, updatedClasses);
          }
        };
        listItem.appendChild(itemLink);
        list.appendChild(listItem);
      }
  
      const treeContent = document.getElementById('tree-content');
      treeContent.innerHTML = '';
      treeContent.appendChild(list);
    } else {
      console.error(`Section ${sectionID} not found`);
    }
  }
  
  showListFromSection();
