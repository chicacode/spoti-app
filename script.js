console.log("hello world web dev")

const buttonToggle = document.querySelector('.button-toggle')
const navListSidebar = document.querySelector('.navigation__link-header-sidebar')
const navListItems = document.querySelectorAll('.nav__link-header-list')
const logo = document.querySelector('.brand__logo-container')

const arrow = document.querySelectorAll('.imgq')
var newArr = []
for (let i = 0; i < arrow.length; i++) {
    arrow[i].getAttribute("aria-expanded")
}

const sum = document.querySelectorAll(".summary")
for (let i = 0; i < sum.length; i++) {
    sum[i].addEventListener("click", () => {
        console.log("hgcghsv")
        if (arrow[i].getAttribute("aria-expanded") === "false") {
            arrow[i].setAttribute("aria-expanded", "true")
        } else {
            arrow[i].setAttribute("aria-expanded", "false")
        }
    })
}

function eventHandlerToggle() {

    const visibility = navListSidebar.getAttribute("data-visible")
    if (visibility === "false") {

        navListSidebar.setAttribute("data-visible", true)

        buttonToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        navListSidebar.setAttribute("data-visible", false)
        logo.style.display = "flex"
        buttonToggle.setAttribute("aria-expanded", false)
    }

}



buttonToggle.addEventListener('click', eventHandlerToggle)