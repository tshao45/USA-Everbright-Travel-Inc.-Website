// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
})

// Collapsable
document.querySelectorAll(".collapsible-title").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector(".collapsible-icon");

      // Toggle visibility of content
      content.style.display = content.style.display === "block" ? "none" : "block";
      
      // Change icon between '+' and '-'
      icon.textContent = content.style.display === "block" ? "-" : "+";
    });
});


