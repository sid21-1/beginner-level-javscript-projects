const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("fa-xmark");
    });
  }
};

showMenu("header-toggle", "nav-menu");
{
  /* <i class="fa-solid fa-xmark"></i> */
}

const navLink = document.querySelectorAll(".navLink");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
