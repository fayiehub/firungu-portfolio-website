function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = icon.getAttribute("aria-expanded") === "true";

  // Toggle classes
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Update ARIA attributes
  icon.setAttribute("aria-expanded", String(!isOpen));
  icon.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  menu.setAttribute("aria-hidden", String(isOpen));
}
