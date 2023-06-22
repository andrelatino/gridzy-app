function observeGridChanges() {
    const grid = document.getElementById("grid");
  
    // Create a new MutationObserver instance
    const observer = new MutationObserver((mutationsList, observer) => {
      // Handle the observed mutations
      mutationsList.forEach((mutation) => {
        // Perform desired actions here based on the observed changes
        // console.log("Change detected:", mutation);
        
        savePage();
      });
    });
  
    // Configure and start observing the "grid" element for any changes
    const observerConfig = { childList: true, subtree: true };
    observer.observe(grid, observerConfig);
  
    // To stop observing changes, you can call observer.disconnect()
  }

  // observeGridChanges();
  