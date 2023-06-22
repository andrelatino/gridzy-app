function exportPage() {
  const pageAdmin = localStorage.getItem("pageAdmin").replace(/\n\s+/g, "");
  const pageID = generatepageID();

  const data = {
    pageId: pageID,
    pageHtml: pageAdmin
  };

  const jsonData = JSON.stringify(data, null, 2).trim(); // add trim() here

  const blob = new Blob([jsonData], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `page-${pageID}.json`; 
  link.click();
}


function generatepageID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}

function removeClassIfEmpty() {
  const grid = document.getElementById("grid");
  if (grid && grid.innerHTML.trim() === "") {
    grid.classList.remove("your-class-name");
  }
}
removeClassIfEmpty();