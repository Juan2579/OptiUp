const menuHamburger = document.querySelector(".navbar_menu")
const menuClose = document.querySelector(".navbar_close")

const openNavigation = () => {
    menuHamburger.style.display = "none"

    menuClose.style.display = "block"
}
const closeNavigation = () => {
    menuHamburger.style.display = "block"

    menuClose.style.display = "none"
}

