// Sítio Verde — controla o giro das fichas e o medidor de leitura

const fichas = document.querySelectorAll(".ficha");
const barra = document.getElementById("preenchido");
const texto = document.getElementById("texto-medidor");
const lidas = new Set();
const totalFichas = fichas.length;

function atualizarMedidor() {
  const porcentagem = (lidas.size / totalFichas) * 100;
  barra.style.width = porcentagem + "%";
  texto.textContent = lidas.size + " / " + totalFichas + " fichas lidas";
}

fichas.forEach((ficha) => {
  ficha.addEventListener("click", function () {
    this.classList.toggle("virada");
    lidas.add(this.dataset.id);
    atualizarMedidor();
  });
});

atualizarMedidor();
