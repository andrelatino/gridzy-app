
function githubUploadVideo() {
  const videoGithubModal = document.getElementById("video-github-modal");
  videoGithubModal.style.visibility = "visible";
  videoGithubModal.style.display = "grid";

  document.getElementById("video-github-upload-button").addEventListener("click", function() {
  const fileInput = document.getElementById("video-github-input");
  const file = fileInput.files[0];
  const uploadButton = document.getElementById("video-github-upload-button");
  uploadButton.style.background = "blue";
  uploadButton.style.color = "white";
  uploadButton.textContent = "Uploading your video";
  const reader = new FileReader();

  reader.onloadend = function() {
    const videoContent = reader.result.split(",")[1];
    const username = "andrelatino";
    const repoName = "site-export";
    const folderName = "media/videos/";
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}${file.name}`;
    const accessToken = "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";
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    const payload = JSON.stringify({
      message: "Upload video",
      content: videoContent,
    });

    fetch(apiUrl, {
      method: "PUT",
      headers,
      body: payload,
    })
      .then(response => {
        if (response.status === 201) {
          githubVideoStatus201();
        } else if (response.status === 422) {
          githubVideoStatus422();
        } else {
          githubVideoStatusError();
        }
      })
      .catch(error => {
        uploadButton.textContent = `ERROR: Video already exists in your media`;
        uploadButton.style.background = "#ff321a";
        uploadButton.disabled = true;
        console.error("Upload error:", error);
      });
  };

    reader.readAsDataURL(file);
  });
}


  var  videoModal2 = document.querySelector("#video-github-modal");
  var videoDrag2 = document.querySelector("#video-github-drag");
  makeElementDraggable(videoModal2, videoDrag2);

  document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    var videoGithubFileInput = document.getElementById("video-github-input");
    var videoGithubFiles = videoGithubFileInput.files;
    
    if (videoGithubFiles.length === 0) {
      console.log("No file selected.");
      const button = document.getElementById("video-github-upload-button");
      button.textContent = "Upload your video";
      button.style.background = "#ffca1f";
      button.style.color = "black";
      button.disabled = true;
      button.style.cursor = "not-allowed";
    } else {
      // Handle the case when a file is selected
      console.log("File selected:");
    }
  });

function checkFileInput() {
  var videoGithubFileInput = document.getElementById("video-github-input");
  var videoGithubFiles = videoGithubFileInput.files;
  
  if (videoGithubFiles.length === 0) {
    console.log("No file selected.");
  } else {
    
    // Handle the case when a file is selected
    console.log("File selected:");
    const button = document.getElementById("video-github-upload-button");
    button.textContent = "Upload your video";
    button.style.background = "#ffca1f";
    button.style.color = "black";
    button.disabled = false;
    button.style.cursor = "pointer";
    
  }
}
  
// Attach the function to the "input" event of the file input
const videoGithubFileInput = document.getElementById("video-github-input");
videoGithubFileInput.addEventListener("input", checkFileInput);
  
function githubVideoStatus201(){   
  var videoUploadButton =  document.getElementById("video-github-upload-button");  
  videoUploadButton.textContent = "Video uploaded suscesfully!";
  videoUploadButton.style.background = "green";
  videoUploadButton.style.color = "white";
  videoUploadButton.disabled = true;
  videoUploadButton.style.cursor = "not-allowed";
}

function githubVideoStatus422(){   
  var videoUploadButton =  document.getElementById("video-github-upload-button");  
  videoUploadButton.textContent = "Video already exist!";
  videoUploadButton.style.background = "red";
  videoUploadButton.style.color = "white";
  videoUploadButton.disabled = true;
  videoUploadButton.style.cursor = "not-allowed";
}

function githubVideoStatusError(){   
  var videoUploadButton =  document.getElementById("video-github-upload-button");  
  videoUploadButton.textContent = "Error uploading your video";
  videoUploadButton.style.background = "red";
  videoUploadButton.style.color = "white";
  videoUploadButton.disabled = true;
  videoUploadButton.style.cursor = "not-allowed";
}

function githubVideoCloseModal(){
  const closeModal = document.getElementById('video-github-modal');
  closeModal.style.display="none";
}
