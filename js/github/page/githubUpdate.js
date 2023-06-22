function updatePage() {
    const username = "andrelatino";
    const repoName = "site-export";
    const fileName = "index.html";
    const accessToken = "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";
  
    // Retrieve the HTML content from local storage
    const pageAdmin = localStorage.getItem('pageProd');
    currentSha = localStorage.getItem('pageID'); // Get the current SHA value of the file
    alert (currentSha);
  
    // Create the HTML file
    const html = `
    <!DOCTYPE html>
    <html lang="fr" translate="no">
      <head>
        <title>A brief, clear, informative, and unique title</title>
        <meta name="description" content="This is a concise description of the webpage's content.">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="script-src 'none'">
        <style>html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;font-family:system-ui;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}</style>
      </head>
      <body>
        <div class="page">      
          ${pageAdmin}
        </div>
        <footer>
            <!-- Footer content here -->
        </footer>
      </body>
    </html>
    `;
  
    // Call the function to update the file in the repository
    updateHtmlFileInGithub(username, repoName, fileName, html, accessToken, "Updated page in website", currentSha)
      .then(sha => {
        console.log(`Page Updated : ${sha}`);
        localStorage.setItem('pageID', sha);
      })
      .catch(error => {
        console.error(`Error updating page: ${error}`);
      });
  }

  
  function updateHtmlFileInGithub(username, repoName, fileName, content, token, commitMessage, currentSha) {
    const url = `https://api.github.com/repos/${username}/${repoName}/contents/${fileName}`;
  
    const encodedContent = btoa(unescape(encodeURIComponent(content))); // Encode the content using UTF-8
    const body = {
      message: commitMessage,
      content: encodedContent,
      sha: currentSha // Add the current SHA value of the file
    };
  
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to update file ${fileName}: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`Updated commit ${data.sha} for ${fileName} successfully.`);
      localStorage.setItem('pageID', data.content.sha);
      return data.content.sha;
    })
    .catch(error => {
      console.error(`Error updating file ${fileName}: ${error}`);
      throw error;
    });
  }
  