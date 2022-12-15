console.log("hello world web dev")

const buttonToggle = document.querySelector('.button-toggle')
const navListSidebar = document.querySelector('.header__navbar-sidebar')
const navListItems = document.querySelectorAll('.nav__link-header-list')

function eventHandlerToggle() {

    console.log("enter");

    if (navListSidebar.hasAttribute('hidden')) {
        this.setAttribute('aria-expanded', 'true');

        navListSidebar.removeAttribute('hidden');

        navListSidebar[0].focus();

    } else {
        this.setAttribute('aria-expanded', 'false');
    }


    document.addEventListener('keydown', (event) => {
        if (event.isComposing || event.key === 229) {
            return;
        }

        if (event.key === 27) {
            if (!navListSidebar.hasAttribute('hidden')) {
                buttonToggle.setAttribute('aria-expanded', 'false');
                navListSidebar.setAttribute('hidden', true)
            }
        }

    })

}



buttonToggle.addEventListener('click', eventHandlerToggle)