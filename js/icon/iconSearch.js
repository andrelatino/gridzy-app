var iconStart = 0;
var iconLimit = 20;
var iconCount= 0; 
var iconSearch = "";
var nextButton = document.getElementById('icon-sidebar-next-button');

function loadDefaultIcons(){

  iconStart = 0;
  iconLimit = 20;
  iconCount= 0; 
  iconSearch = "food";

  const container = document.getElementById('icon-sidebar-grid');
  const iconApiUrl = `https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=${iconSearch}&limit=${iconLimit}&start=${iconStart}`;
  fetch(iconApiUrl)
  .then(response => response.json())
  .then(data => {
    
    const totalInput = document.getElementById('icon-sidebar-total');
    const totalCount = data.count;
    
    totalInput.textContent = "total "+totalCount;

    if (totalCount >= 20) {
      nextButton.style.visibility = 'visible'; 
    }else{
      nextButton.style.visibility = 'hidden'; 
    }
    
    if (data.icons && Array.isArray(data.icons)) {
        data.icons.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('icon-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          img.src = item.url;
          img.setAttribute('draggable', true);
          gridItem.appendChild(img);
          container.appendChild(gridItem);
        });
      } else {
        console.error('Invalid data format:', data);
      }
  });
}
// loadDefaultIcons();


function loadSearchIcons() { 

  iconSidebarInput = document.getElementById("icon-sidebar-input");
  iconSearch = iconSidebarInput.value;

  iconStart = 0;
  iconLimit = 20;
  iconCount= 0; 

  
  const container = document.getElementById('icon-sidebar-grid');
  const iconApiUrl = `https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=${iconSearch}&limit=${iconLimit}&start=${iconStart}`;
  fetch(iconApiUrl)
  .then(response => response.json())
  .then(data => {
    
    var totalInput = document.getElementById('icon-sidebar-total');
    var totalCount = data.count;
    var nextButton = document.getElementById('icon-sidebar-next-button');
    totalInput.textContent = "total "+totalCount;

    if (totalCount >= 20) {
      nextButton.style.visibility = 'visible'; 
    }else{
      nextButton.style.visibility = 'hidden'; 
    }

    if (data.icons && Array.isArray(data.icons)) {
        data.icons.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('icon-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          img.src = item.url;
          img.setAttribute('draggable', true);
          gridItem.appendChild(img);
          container.appendChild(gridItem);
        });

        


      } else {
        console.error('Invalid data format:', data);
      }
  });

}

function loadNextIcons() {
  iconCount += 20;
  iconStart = iconCount;
  

  const container = document.getElementById('icon-sidebar-grid');
  const iconApiUrl = `https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=${iconSearch}&limit=${iconLimit}&start=${iconStart}`;
  fetch(iconApiUrl)
    .then(response => response.json())
    .then(data => {

      

      const textElement = document.getElementById('icon-sidebar-total');
      const totalIcons = data.count;
      textElement.textContent = "total " + totalIcons;


      if (iconStart < totalIcons){
        nextButton.style.visibility = 'visible'; 
      }else{
        nextButton.style.visibility = 'hidden'; 
      }



      if (data.icons && Array.isArray(data.icons)) {
        data.icons.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('icon-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          img.src = item.url;
          img.setAttribute('draggable', true);
          gridItem.appendChild(img);
          container.appendChild(gridItem);
        });
      

      } else {
        console.error('Invalid data format:', data);
      }
    });
}

function removeExistingIcons() {
  var iconItems = document.querySelectorAll(".icon-sidebar-items");
  for (var i = 0; i < iconItems.length; i++) {iconItems[i].remove();}
}
 
function searchIcons() {
  removeExistingIcons();
  loadSearchIcons(); 
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && event.target.id === "icon-sidebar-input") {
    searchIcons();
  }
});



function openIconSidebar() {
  icon = document.getElementById("icon-sidebar");
  icon.style.right = "-300px";
  icon.style.transition = "right 0.5s";
  icon.offsetHeight;
  icon.style.right = "75px";
}

function closeIconSidebar() {
  icon = document.getElementById("icon-sidebar");
  icon.style.right = "300px";
  icon.style.transition = "right 0.5s";
  icon.offsetHeight;
  icon.style.right = "-300px";
}