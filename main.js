//seletor de id é "#"
//seletor de classe é "."
//não tem como reproduzir som ao carregar a página, é bloqueado pelo
//navegador antes que haja alguma iteração do usuário

const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    //alert(elemento.localName);
    if (elemento && elemento.localName==='audio') {
        elemento.play();
    } else {
        //quando compara somente elemento, js entende que se não é nulo, undefined, etc
        alert('Elemento não encontrado!');
    }
}

for (let contador=0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio=`#som_${instrumento}`;

    tecla.onclick = function() { //função anonima, se passar direto a função tocasom o browser vai tentar executar e dara erro pois ainda nao teve interação do usuario
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if ((evento.code == 'Space') || (evento.code == 'Enter')) {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}


//sem o parentese para não executar, apenas guardar a referencia 

//Aqui nao funcionou PQ???
//function tocaSom(idElementAudio){
//    document.querySelector(`#som_${idElementAudio}`).play();
//}
//
//let contador = 0;
//
//while (contador < listaDeTeclas.length) {
//    listaDeTeclas[contador].onclick = function() { 
//        tocaSom(listaDeTeclas[contador].classList[1]);  //pega a referência e não o valor da variável???
//    }
//    contador++;
//}
//