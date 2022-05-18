// Cria elemento HTML
function criaDivElement(coluna) {
  for (let index = 0; index < coluna; index += 1) {
    const novaSection = document.createElement('section');
    novaSection.className = 'pixelline';
    const main = document.getElementById('pixel-board');
    main.appendChild(novaSection);
    for (let index2 = 0; index2 < coluna; index2 += 1) {
      const novaColuna = document.createElement('div');
      novaColuna.className = 'pixel';
      novaSection.appendChild(novaColuna);
    }
  }
}
criaDivElement(5);

// Requisito 7:
function selecCor() {
  const acessaCor = document.querySelectorAll('.color');
  for (let index = 0; index < acessaCor.length; index += 1) {
    acessaCor[index].addEventListener('click', selecionaCor);
  }
  function selecionaCor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
selecCor();

// Requisito 8:
function preencheCor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let percorrePixel = 0; percorrePixel < pixels.length; percorrePixel += 1) {
    pixels[percorrePixel].addEventListener('click', preenchePixel);
  }

  function preenchePixel(event) {
    const classeSelected = document.querySelector('.selected');
    const importaCor = window.getComputedStyle(classeSelected).getPropertyValue('background-color');
    event.target.style.backgroundColor = importaCor;
  }
}
preencheCor();

// Requisito 9:
function reset() {
  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', function() {
    document.location.reload(true);
  });
}
reset();

// Requisito 10:
function user() {
  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  button.addEventListener('click', () => {
    const quadroPixelss = document.querySelector('#pixel-board');
      if (input.value === '') {
        return alert('Board inválido!');
      }
      quadroPixelss.textContent = '';
      if (input.value < 5) {
        input.value = 5;
      } 
      if (input.value > 50) {
        input.value = 50;
      }
      criaDivElement(input.value);
      selecCor();
      preencheCor();
      reset();
  });
}
user();

  // Fontes:
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// Mentoria Summer Trybe com Bruno Feu

