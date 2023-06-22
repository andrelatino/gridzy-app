

function openGithubImageSidebar() {
    image = document.getElementById("image-github-sidebar");
    image.style.right = "-300px";
    image.style.transition = "right 0.5s";
    image.offsetHeight;
    image.style.right = "75px";
  }
  
  function closeGithubImageSidebar() {
    image = document.getElementById("image-github-sidebar");
    image.style.right = "300px";
    image.style.transition = "right 0.5s";
    image.offsetHeight;
    image.style.right = "-300px";
  }

  function loadGithubImages() {

    removeAllContent();

    const username = "andrelatino";
    const repoName = "site-export";
    const folderName = "media/images/";
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}`;
    const accessToken = "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";

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      
      console.log("Rate Limit Headers:");
      console.log("X-RateLimit-Limit:", response.headers.get("X-RateLimit-Limit"));
      console.log("X-RateLimit-Remaining:", response.headers.get("X-RateLimit-Remaining"));
      console.log("X-RateLimit-Used:", response.headers.get("X-RateLimit-Used"));
      console.log("X-RateLimit-Reset:", response.headers.get("X-RateLimit-Reset"));
      console.log("X-RateLimit-Resource:", response.headers.get("X-RateLimit-Resource"));
      
      return response.json();
    })
    .then(data => {
      console.log("JSON Response Data:", data);
      apiResponse = data.message;
      totalImages = data.length;

      if (apiResponse === 'Not Found'){
        document.getElementById('image-github-sidebar-total').textContent = "0 image(s) found";
      }else{
        document.getElementById('image-github-sidebar-total').textContent = totalImages + " image(s) found";
      }


      
      document.getElementById("image-github-sidebar-next-button").style.opacity = 1;
      const imageGridList = document.getElementById('image-github-sidebar-grid');
      for (const api of data) {

        var imageUrl = api.download_url;
        getImageSize(imageUrl, function(intrinsicSize) {
        // Handle the intrinsic size as text
        sizeText = intrinsicSize.width + 'x' + intrinsicSize.height;


       
        var imagePath = api.url;
        var imageSha = api.sha;
        const DivItems = document.createElement('div');
        const imageThumbnail = api.download_url;
        const imageSizeInBytes = api.size;
        const imageSizeInKB = Math.ceil(imageSizeInBytes / 1024);
        
        DivItems.id = api.sha;
        DivItems.className = 'image-github-sidebar-items';
        DivItems.innerHTML = `
          <img src="${imageThumbnail}" loading="lazy" width="170px" onclick="addGithubImageToBg('${imageThumbnail}')">          
          <div class="image-github-item">  
            <p class="image-github-sidebar-url">${api.name}</p>
            <p class="image-github-sidebar-dimension">${sizeText}</p>
            <p class="image-github-sidebar-size">${imageSizeInKB} kB</p>
            <button id = "image-github-sidebar-delete" onclick="deleteFile('${imageSha}', '${imagePath}');"><img src="./assets/svg/icons/delete-white.svg"></button>
          </div>
        `;
        imageGridList.appendChild(DivItems);

      });
        
      }
    });
}

function getImageSize(imageUrl, callback) {
  var image = new Image();
  image.src = imageUrl;

  image.onload = function() {
    // Intrinsic size
    var intrinsicSize = {
      width: image.naturalWidth,
      height: image.naturalHeight,
    };

    // Pass the intrinsic size to the callback function if it's a function
    if (typeof callback === 'function') {
      callback(intrinsicSize);
    }
  };
}

async function deleteFile(imageSha , imagePath) {
  const url = imagePath;
  const token = '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';

  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      message: 'Delete file',
      committer: {
        name: 'andrelatino',
        email: 'andre.roussille@gmail.com'
      },
      sha:imageSha,
    })
  };

  try {
    const response = await fetch(url, options);
    
    if (response.ok) {
      console.log('File deleted successfully');
      console.log(imageSha);
      removeImagefromDom(imageSha);
    } else {
      const error = await response.json();
      console.error('Error deleting file:', error.message);
    }
  } catch (error) {
    console.error('Error deleting file:', error.message);
  }
}


function removeImagefromDom(id) {
  const divElement = document.getElementById(id);

  if (divElement) {
    // Remove the div element from its parent node
    divElement.parentNode.removeChild(divElement);

    // Perform some action with the id value
    console.log('Remove div ID:', id);
    // You can add your own logic or function calls here
  } else {
    console.log('Div element not found');
  }
}

// Example usage
// removeImagefromDom('867de5f6f3d256f7891c7be5cdf782ab92ac60c2');


function removeAllContent() {
  const imageGridList = document.getElementById('image-github-sidebar-grid');
  imageGridList.innerHTML = '';
}