const toggle = document.querySelector(".dropdown");
const menu = document.querySelector(".dropdown");

function toggleMenu() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
    toggle.querySelector("a").innerHTML = "&#9776;";
  } else {
    menu.classList.add("is-active");
    toggle.querySelector("a").innerHTML = "&#10005;";
  }
}

toggle.addEventListener("click", toggleMenu, false);
document.addEventListener("click", closeSubmenu, false);
