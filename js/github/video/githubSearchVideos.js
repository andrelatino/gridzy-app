
function githubVideoSearchEnter(event) {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      githubSearchVideos(inputValue);
    }
  }

  const imageGithubSearchInput = document.getElementById("video-github-sidebar-search-input");
  imageGithubSearchInput.addEventListener("keypress", githubVideoSearchEnter);

  function githubSearchVideos(keyword) {
    removeAllVideoItems();
    const url = 'https://api.github.com/repositories/631291170/contents/media/videos';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        const videos = data.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
        const videoGridList = document.getElementById('video-github-sidebar-grid');

        if (videos.length > 0) {

                document.getElementById("video-github-sidebar-total").textContent = `${videos.length} video(s) found`;
                
                videos.forEach(video => {                  
                
                    const DivItems = document.createElement('div');
                    DivItems.id = video.sha;
                    DivItems.className = 'video-github-sidebar-items';
                    const videoSizeInBytes = video.size;
                    const videoSizeInKB = Math.ceil(videoSizeInBytes / 1024);
        

                    DivItems.innerHTML = `
                    
                    <video class="video-background" muted><source src="${video.download_url}" type="video/mp4"></video>                    
                    <div class="video-github-item">  
                      <p class="video-github-sidebar-url">${video.name}</p>
                      <p class="video-github-sidebar-size">${videoSizeInKB} kB</p>
                      <button id = "video-github-sidebar-delete" onclick="deleteFile('${video.sha}', '${video.path}');"><img src="./assets/svg/icons/delete-white.svg"></button>
                    </div>
                    `;
                    videoGridList.appendChild(DivItems);
                });

               
        


        } else {
          document.getElementById("video-github-sidebar-total").textContent = "0 video(s) found";
          console.log(`No videos found with keyword "${keyword}".`);
        }



      })
      .catch(error => console.error(`Error: ${error}`));
  }
  

function removeAllVideoItems() {
    const videoGridList = document.getElementById('video-github-sidebar-grid');
    videoGridList.innerHTML = '';
}

function getSearchVideoSize(videoUrl, callback) {
    var video = new Video();
    video.src = videoUrl;
    video.onload = function() {
      var intrinsicSize = {
        width: video.naturalWidth,
        height: video.naturalHeight,
      };
      if (typeof callback === 'function') {
        callback(intrinsicSize);
      }
    };
}


function addGithubVideoToBg(videoURL) {    
    console.log("Clicked video URL:", videoURL);
    var storedVideoID = localStorage.getItem('videoID');
    console.log ('storedVideoID is ' + storedVideoID);
 
    var imgElementWW = document.getElementById(storedVideoID);
    imgElementWW.src = videoURL;

    var relativePath = videoURL;
    var thumbnail = document.getElementById("video-all-thumbnail");
    thumbnail.src = relativePath;
}