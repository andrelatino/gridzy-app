
function addNewHtmlFileToGithub(username, repoName, fileName, content, token, commitMessage) {
  const url = `https://api.github.com/repos/${username}/${repoName}/contents/${fileName}`;
  const encodedContent = btoa(content);

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json'
    },
    body: JSON.stringify({
      message: commitMessage,
      content: encodedContent
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to create commit for ${fileName}: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    pageID('andrelatino', 'site-export', 'index.html', 'main', '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')
    .then(sha => {
      console.log(`pageID : ${sha}`);
      localStorage.setItem('pageID', sha);
  
    });
    console.log(`Created commit ${data.sha} for ${fileName} successfully.`);
    
    return data.sha;
  })
  .catch(error => {
    console.error(`Error creating commit for ${fileName}: ${error}`);
    throw error;
  });
}


function createNewPage() {
  const username = "andrelatino";
  const repoName = "site-export";
  const fileName = "index.html";
  const accessToken = "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";

  // Retrieve the HTML content from local storage
  const pageAdmin = localStorage.getItem('pageAdmin');
  // Create the HTML file
  const html = `
    <!DOCTYPE html>
    <html lang="fr" translate="no">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

  // Call the function to create the new file in the repository
  addNewHtmlFileToGithub(username, repoName, fileName, html, accessToken, "Added new page to website")
    .then(sha => {
      getSha('andrelatino', 'site-export', 'index.html', 'main', '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')
      .then(sha => {

        console.log(`pageID : ${sha}`);
        localStorage.setItem('pageID', `${sha}`);
      });
     
    })
    .catch(error => {
      console.error(`Error creating new page: ${error}`);
      localStorage.removeItem('pageID');
    });
}


