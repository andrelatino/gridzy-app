
function githubImageSearchEnter(event) {
  if (event.keyCode === 13 && event.target.id === "image-github-sidebar-search-input") {
      const inputValue = event.target.value;
      githubSearchImages(inputValue);
    }
  }

  const githubImageSearchInput = document.getElementById("image-github-sidebar-search-input");
  githubImageSearchInput.addEventListener("keypress", githubImageSearchEnter);
  

  function githubSearchImages(keyword) {
    githubImagesRemoveDivs();
    const url = 'https://api.github.com/repositories/631291170/contents/media/images';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        const images = data.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
        const githubImagesList = document.getElementById('image-github-sidebar-grid');

        if (images.length > 0) {

                document.getElementById("image-github-sidebar-total").textContent = `${images.length} image(s) found`;
                images.forEach(image => {

                    var imageUrl = image.download_url;        
                    getImageSize(imageUrl, function(intrinsicSize) {
                
                        const DivItems = document.createElement('div');
                        const imageSizeInBytes = image.size;
                        const imageSizeInKB = Math.ceil(imageSizeInBytes / 1024);
                        const sizeText = intrinsicSize.width + 'x' + intrinsicSize.height;
                    
                        DivItems.id = image.sha;
                        DivItems.className = 'image-github-sidebar-items';

                        DivItems.innerHTML = `
                        <img src="${image.download_url}" loading="lazy" width="170px">
                        <div class="image-github-item">  
                            <p class="image-github-sidebar-url">${image.name}</p>
                            <p class="image-github-sidebar-dimension">${sizeText}</p>
                            <p class="image-github-sidebar-size">${imageSizeInKB} kB</p>
                            <button id = "image-github-sidebar-delete" onclick="deleteFile('${image.sha}', '${image.url}');"><img src="./assets/svg/icons/delete-white.svg"></button>
                        </div>
                        `;
                        githubImagesList.appendChild(DivItems);

                    });

                    // alert (imgSha);
                    console.log(JSON.stringify(image, null, 2));
                });
        


        } else {
          document.getElementById("image-github-sidebar-total").textContent = "0 image(s) found";
          console.log(`No images found with keyword "${keyword}".`);
        }



      })
      .catch(error => console.error(`Error: ${error}`));
  }
  

function githubImagesRemoveDivs() {
    const githubImagesList = document.getElementById('image-github-sidebar-grid');
    githubImagesList.innerHTML = '';
}

function getSearchImageSize(imageUrl, callback) {
    var image = new Image();
    image.src = imageUrl;
    image.onload = function() {
      var intrinsicSize = {
        width: image.naturalWidth,
        height: image.naturalHeight,
      };
      if (typeof callback === 'function') {
        callback(intrinsicSize);
      }
    };
}


function addGithubImageToBg(imageURL) {    
    console.log("Clicked image URL:", imageURL);
    var storedImageID = localStorage.getItem('imageID');
    console.log ('storedImageID is ' + storedImageID);
 
    var imgElementWW = document.getElementById(storedImageID);
    imgElementWW.src = imageURL;

    var relativePath = imageURL;
    var thumbnail = document.getElementById("image-all-thumbnail");
    thumbnail.src = relativePath;
}