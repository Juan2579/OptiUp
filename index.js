const menuHamburger = document.querySelector(".navbar_menu")
const menuClose = document.querySelector(".navbar_close")
const menuHidden = document.querySelector(".navbar_mobile-hidden")

const openNavigation = () => {
    menuHamburger.style.display = "none"

    menuClose.style.display = "block"

    menuHidden.classList.add("shown")
    menuHidden.classList.remove("hidden")

}
const closeNavigation = () => {
    menuHamburger.style.display = "block"

    menuClose.style.display = "none"

    menuHidden.classList.remove("shown")
    menuHidden.classList.add("hidden")
    
}

