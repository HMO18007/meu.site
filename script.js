
// ===== MENU RESPONSIVO =====
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "☰ Menu";
    menuBtn.className = "menu-btn";
    nav.parentNode.insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("ativo");
    });

    function resize() {
        if (window.innerWidth <= 768) {
            menuBtn.style.display = "block";
            nav.classList.remove("ativo");
        } else {
            menuBtn.style.display = "none";
            nav.classList.add("ativo");
        }
    }

    resize();
    window.addEventListener("resize", resize);
});

// ===== TEXTO DIGITANDO =====
const texto = [
    "Desenvolvedora Web 💻",
    "Criadora de experiências digitais ✨",
    "Apaixonada por tecnologia 🎀"
];

let i = 0, j = 0;
const elemento = document.getElementById("digitando");

function digitar() {
    if (j < texto[i].length) {
        elemento.textContent += texto[i].charAt(j);
        j++;
        setTimeout(digitar, 100);
    } else {
        setTimeout(apagar, 2000);
    }
}

function apagar() {
    if (j > 0) {
        elemento.textContent = texto[i].substring(0, j - 1);
        j--;
        setTimeout(apagar, 50);
    } else {
        i = (i + 1) % texto.length;
        setTimeout(digitar, 500);
    }
}

digitar();

// ===== ANIMAÇÃO PROJETOS =====
const projetos = document.querySelectorAll(".projeto");

function animar() {
    projetos.forEach(p => {
        const pos = p.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            p.classList.add("visivel");
        }
    });
}

window.addEventListener("scroll", animar);
animar();

// ===== DARK MODE =====
const darkBtn = document.getElementById("darkToggle");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ===== FORMULÁRIO =====
const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso 💖");
    form.reset();
});
