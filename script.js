// Cria elemento HTML 
function criaDivElement(coluna) {
  // novaDiv.className = classes;
  // let main = document.getElementsByTagName('main')[0];
  // main.appendChild(novaDiv);

  for(let index = 0; index < coluna; index +=1) {
    let novaDiv = document.createElement('div')
    novaDiv.className = 'pixel';
    let main = document.getElementById('pixel-board');
  
    for (let index2 = 0; index2 < coluna - 1; index2 +=1) {
      let novaColuna = document.createElement('div')
      novaColuna.className = 'pixel';
      let paiDaDiv = document.getElementById('pixel-board');
    paiDaDiv.appendChild(novaColuna);
    }
    main.appendChild(novaDiv);
  }
}
criaDivElement(5);
