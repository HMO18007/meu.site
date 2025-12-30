// ===== MENU RESPONSIVO =====
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "☰ Menu";
    menuBtn.classList.add("menu-btn");

    // Insere o botão antes do nav
    nav.parentNode.insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("ativo");
    });

    function verificarTamanho() {
        if (window.innerWidth <= 768) {
            menuBtn.style.display = "block";
            nav.classList.remove("ativo");
        } else {
            menuBtn.style.display = "none";
            nav.classList.add("ativo");
        }
    }

    verificarTamanho();
    window.addEventListener("resize", verificarTamanho);
});

// ===== ROLAGEM SUAVE =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        d

