    //UNSPLASH
    function unsplash_check_api() {
        
        var unsplash_input = document.getElementById("unsplash_input");
        var unsplash_button = document.getElementById("unsplash_btn");
        var unsplash_value = unsplash_input.value;
        var unsplash_api = unsplash_value; 
        
        unsplash_button.style.background = "blue";
        unsplash_button.style.color = "white";
        unsplash_button.textContent = "Cheking API...";

        fetch(`https://api.unsplash.com/search/photos?query=""&client_id=${unsplash_api}`)

        .then(response => {
            console.log('unsplash response:',response);
            
            if (response.status === 401) {
                unsplash_button.style.background = "red";
                unsplash_button.style.color = "white";
                unsplash_button.textContent = "API is invalid";
                
            } else if (response.status === 200) {
                unsplash_button.style.background = "green";
                unsplash_button.style.color = "white";
                unsplash_button.textContent = "API is correct!";
                return response.json();
            }
        })
        .then(data => {
            console.log('unsplash data:',data);
          })
        .catch(error => {
            console.error('unsplash error:', error.message);
        });

        unsplash_save_api();
    }
    var unsplash_button = document.getElementById("unsplash_btn");
    unsplash_button.addEventListener("click", unsplash_check_api);
    //CHATGPT
    function chatgpt_check_api() {
        var chatgpt_input = document.getElementById("chatgpt_input");
        var chatgpt_button = document.getElementById("chatgpt_btn");
        var chatgpt_value = chatgpt_input.value;
        var chatgpt_api = chatgpt_value;
        var chatgpt_bearer = "Bearer "+chatgpt_api;
    
        chatgpt_button.style.background = "blue";
        chatgpt_button.style.color = "white";
        chatgpt_button.textContent = "Checking API...";
    
        fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': chatgpt_bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": "hi",
                "temperature": 1,
                "max_tokens": 1,
                "top_p": 1,
                "n": 1
            })
        })
        .then(response => {
            console.log('chatgpt response:', response);
    
            if (response.status === 401) {
                chatgpt_button.style.background = "red";
                chatgpt_button.style.color = "white";
                chatgpt_button.textContent = "API is invalid";
            } else if (response.status === 200) {
                chatgpt_button.style.background = "green";
                chatgpt_button.style.color = "white";
                chatgpt_button.textContent = "API is correct!";
                return response.json();
            }
        })
        .then(data => {
            console.log('chatgpt data:', data);
        })
        .catch(error => {
            console.error('chatgpt error:', error.message);
        });
    
        chatgpt_save_api();
    }
    var chatgpt_button = document.getElementById("chatgpt_btn");
    chatgpt_button.addEventListener("click", chatgpt_check_api);
    //GITHUB
    function github_check_api() {
        
        var github_input = document.getElementById("github_input");
        var github_button = document.getElementById("github_btn");
        var github_value = github_input.value;
        var github_api = github_value; 
        
        github_button.style.background = "blue";
        github_button.style.color = "white";
        github_button.textContent = "Cheking API...";

        const accessToken = github_api;
        const username = 'andrelatino';

        fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `token ${accessToken}`
        }
        })
        .then(response => {
            console.log('github response:', response);
    
            if (response.status === 401) {
                github_button.style.background = "red";
                github_button.style.color = "white";
                github_button.textContent = "API is invalid";
            } else if (response.status === 200) {
                github_button.style.background = "green";
                github_button.style.color = "white";
                github_button.textContent = "API is correct!";
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            // Process the data as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });

        github_save_api();
    }
    var github_button = document.getElementById("github_btn");
    github_button.addEventListener("click", github_check_api);
    //GITHUB
    function pexels_check_api() {
        
        var pexels_input = document.getElementById("pexels_input");
        var pexels_button = document.getElementById("pexels_btn");
        var pexels_value = pexels_input.value;
        var pexels_api = pexels_value; 
        
        pexels_button.style.background = "blue";
        pexels_button.style.color = "white";
        pexels_button.textContent = "Cheking API...";

        const accessToken = pexels_api;

        fetch(`https://api.pexels.com/videos/popular/`, {
        headers: {
            Authorization: `${accessToken}`
        }
        })
        .then(response => {
            console.log('pexels response:', response);
    
            if (response.status === 401) {
                pexels_button.style.background = "red";
                pexels_button.style.color = "white";
                pexels_button.textContent = "API is invalid";
            } else if (response.status === 200) {
                pexels_button.style.background = "green";
                pexels_button.style.color = "white";
                pexels_button.textContent = "API is correct!";
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            // Process the data as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });

        pexels_save_api();
    }
    var pexels_button = document.getElementById("pexels_btn");
    pexels_button.addEventListener("click", pexels_check_api);

    