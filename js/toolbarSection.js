function sectionToolbar() {
    return `
    <button id="delete-section" onclick="deleteSection()">
    <img src="./assets/svg/icons/delete.svg">
    <span class="icon-text">Delete</span>
    </button>

    <button id="duplicate-section" onclick="duplicateSection()">
    <img src="./assets/svg/icons/duplicate.svg">
    <span class="icon-text">Duplicate</span>
    </button>

    <button id="move-section-up" onclick="moveSectionUp()">
    <img src="./assets/svg/icons/up.svg">
    <span class="icon-text">Move Up</span>
    </button>

    <button id="move-section-down" onclick="moveSectionDown()">
    <img src="./assets/svg/icons/down.svg">
    <span class="icon-text">Move Down</span>
    </button>

    <button onclick="replaceSection()">
    <img src="./assets/svg/icons/import.svg">
    <span class="icon-text">Replace</span>
    </button>

    <button onclick="exportSection()">
    <img src="./assets/svg/icons/export.svg">
    <span class="icon-text">Export</span>
    </button>   
    `;
  }