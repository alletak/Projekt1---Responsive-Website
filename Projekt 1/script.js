document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const menu = document.getElementById("mobileMenu");
  const links = menu.querySelectorAll("a");

  function openMenu(open) {
    if (open) {
      menu.hidden = false;
      menu.classList.add("open");
    } else {
      menu.classList.remove("open");
      setTimeout(() => {
        menu.hidden = true;
      }, 250); // po animaci
    }
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
  }

  btn.addEventListener("click", () => {
    const willOpen = btn.getAttribute("aria-expanded") !== "true";
    openMenu(willOpen);
  });

  links.forEach((a) => a.addEventListener("click", () => openMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") openMenu(false);
  });
});
