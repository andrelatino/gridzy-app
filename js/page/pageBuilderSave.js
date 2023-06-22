// function savePageBuilder() {
//     const htmlElement = document.documentElement;
//     const htmlContent = htmlElement.outerHTML;
//     localStorage.setItem('pageBuilder', htmlContent);
//     console.log('HTML saved to local storage');
//   }
  
//   // Create a Mutation Observer instance
//   const observerPageBuilder = new MutationObserver(savePageBuilder);
  
//   // Configure the observer to listen for changes in the htmlElement and its subtree
//   const observerOptions = { subtree: true, childList: true };
//   observerPageBuilder.observe(document, observerOptions);
 
//   function loadPageBuilder() {
//     const storedHtml = localStorage.getItem('pageBuilder');
    
//     if (storedHtml) {
//       const htmlElement = document.documentElement;
//       htmlElement.innerHTML = storedHtml;
//       console.log('HTML loaded from local storage');
//     } else {
//       console.log('No HTML found in local storage');
//     }
//   }
  
//   loadPageBuilder();
  