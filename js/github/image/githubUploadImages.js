

function handleFileInputChange() {
  var fileInput = document.getElementById('image-github-input');
  
  if (fileInput.files.length === 0) {
    // File input is empty
    console.log("No file selected.");
  } else {
    // File input is not empty
    var file = fileInput.files[0];
    console.log("Selected file:", file);
    // Perform further processing with the file
  }
}


function githubUploadImage() {
  const imageGithubModal = document.getElementById("image-github-modal");
  imageGithubModal.style.visibility = "visible";
  imageGithubModal.style.display = "grid";

  document.getElementById("image-github-upload-button").addEventListener("click", function() {
    const fileInput = document.getElementById("image-github-input");
    const file = fileInput.files[0];
    const progressBar = document.getElementById("progress-bar");
    const uploadButton = document.getElementById("image-github-upload-button");
    uploadButton.style.background = "blue";
    uploadButton.style.color = "white";
    uploadButton.textContent = "Uploading your image";
    const reader = new FileReader();

    reader.onloadend = function() {
      const imageContent = reader.result.split(",")[1];
      const username = "andrelatino";
      const repoName = "site-export";
      const folderName = "media/images/";
      const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${folderName}${file.name}`;
      const accessToken = "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";
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      };
      const payload = JSON.stringify({
        message: "Upload image",
        content: imageContent,
      });

      fetch(apiUrl, {
        method: "PUT",
        headers,
        body: payload,
      })
        .then(response => {
          if (response.status === 201) {
            githubImageStatus201();
          } else if (response.status === 422) {
            githubImageStatus422();
          } else {
            githubImageStatusError();
          }
        })
        .catch(error => {
          uploadButton.textContent = `ERROR: Image already exists in your media`;
          uploadButton.style.background = "#ff321a";
          uploadButton.disabled = true;
          console.error("Upload error:", error);
        });
    };

    reader.readAsDataURL(file);
  });
}


  var  imageModal2 = document.querySelector("#image-github-modal");
  var imageDrag2 = document.querySelector("#image-github-drag");
  makeElementDraggable(imageModal2, imageDrag2);

  document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    var fileInput2 = document.getElementById("image-github-input");
    var files2 = fileInput2.files;
    
    if (files2.length === 0) {
      console.log("No file selected.");
      const button = document.getElementById("image-github-upload-button");
      button.textContent = "Upload your image";
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
    var fileInput2 = document.getElementById("image-github-input");
    var files2 = fileInput2.files;
    
    if (files2.length === 0) {
      console.log("No file selected.");
    } else {
      
      // Handle the case when a file is selected
      console.log("File selected:");
      const button = document.getElementById("image-github-upload-button");
      button.textContent = "Upload your image";
      button.style.background = "#ffca1f";
      button.style.color = "black";
      button.disabled = false;
      button.style.cursor = "pointer";
      
    }
  }
  
  // Attach the function to the "input" event of the file input
  const fileInput2 = document.getElementById("image-github-input");
  fileInput2.addEventListener("input", checkFileInput);
  


  function githubImageStatus201(){   
    var imageUploadButton =  document.getElementById("image-github-upload-button");  
    imageUploadButton.textContent = "Image uploaded suscesfully!";
    imageUploadButton.style.background = "green";
    imageUploadButton.style.color = "white";
    imageUploadButton.disabled = true;
    imageUploadButton.style.cursor = "not-allowed";
  }

  function githubImageStatus422(){   
    var imageUploadButton =  document.getElementById("image-github-upload-button");  
    imageUploadButton.textContent = "Image already exist!";
    imageUploadButton.style.background = "red";
    imageUploadButton.style.color = "white";
    imageUploadButton.disabled = true;
    imageUploadButton.style.cursor = "not-allowed";
}

function githubImageStatusError(){   
  var imageUploadButton =  document.getElementById("image-github-upload-button");  
  imageUploadButton.textContent = "Error uploading your image";
  imageUploadButton.style.background = "red";
  imageUploadButton.style.color = "white";
  imageUploadButton.disabled = true;
  imageUploadButton.style.cursor = "not-allowed";
}

function githubImageCloseModal(){
  const closeModal = document.getElementById('image-github-modal');
  closeModal.style.display="none";
}
