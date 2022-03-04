///DOM ELEMENTS//
const panels = document.querySelectorAll(".panel");

// WHEN CLICKED ON THE PHOTO AND TEXT GROW WITH FLEX CLASS///
function toggleOpen() {
    this.classList.toggle("open");
}

///WHEN CLICKED ITEMS GROWED, GET TEXT FROM TOP AND BOTTOM WITH OPEN-ACTIVE CLASS
function toggleActive(e) {
    console.log(e)
    console.log(e.propertyName)
    ///YOU CAN USE THE FONT-SIZE CLASS AS WELL IN  IF STATEMENT//
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

///EVENT LISTENERS FOR CLICK AND TRANSITION EVENTS//
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));