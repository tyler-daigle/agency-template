const menuToggle = document.getElementById("menu-toggle");
let menuAlreadySetup = false;

// the menu-toggle is set to "display: none;" on desktop. This function
// checks for that. There is no point in setting up the mobile menu
// event listeners if the menu is not visible.
const isHamburgerVisible = () =>
  getComputedStyle(menuToggle).display !== "none";

// if the window is resized we need to check if the hamburger menu is
// now visible. (But make sure not to set it up more than once)
window.addEventListener("resize", (e) => {
  if (isHamburgerVisible() && !menuAlreadySetup) {
    intializeMenu();
  }
});

// first initialization
if (isHamburgerVisible()) {
  intializeMenu();
}

function intializeMenu() {
  const mainMenu = document.getElementById("main-menu-list");
  const toggleMenu = () => {
    menuToggle.classList.toggle("toggled");
    mainMenu.classList.toggle("slide-in-menu");
  };
  menuToggle.addEventListener("click", toggleMenu);

  // setup the handlers for when the links are clicked. Clicking a link
  // in the menu should close it.
  const links = Array.from(document.querySelectorAll("#main-menu-list a"));
  links.forEach((link) => {
    link.addEventListener("click", () => toggleMenu());
  });

  menuAlreadySetup = true;
}
