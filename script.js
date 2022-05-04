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

let classColor = document.querySelectorAll('.color');
for(index = 0; index < classColor.length; index +=1) {
  classColor[index].addEventListener('click', selectedColor);
}
let acessarClassPixel = document.getElementsByClassName('pixel');
for(index = 0; index < acessarClassPixel.length; index +=1){
  acessarClassPixel[index].addEventListener('click', selectedPixel);
}

function selectedColor(e) {
  for(let index = 0; index < classColor.length; index +=1 ) {
    removeSelectedClass(classColor[index]);
  }
  addSelectedClass(e.target);
}

function selectedElement() {
  return document.getElementsByClassName('color')[0];
  
}

function removeSelectedClass(element) {
  element.classList.remove('selected');
}

function addSelectedClass(element) {
  element.classList.add('selected');
}


function selectedPixel(e) {
  let selecionaCor =  selectedElement();
  let color = colherCor(selecionaCor);
  let click = e.target;
  cobrirComCor(click, color);
}

function colherCor(element) {
  return element.style.backgroundColor;
}

function cobrirComCor(element, color) {
  element.style.backgroundColor = color;
}

// Requisito 9:
let clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', reset);

function reset(){
  let pixelBoard = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
