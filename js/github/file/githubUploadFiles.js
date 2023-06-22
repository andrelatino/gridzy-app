
function githubUploadFile() {
  const fileGithubModal = document.getElementById("file-github-modal");
  fileGithubModal.style.visibility = "visible";
  fileGithubModal.style.display = "grid";

  document.getElementById("file-github-upload-button").addEventListener("click", function() {
  const fileInput = document.getElementById("file-github-input");
  const file = fileInput.files[0];
  const uploadButton = document.getElementById("file-github-upload-button");
  uploadButton.style.background = "blue";
  uploadButton.style.color = "white";
  uploadButton.textContent = "Uploading your file";
  const reader = new FileReader();

  reader.onloadend = function() {
    const fileContent = reader.result.split(",")[1];
    const username = "andrelatino";
    const repoName = "site-export";
    const folderName = "media/files/";
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}${file.name}`;
    const accessToken = "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";
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    const payload = JSON.stringify({
      message: "Upload file",
      content: fileContent,
    });

    fetch(apiUrl, {
      method: "PUT",
      headers,
      body: payload,
    })
      .then(response => {
        if (response.status === 201) {
          githubFileStatus201();
        } else if (response.status === 422) {
          githubFileStatus422();
        } else {
          githubFileStatusError();
        }
      })
      .catch(error => {
        uploadButton.textContent = `ERROR: File already exists in your media`;
        uploadButton.style.background = "#ff321a";
        uploadButton.disabled = true;
        console.error("Upload error:", error);
      });
  };

    reader.readAsDataURL(file);
  });
}


  var  fileModal2 = document.querySelector("#file-github-modal");
  var fileDrag2 = document.querySelector("#file-github-drag");
  makeElementDraggable(fileModal2, fileDrag2);

  document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    var fileGithubFileInput = document.getElementById("file-github-input");
    var fileGithubFiles = fileGithubFileInput.files;
    
    if (fileGithubFiles.length === 0) {
      console.log("No file selected.");
      const button = document.getElementById("file-github-upload-button");
      button.textContent = "Upload your file";
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
  var fileGithubFileInput = document.getElementById("file-github-input");
  var fileGithubFiles = fileGithubFileInput.files;
  
  if (fileGithubFiles.length === 0) {
    console.log("No file selected.");
  } else {
    
    // Handle the case when a file is selected
    console.log("File selected:");
    const button = document.getElementById("file-github-upload-button");
    button.textContent = "Upload your file";
    button.style.background = "#ffca1f";
    button.style.color = "black";
    button.disabled = false;
    button.style.cursor = "pointer";
    
  }
}
  
// Attach the function to the "input" event of the file input
const fileGithubFileInput = document.getElementById("file-github-input");
fileGithubFileInput.addEventListener("input", checkFileInput);
  
function githubFileStatus201(){   
  var fileUploadButton =  document.getElementById("file-github-upload-button");  
  fileUploadButton.textContent = "File uploaded suscesfully!";
  fileUploadButton.style.background = "green";
  fileUploadButton.style.color = "white";
  fileUploadButton.disabled = true;
  fileUploadButton.style.cursor = "not-allowed";
}

function githubFileStatus422(){   
  var fileUploadButton =  document.getElementById("file-github-upload-button");  
  fileUploadButton.textContent = "File already exist!";
  fileUploadButton.style.background = "red";
  fileUploadButton.style.color = "white";
  fileUploadButton.disabled = true;
  fileUploadButton.style.cursor = "not-allowed";
}

function githubFileStatusError(){   
  var fileUploadButton =  document.getElementById("file-github-upload-button");  
  fileUploadButton.textContent = "Error uploading your file";
  fileUploadButton.style.background = "red";
  fileUploadButton.style.color = "white";
  fileUploadButton.disabled = true;
  fileUploadButton.style.cursor = "not-allowed";
}

function githubFileCloseModal(){
  const closeModal = document.getElementById('file-github-modal');
  closeModal.style.display="none";
}
