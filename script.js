// ===== MENU RESPONSIVO =====
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "☰ Menu";
    menuBtn.style.background = "#e24a9eff";
    menuBtn.style.color = "white";
    menuBtn.style.border = "none";
    menuBtn.style.padding = "10px";
    menuBtn.style.cursor = "pointer";
    menuBtn.style.fontSize = "1.2rem";
    menuBtn.style.display = "none";

    // Adiciona botão antes do nav
    nav.parentNode.insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("ativo");
    });

    // Torna o menu responsivo
    function verificarTamanho() {
        if (window.innerWidth <= 768) {
            menuBtn.style.display = "block";
            nav.style.display = "none";
        } else {
            menuBtn.style.display = "none";
            nav.style.display = "flex";
        }
    }

    verificarTamanho();
    window.addEventListener("resize", verificarTamanho);
});

// ===== ROLAGEM SUAVE =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
});

// ===== ANIMAÇÃO DOS PROJETOS =====
const projetos = document.querySelectorAll(".projeto");
function animarProjetos() {
    const alturaTela = window.innerHeight;
    projetos.forEach(projeto => {
        const posicao = projeto.getBoundingClientRect().top;
        if (posicao < alturaTela - 100) {
            projeto.style.opacity = "1";
            projeto.style.transform = "translateY(0)";
        }
    });
}
projetos.forEach(p => {
    p.style.opacity = "0";
    p.style.transform = "translateY(50px)";
    p.style.transition = "all 0.6s ease";
});
window.addEventListener("scroll", animarProjetos);

// ===== FORMULÁRIO =====
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
});
