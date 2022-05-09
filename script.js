// Cria elemento HTML
function criaDivElement(coluna) {

  for(let index = 0; index < coluna; index +=1) {
    let novaDiv = document.createElement('div');
    novaDiv.className = 'pixel';
    let main = document.getElementById('pixel-board');
  
    for (let index2 = 0; index2 < coluna - 1; index2 +=1) {
      let novaColuna = document.createElement('div');
      novaColuna.className = 'pixel';
      let paiDaDiv = document.getElementById('pixel-board');
    paiDaDiv.appendChild(novaColuna);
    }
    main.appendChild(novaDiv);
  }
}
criaDivElement(5);

// Requisito 7:
const acessaCor = document.querySelectorAll('.color');
for (let index = 0; index < acessaCor.length; index +=1)
  acessaCor[index].addEventListener('click', selecionaCor);

function selecionaCor(event) {
  const selected =  document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Requisito 8:
const pixels = document.querySelectorAll('.pixel');
for (let percorrePixel = 0; percorrePixel < pixels.length; percorrePixel +=1) {
  pixels[percorrePixel].addEventListener('click', preenchePixel);
}

function preenchePixel(event) {
  const classeSelected = document.querySelector('.selected');
  const importandoCor = window.getComputedStyle(classeSelected, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = importandoCor;
}

// Requisito 9:
// let clearBoard = document.getElementById('clear-board');
// clearBoard.addEventListener('click', reset);

// function reset(){
//   let pixelBoard = document.getElementsByClassName('pixel');
//   for (let index = 0; index < pixels.length; index += 1) {
//     pixelBoard[index].style.backgroundColor = 'white';
//   }
// }
