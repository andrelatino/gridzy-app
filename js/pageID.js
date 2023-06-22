
function pageID(owner, repo, path, ref, token) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${ref}`;
  
    return fetch(url, {
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.sha) {
        return data.sha;
      } else {
        throw new Error(`Error retrieving SHA for file ${path}: ${data.message}`);
      }
    })
    .catch(error => {
      console.error(`Error retrieving SHA for file ${path}: ${error}`);
    });
  }
  
   pageID('andrelatino', 'site-export', 'index.html', 'main', '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')
    .then(sha => {
      console.log(`pageID : ${sha}`);
      localStorage.setItem('pageID', sha);
  
    });