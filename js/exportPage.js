function exportPage() {
    const pageHtml = localStorage.getItem("pageHtml");
    const pageId = generatePageId();
  
    const data = {
      pageId: pageId,
      pageHtml: pageHtml
    };
  
    const jsonData = JSON.stringify(data, null, 2);
  
    const blob = new Blob([jsonData], { type: "application/json" });
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `page-${pageId}.json`; 
    link.click();
  }
  
  function generatePageId() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      id += chars[randomIndex];
    }
    return "ID-" + id;
  }
  