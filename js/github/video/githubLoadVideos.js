

function openGithubVideoSidebar() {
    video = document.getElementById("video-github-sidebar");
    video.style.right = "-300px";
    video.style.transition = "right 0.5s";
    video.offsetHeight;
    video.style.right = "75px";
  }
  
  function closeGithubVideoSidebar() {
    video = document.getElementById("video-github-sidebar");
    video.style.right = "300px";
    video.style.transition = "right 0.5s";
    video.offsetHeight;
    video.style.right = "-300px";
  }

  function loadGithubVideos() {

    removeAllVideoItems();

    const username = "andrelatino";
    const repoName = "site-export";
    const folderName = "media/videos/";
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
      totalVideos = data.length;

      if (apiResponse === 'Not Found'){
        document.getElementById('video-github-sidebar-total').textContent = "0 video(s) found";
      }else{
        document.getElementById('video-github-sidebar-total').textContent = totalVideos + " video(s) found";
      }


      
      document.getElementById("video-github-sidebar-next-button").style.opacity = 1;
      const videoGridList = document.getElementById('video-github-sidebar-grid');
      
      for (const api of data) {

        var videoUrl = api.download_url;
        getVideoSize(videoUrl, function(intrinsicSize) {
        // Handle the intrinsic size as text
        const videoSize = intrinsicSize.width + 'x' + intrinsicSize.height;

        var videoPath = api.url;
        var videoSha = api.sha;
        const DivItems = document.createElement('div');
        const videoThumbnail = api.download_url;
        const videoSizeInBytes = api.size;
        const videoSizeInKB = Math.ceil(videoSizeInBytes / 1024);
        
        DivItems.id = api.sha;
        DivItems.className = 'video-github-sidebar-items';
        DivItems.innerHTML = `

          
          <video class="video-background" muted>
            <source src="${videoThumbnail}" type="video/mp4">
          </video>   
          
          <div class="video-github-item">  
            <p class="video-github-sidebar-url">${api.name}</p>
            <p class="video-github-sidebar-dimension">${videoSize}</p>
            <p class="video-github-sidebar-size">${videoSizeInKB} kB</p>
            <button id = "video-github-sidebar-delete" onclick="deleteFile('${videoSha}', '${videoPath}');"><img src="./assets/svg/icons/delete-white.svg"></button>
          </div>
        `;
        videoGridList.appendChild(DivItems);

      });//END VIDEO SIZE
        
      }//EN FOR
    
    });
}


async function deleteFile(videoSha , videoPath) {
  const url = videoPath;
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
      sha:videoSha,
    })
  };

  try {
    const response = await fetch(url, options);
    
    if (response.ok) {
      console.log('File deleted successfully');
      console.log(videoSha);
      removeVideofromDom(videoSha);
    } else {
      const error = await response.json();
      console.error('Error deleting file:', error.message);
    }
  } catch (error) {
    console.error('Error deleting file:', error.message);
  }
}


function removeVideofromDom(id) {
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
// removeVideofromDom('867de5f6f3d256f7891c7be5cdf782ab92ac60c2');


function removeAllVideoItems() {
  const videoGridList = document.getElementById('video-github-sidebar-grid');
  videoGridList.innerHTML = '';
}

function getVideoSize(videoUrl, callback) {
  var video = document.createElement('video');
  video.src = videoUrl;

  video.onloadedmetadata = function() {
    // Intrinsic size
    var intrinsicSize = {
      width: video.videoWidth,
      height: video.videoHeight,
    };

    // Pass the intrinsic size to the callback function if it's a function
    if (typeof callback === 'function') {
      callback(intrinsicSize);
    }
  };
}
