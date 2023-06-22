
// Retrieve the value of "pageID" from localStorage
const pageID = localStorage.getItem("pageID");

// Check if the pageID has a value
if (pageID) {
  // Value exists
  console.log("Page ID exists:", pageID);
} else {
  // Value does not exist
  loadPageSha();
}

function loadPageSha(){
    async function getGitHubSHA(owner, repo, filePath) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      const fileInfo = await response.json();
      const sha = fileInfo.sha;
      
      if (sha) {
        return sha;
      } else {
        throw new Error("File not found or SHA information not available");
      }
    } catch (error) {
      console.error("Error retrieving SHA:", error);
      return null;
    }
  }
  const owner = "andrelatino";
  const repo = "site-export";
  const filePath = "index.html";
  
  getGitHubSHA(owner, repo, filePath)
    .then(sha => {
      if (sha) {
        localStorage.setItem('pageID', sha);
        console.log(`The SHA of '${filePath}' on GitHub is: ${sha}`);
      } else {
        console.log("Failed to retrieve the SHA.");
      }
    });
}  