
// Function to generate a unique random ID
function generateRandomID(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

addSection1.addEventListener("click", function() {

    const addSection1 = document.getElementById("add-button1");
    const addSectionToGrid1 = document.getElementById("grid");  
    
    const customHTML = `    
    <section id="${generateRandomID(10)}">
        <div id="${generateRandomID(10)}">
            <img id="${generateRandomID(10)}" contenteditable="true" class="height-100vh width-100vw object-fit-cover position-absolute" alt="" src="./assets/svg/1-grid-light/wave-light-10.svg"/>
        </div>
        <div id="${generateRandomID(10)}" contenteditable="true" class="padding-10 position-relative z-index-2 content-center-start height-100vh width-100vw">
            <div id="${generateRandomID(10)}" contenteditable="true" class="background-white padding-12 gap-10 cols-max-27">
                <h2 id="${generateRandomID(10)}" contenteditable="true" class="font-size-18 font-weight-200">Lorem ipsum dolor sit amet consectur et sermont</h2>
                <p id="${generateRandomID(10)}" contenteditable="true" class="font-size-10">Lorem ipsum dolor sit amet consectur et sermont</p>
                <div id="${generateRandomID(10)}" contenteditable="true" class="cols-fr-2 gap-2">
                    <a id="${generateRandomID(10)}" contenteditable="true" class="color-white background-black content-center padding-5" href="http://www">LOREM SIT</a>
                    <a id="${generateRandomID(10)}" contenteditable="true" class="color-white background-red content-center padding-5" href="http://www">LOREM SIT</a>
                </div>
            </div>
        </div>
        <div class="admin-buttons">
            <button class="delete-button">Delete</button>
            <button onclick="duplicateSection(this)">Duplicate</button>
        </div>
    </section>
    `;
    
    addSectionToGrid1.innerHTML += customHTML;
    
    const sections = document.querySelectorAll("section");
    const newSection = sections[sections.length - 1];
    newSection.scrollIntoView({ behavior: "smooth" });
    // moveSections();
    saveToLocalStorage();
    
});