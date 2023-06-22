function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
}
function addSection1() {
  const addSectionToGrid = document.getElementById("grid");
  const customCSS = ``;
  const customHTML = `
    <section id="${generateRandomID(7)}">
      <style id="${generateRandomID(7)}" type="text/css">${customCSS}</style>
      
      <picture id="${generateRandomID(7)}">        
        <source srcset="" media="(max-width:640px)">
        <source srcset="" media="(min-width:641px) and (max-width:768px)">
        <source srcset="" media="(min-width:769px) and (max-width:1024px)">
        <source srcset="" media="(min-width:1025px) and (max-width:1280px)">
        <source srcset="" media="(min-width:1281px)">        
        <img id="${generateRandomID(7)}" contenteditable="true" src="./assets/image/clean1.avif">
      </picture>  

      <video id="${generateRandomID(7)}" autoplay muted loop>
        <source src="./assets/video/video2.mp4" type="video/mp4">
        
      </video>

      <div id="${generateRandomID(7)}">
        <div id="${generateRandomID(7)}">
          <h2 id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet consectur et sermont</h2>
          <p id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet consectur et sermont</p>
          <div id="${generateRandomID(7)}">            
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM SIT</a>          
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM SIT</a>
          </div>
        </div>
      </div>
      ${sectionButtons()}
    </section>
  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
  savePage();
}

function addSection2() {
  const addSectionToGrid = document.getElementById("grid");
  const customCSS = ``;
  const customHTML = `
    <section id="${generateRandomID(7)}">
      <style id="${generateRandomID(7)}" type="text/css">${customCSS}</style>
      
      <video id="${generateRandomID(7)}" autoplay muted loop>
        <source src="./assets/video/video2.mp4" type="video/mp4">
      </video>

      ${sectionButtons()}
    </section>
  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
  savePage();
}