// Cria elemento HTML
function criaDivElement(coluna) {
  for (let index = 0; index < coluna; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.className = 'pixel';
    const main = document.getElementById('pixel-board');
    for (let index2 = 0; index2 < coluna - 1; index2 += 1) {
      const novaColuna = document.createElement('div');
      novaColuna.className = 'pixel';
      const paiDaDiv = document.getElementById('pixel-board');
    paiDaDiv.appendChild(novaColuna);
    }
    main.appendChild(novaDiv);
  }
}
criaDivElement(5);

// Requisito 7:
const acessaCor = document.querySelectorAll('.color');
for (let index = 0; index < acessaCor.length; index += 1) {
  acessaCor[index].addEventListener('click', selecionaCor);
}
function selecionaCor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Requisito 8:
const pixels = document.querySelectorAll('.pixel');
for (let percorrePixel = 0; percorrePixel < pixels.length; percorrePixel += 1) {
  pixels[percorrePixel].addEventListener('click', preenchePixel);
}

function preenchePixel(event) {
  const classeSelected = document.querySelector('.selected');
  const importaCor = window.getComputedStyle(classeSelected).getPropertyValue('background-color');
  event.target.style.backgroundColor = importaCor;
}

// Requisito 9:
function reset() {
  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', function() {
    document.location.reload(true);
  });
}
reset();
// Fontes:
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// Mentoria Summer Trybe com Bruno Feu
