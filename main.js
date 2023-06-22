if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}  


function createMyElement() {
    class MyElement extends HTMLElement {
      constructor() {
        super();
        this.innerHTML = 'Hello, world!';
      }
    }
    customElements.define('grid', MyElement);
  }
  
  createMyElement();
  