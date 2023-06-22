
function githubFileSearchEnter(event) {
  if (event.key === "Enter") {
    const inputValue = event.target.value;
    githubSearchFiles(inputValue);
  }
}

const fileGithubSearchInput = document.getElementById("file-github-sidebar-search-input");
fileGithubSearchInput.addEventListener("keypress", githubFileSearchEnter);

function githubSearchFiles(keyword) {
  removeAllFileItems();
  const url = 'https://api.github.com/repositories/631291170/contents/media/files';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      const files = data.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
      const fileGridList = document.getElementById('file-github-sidebar-grid');

      if (files.length > 0) {

              document.getElementById("file-github-sidebar-total").textContent = `${files.length} file(s) found`;
              
              files.forEach(file => {                  
              
                  const DivItems = document.createElement('div');
                  DivItems.id = file.sha;
                  DivItems.className = 'file-github-sidebar-items';
                  const fileSizeInBytes = file.size;
                  const fileSizeInKB = Math.ceil(fileSizeInBytes / 1024);
      

                  DivItems.innerHTML = `
                  
                  <img class="file-icon-preview" src="./assets/svg/icons/file.svg" loading="lazy" width="170px">                    
                  <div class="file-github-item">  
                    <p class="file-github-sidebar-url">${file.name}</p>
                    <p class="file-github-sidebar-size">${fileSizeInKB} kB</p>
                    <button id = "file-github-sidebar-delete" onclick="deleteFile('${file.sha}', '${file.url}');"><img src="./assets/svg/icons/delete-white.svg"></button>
                  </div>
                  `;
                  fileGridList.appendChild(DivItems);
              });

             
      


      } else {
        document.getElementById("file-github-sidebar-total").textContent = "0 file(s) found";
        console.log(`No files found with keyword "${keyword}".`);
      }



    })
    .catch(error => console.error(`Error: ${error}`));
}


function removeAllFileItems() {
  const fileGridList = document.getElementById('file-github-sidebar-grid');
  fileGridList.innerHTML = '';
}

function getSearchFileSize(fileUrl, callback) {
  var file = new File();
  file.src = fileUrl;
  file.onload = function() {
    var intrinsicSize = {
      width: file.naturalWidth,
      height: file.naturalHeight,
    };
    if (typeof callback === 'function') {
      callback(intrinsicSize);
    }
  };
}


function addGithubFileToBg(fileURL) {    
  console.log("Clicked file URL:", fileURL);
  var storedFileID = localStorage.getItem('fileID');
  console.log ('storedFileID is ' + storedFileID);

  var imgElementWW = document.getElementById(storedFileID);
  imgElementWW.src = fileURL;

  var relativePath = fileURL;
  var thumbnail = document.getElementById("file-all-thumbnail");
  thumbnail.src = relativePath;
}