function OpenaiFetchAPI() {
  console.log("Calling GPT3");
  var promptText = document.getElementById("promptInput").value;
  var url = "https://api.openai.com/v1/completions";
  var bearer = 'Bearer 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';
  fetch(url, {
      method: 'POST',
      headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "model": "text-davinci-003",
          "prompt": promptText,
          "temperature": 1,
          "max_tokens": 1000,
          "top_p": 1,
          "n": 1
          
      })
  }).then(response => {
      return response.json();
  }).then(data=>{
      console.log(data);
      console.log(typeof data);
      console.log(Object.keys(data));
      console.log(data['choices'][0].text);

      var answer = data['choices'][0].text;
      if (answer) {
        var lines = answer.split('\n'); // Split the answer by line breaks
        var formattedResult = lines.map(line => '<p>' + line.trim() + '</p>').join('');
        document.getElementById("resultContainer").innerHTML = formattedResult;
      } else {
        document.getElementById("resultContainer").innerHTML = "<em>No result found.</em>";
      }
  }).catch(error => {
      console.log('Something bad happened ' + error);
  });
}

function openOpenaiTextSidebar() {
  image = document.getElementById("text-openai-sidebar");
  image.style.right = "-500px";
  image.style.transition = "right 0.5s";
  image.offsetHeight;
  image.style.right = "75px";
}

function closeOpenaiTextSidebar() {
  image = document.getElementById("text-openai-sidebar");
  image.style.right = "500px";
  image.style.transition = "right 0.5s";
  image.offsetHeight;
  image.style.right = "-500px";
}