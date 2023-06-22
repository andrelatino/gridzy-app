function deleteFile(owner, repo, path, token) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  
    // Get the sha of the file to be deleted
    fetch(url, {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const sha = data.sha;
      
      // Delete the file using the retrieved sha value
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github+json'
        },
        body: JSON.stringify({
          message: `Deleted ${path}`,
          sha: sha
        })
      })
      .then(response => {
        if (response.status === 200) {
          
          console.log(`File ${path} deleted successfully.`);
          localStorage.setItem('pageID', 0);
          document.getElementById("deletePage").disabled = true; // Disable the "Delete Page" button
        } else {
          console.error(`Error deleting file ${path}: ${response.statusText}`);
        }
      })
      .catch(error => {
        console.error(`Error deleting file ${path}: ${error}`);
      });
    })
    .catch(error => {
      console.error(`Error retrieving file ${path}: ${error}`);
    });
  }
  
  document.getElementById("deletePage").onclick = function() {
    deleteFile('andrelatino', 'site-export', 'index.html', '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');
  };
  