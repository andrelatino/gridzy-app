
function generateRandomID(length) {
    var result = 'ID-';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
const addSection1 = document.getElementById("add-button1");
const addSectionToGrid1 = document.getElementById("grid");  
addSection1.addEventListener("click", function() {
    
    const customHTML = `    
    <section id="${generateRandomID(10)}" class="test-class">
        <div id="${generateRandomID(10)}">
            <img id="${generateRandomID(10)}" contenteditable="true" class="height-100vh width-100vw object-fit-cover position-absolute" alt="" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
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
            <div class="selectedInput">
                <input id="${generateRandomID(10)}" type="radio" name="selectedSection" class="section-radio" onchange="getSectionId(); showSelectedSectionToolbar();">
            </div>
            <div id="${generateRandomID(10)}" class="section-toolbar" style="visibility:hidden;">                
                ${sectionToolbar()}
            </div>
        </div>
    </section>
    `;
    
    addSectionToGrid1.innerHTML += customHTML;
    
    const sections = document.querySelectorAll("section");
    const newSection = sections[sections.length - 1];
    newSection.scrollIntoView({ behavior: "smooth" });
    // moveSections();
    savePage();
    
});

