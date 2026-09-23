// Año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Menú en celular
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", abierto);
});

// Cerrar el menú al elegir una sección
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Tema claro / oscuro (se recuerda la elección del visitante)
const themeBtn = document.querySelector(".theme-btn");
const root = document.documentElement;

function leerTema() {
  try { return localStorage.getItem("tema"); } catch { return null; }
}

function guardarTema(tema) {
  try { localStorage.setItem("tema", tema); } catch { /* sin almacenamiento */ }
}

const temaGuardado = leerTema();
const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.setAttribute("data-theme", temaGuardado || (prefiereOscuro ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  const nuevo = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nuevo);
  guardarTema(nuevo);
});
