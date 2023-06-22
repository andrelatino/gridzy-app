function unsplash_save_api() {
    var unsplash_input = document.getElementById("unsplash_input");
    var value = unsplash_input.value;
    localStorage.setItem("unsplashID", value);
}
// var unsplash_button = document.getElementById("unsplash_btn");
// unsplash_button.addEventListener("click", unsplash_save_api);
var unsplashValue = localStorage.getItem("unsplashID");

if (unsplashValue) {
    document.getElementById("unsplash_input").value = unsplashValue;
}

function chatgpt_save_api() {
    var chatgpt_input = document.getElementById("chatgpt_input");
    var value = chatgpt_input.value;
    localStorage.setItem("chatgptID", value);
}
var chatgpt_button = document.getElementById("chatgpt_btn");
chatgpt_button.addEventListener("click", chatgpt_save_api);
var chatgptValue = localStorage.getItem("chatgptID");

if (chatgptValue) {
    document.getElementById("chatgpt_input").value = chatgptValue;
}

function github_save_api() {
    var github_input = document.getElementById("github_input");
    var value = github_input.value;
    localStorage.setItem("githubID", value);
}
var github_button = document.getElementById("github_btn");
github_button.addEventListener("click", github_save_api);
var githubValue = localStorage.getItem("githubID");

if (githubValue) {
    document.getElementById("github_input").value = githubValue;
}

function pexels_save_api() {
    var pexels_input = document.getElementById("pexels_input");
    var value = pexels_input.value;
    localStorage.setItem("pexelsID", value);
}
var pexels_button = document.getElementById("pexels_btn");
pexels_button.addEventListener("click", pexels_save_api);
var pexelsValue = localStorage.getItem("pexelsID");

if (pexelsValue) {
    document.getElementById("pexels_input").value = pexelsValue;
}

// function svgrepo_save_api() {
//     var svgrepo_input = document.getElementById("svgrepo_input");
//     var value = svgrepo_input.value;
//     localStorage.setItem("svgrepoID", value);
// }
// var svgrepo_button = document.getElementById("svgrepo_btn");
// svgrepo_button.addEventListener("click", svgrepo_save_api);
// var svgrepoValue = localStorage.getItem("svgrepoID");

// if (svgrepoValue) {
//     document.getElementById("svgrepo_input").value = svgrepoValue;
// }

function aws_save_api() {
    var aws_input = document.getElementById("aws_input");
    var value = aws_input.value;
    localStorage.setItem("awsID", value);
}
var aws_button = document.getElementById("aws_btn");
aws_button.addEventListener("click", aws_save_api);
var awsValue = localStorage.getItem("awsID");

if (awsValue) {
    document.getElementById("aws_input").value = awsValue;
}
