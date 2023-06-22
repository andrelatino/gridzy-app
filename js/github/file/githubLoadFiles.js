

function openGithubFileSidebar() {
    file = document.getElementById("file-github-sidebar");
    file.style.right = "-300px";
    file.style.transition = "right 0.5s";
    file.offsetHeight;
    file.style.right = "75px";
  }
  
  function closeGithubFileSidebar() {
    file = document.getElementById("file-github-sidebar");
    file.style.right = "300px";
    file.style.transition = "right 0.5s";
    file.offsetHeight;
    file.style.right = "-300px";
  }

  function loadGithubFiles() {

    removeAllContent();

    const username = "andrelatino";
    const repoName = "site-export";
    const folderName = "media/files/";
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
      totalFiles = data.length;

      if (apiResponse === 'Not Found'){
        document.getElementById('file-github-sidebar-total').textContent = "0 file(s) found";
      }else{
        document.getElementById('file-github-sidebar-total').textContent = totalFiles + " file(s) found";
      }


      
      document.getElementById("file-github-sidebar-next-button").style.opacity = 1;
      const fileGridList = document.getElementById('file-github-sidebar-grid');
      
      for (const api of data) {

        // var fileUrl = api.download_url;
        // getFileSize(fileUrl, function(intrinsicSize) {
        // // Handle the intrinsic size as text
        // const fileSize = intrinsicSize.width + 'x' + intrinsicSize.height;

        var filePath = api.url;
        var fileSha = api.sha;
        const fileDivItems = document.createElement('div');
        const fileSizeInBytes = api.size;
        const fileSizeInKB = Math.ceil(fileSizeInBytes / 1024);
        
        fileDivItems.id = api.sha;
        fileDivItems.className = 'file-github-sidebar-items';
        fileDivItems.innerHTML = `
        <img class="file-icon-preview" src="./assets/svg/icons/file.svg" loading="lazy" width="170px">
          <div class="file-github-item">  
            <p class="file-github-sidebar-url">${api.name}</p>
            <p class="video-github-sidebar-size">${fileSizeInKB} kB</p>
            <button id = "file-github-sidebar-delete" onclick="deleteFile('${fileSha}', '${filePath}');"><img src="./assets/svg/icons/delete-white.svg"></button>
          </div>
        `;
        fileGridList.appendChild(fileDivItems);

      // });//END VIDEO SIZE
        
      }//EN FOR
    
    });
}


async function deleteFile(fileSha , filePath) {
  const url = filePath;
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
      sha:fileSha,
    })
  };

  try {
    const response = await fetch(url, options);
    
    if (response.ok) {
      console.log('File deleted successfully');
      console.log(fileSha);
      removeFilefromDom(fileSha);
    } else {
      const error = await response.json();
      console.error('Error deleting file:', error.message);
    }
  } catch (error) {
    console.error('Error deleting file:', error.message);
  }
}


function removeFilefromDom(id) {
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
// removeFilefromDom('867de5f6f3d256f7891c7be5cdf782ab92ac60c2');


function removeAllContent() {
  const fileGridList = document.getElementById('file-github-sidebar-grid');
  fileGridList.innerHTML = '';
}

function getFileSize(fileUrl, callback) {
  var file = document.createElement('file');
  file.src = fileUrl;

  file.onloadedmetadata = function() {
    // Intrinsic size
    var intrinsicSize = {
      width: file.fileWidth,
      height: file.fileHeight,
    };

    // Pass the intrinsic size to the callback function if it's a function
    if (typeof callback === 'function') {
      callback(intrinsicSize);
    }
  };
}

function validateFile() {
  var allowedExtensions = ['.docx', '.pptx', '.xlsx', '.txt', '.pdf', '.zip', '.gz', '.tgz'];
  var fileInput = document.getElementById('file-github-input');
  var filePath = fileInput.value;
  var fileExtension = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();

  if (allowedExtensions.indexOf(fileExtension) === -1) {
    alert('Please upload a valid file with one of the following extensions: .docx, .pptx, .xlsx, .txt, .pdf, .zip, .gz, .tgz');
    return false;
  }
  return true;
}