function importPage() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.addEventListener("change", handleFileInputChange);
  
    fileInput.click();
  
    function handleFileInputChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
  
      reader.addEventListener("load", handleFileLoad);
      reader.readAsText(file);
  
      function handleFileLoad(event) {
        const jsonData = event.target.result;
        const data = JSON.parse(jsonData);
  
        if (data.pageHtml) {
          const newHtml = updateIds(data.pageHtml);
          localStorage.setItem("pageHtml", newHtml);
          document.getElementById("grid").innerHTML = newHtml;
          
        } else {
          console.error("Invalid file format: missing pageHtml");
        }
      }
    }
  }
  
  function updateIds(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const elements = doc.querySelectorAll("*");
  
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    elements.forEach(element => {
      if (element.id) {
        let newId = "";
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          newId += chars[randomIndex];
        }
        element.id = `ID-${newId}`;
      }
    });
  
    return doc.documentElement.innerHTML;
  }
  