var videoPage = 1;
var videoPerPage = 20;
var videoCount= 1; 
var videoQuery = "";
var nextButton = document.getElementById('video-sidebar-next-button');

function loadDefaultVideo(){

  videoPage = 1;
  videoPerPage = 20;
  videoCount= 1; 
  videoQuery = "food";
  const container = document.getElementById('video-sidebar-grid');
  fetch(`https://api.pexels.com/videos/search?query=${videoQuery}&page=${videoPage}&per_page=${videoPerPage}`, {
    headers: {
        Authorization: "uXRsuP917oFcgOKAMcRKQChayQ4yeEx53ZhU1wg3VlmPHXw23p2xOgoZ"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const totalInput = document.getElementById('video-sidebar-total');
    const totalCount = data.total_results;    
    totalInput.textContent = "total "+totalCount;

    if (totalCount >= 20) {
      nextButton.style.visibility = 'visible'; 
    }else{
      nextButton.style.visibility = 'hidden'; 
    }
    
    if (data.videos && Array.isArray(data.videos)) {
        data.videos.forEach(item => {
            
        const gridItem = document.createElement('div');
        gridItem.classList.add('video-sidebar-items');
        
        const img = document.createElement('img');
        img.className="video-player";
        const imageId = generateRandomID(7); // Generate a random ID
        img.id = imageId; // Set the random ID as the id attribute

        const imageSize = "h=0&w=170"; // Desired size parameters
        const modifiedImageUrl = item.image.replace(/h=\d+&w=\d+/, imageSize);
        img.src = modifiedImageUrl;

        img.setAttribute('draggable', true);

        // Add click event listener to the image
        img.addEventListener('click', () => {
            const sdVideoLink = item.video_files.find(file => file.quality === 'sd').link;
            updateVideoSrc('iFTHHlw', sdVideoLink);            
            console.log('SD Video Link:', sdVideoLink);
        });



          gridItem.appendChild(img);
          container.appendChild(gridItem);
        });
    } 
      
      else {
        console.error('Invalid data format:', data);
      }
  });
}
// loadDefaultVideo();


function loadSearchVideo() { 

  videoSidebarInput = document.getElementById("video-sidebar-input");
  videoQuery = videoSidebarInput.value;

  videoPage = 1;
  videoPerPage = 20;
  videoCount= 1; 

  
  const container = document.getElementById('video-sidebar-grid');
  
  fetch(`https://api.pexels.com/videos/search?query=${videoQuery}&page=${videoPage}&per_page=${videoPerPage}`, {
    headers: {
        Authorization: "uXRsuP917oFcgOKAMcRKQChayQ4yeEx53ZhU1wg3VlmPHXw23p2xOgoZ"
    }
  })

  .then(response => response.json())
  .then(data => {
    
    var totalInput = document.getElementById('video-sidebar-total');
    var totalCount = data.total_results;
    var nextButton = document.getElementById('video-sidebar-next-button');
    totalInput.textContent = "total "+totalCount;

    if (totalCount >= 20) {
      nextButton.style.visibility = 'visible'; 
    }else{
      nextButton.style.visibility = 'hidden'; 
    }

    if (data.videos && Array.isArray(data.videos)) {
        data.videos.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('video-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          const imageSize = "h=0&w=170"; // Desired size parameters
          const modifiedImageUrl = item.image.replace(/h=\d+&w=\d+/, imageSize);
          img.src = modifiedImageUrl;

          img.setAttribute('draggable', true);

          // Add click event listener to the image
        img.addEventListener('click', () => {
            const sdVideoLink = item.video_files.find(file => file.quality === 'sd').link;
            updateVideoSrc('iFTHHlw', sdVideoLink);            
            console.log('SD Video Link:', sdVideoLink);
        });

          // Add click event listener to the image
        img.addEventListener('click', () => {
            const sdVideoLink = item.video_files.find(file => file.quality === 'sd').link;
            console.log('SD Video Link:', sdVideoLink);
        });
 
          gridItem.appendChild(img);
          container.appendChild(gridItem);
        });


      } else {
        console.error('Invalid data format:', data);
      }
  });

}

function loadNextVideos() {
  
  videoCount += 1;
  videoPage = videoCount;
  videoPerPage = 20;

  const container = document.getElementById('video-sidebar-grid');
  
  fetch(`https://api.pexels.com/videos/search?query=${videoQuery}&page=${videoPage}&per_page=${videoPerPage}`, {
    headers: {
        Authorization: "uXRsuP917oFcgOKAMcRKQChayQ4yeEx53ZhU1wg3VlmPHXw23p2xOgoZ"
    }
  })
    .then(response => response.json())
    .then(data => {     

      const textElement = document.getElementById('video-sidebar-total');
      const totalVideo = data.total_results;
      textElement.textContent = "total " + totalVideo;


      if (videoPage < totalVideo){
        nextButton.style.visibility = 'visible'; 
      }else{
        nextButton.style.visibility = 'hidden'; 
      }



      if (data.videos && Array.isArray(data.videos)) {
        data.videos.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('video-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          const imageSize = "h=0&w=170"; // Desired size parameters
          const modifiedImageUrl = item.image.replace(/h=\d+&w=\d+/, imageSize);
          img.src = modifiedImageUrl;

          img.setAttribute('draggable', true);

          // Add click event listener to the image
        img.addEventListener('click', () => {
            const sdVideoLink = item.video_files.find(file => file.quality === 'sd').link;
            updateVideoSrc('iFTHHlw', sdVideoLink);            
            console.log('SD Video Link:', sdVideoLink);
        });
        
          gridItem.appendChild(img);
          container.appendChild(gridItem);
        });
      

      } else {
        console.error('Invalid data format:', data);
      }
    });
}

function removeExistingVideo() {
  var videoItems = document.querySelectorAll(".video-sidebar-items");
  for (var i = 0; i < videoItems.length; i++) {videoItems[i].remove();}
}
 
function searchVideo() {
  removeExistingVideo();
  loadSearchVideo(); 
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && event.target.id === "video-sidebar-input") {
    searchVideo();
  }
});



function openVideoSidebar() {
  video = document.getElementById("video-sidebar");
  video.style.right = "-300px";
  video.style.transition = "right 0.5s";
  video.offsetHeight;
  video.style.right = "75px";
}

function closeVideoSidebar() {
  video = document.getElementById("video-sidebar");
  video.style.right = "300px";
  video.style.transition = "right 0.5s";
  video.offsetHeight;
  video.style.right = "-300px";
}

function updateVideoSrc(videoId, newSrc) {
    const videoElement = document.getElementById(videoId);
    
    if (videoElement) {
      const sourceElement = videoElement.querySelector('source');
      
      if (sourceElement) {
        sourceElement.src = newSrc;
        
        // Load the updated video source
        videoElement.load();
        
        // Listen for the 'loadeddata' event
        videoElement.addEventListener('loadeddata', function() {
          console.log('Video is loaded and ready to play.');
          // Perform actions when the video is loaded.
        });
      } else {
        console.error('Could not find <source> element within the video element.');
      }
    } else {
      console.error('Could not find video element with the specified ID.');
    }
  }
  