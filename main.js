//seletor de id é "#"
//seletor de classe é "."
//não tem como reproduzir som ao carregar a página, é bloqueado pelo
//navegador antes que haja alguma iteração do usuário

const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio=`#som_${instrumento}`;

    tecla.onclick = function() { //função anonima, se passar direto a função tocasom o browser vai tentar executar e dara erro pois ainda nao teve interação do usuario
        tocaSom(idAudio);
    }
    contador++;
}


//sem o parentese para não executar, apenas guardar a referencia 


//function tocaSom (idElementoAudio) {
//    document.querySelector(idElementoAudio).play();
//}
//
//for (let contador = 0; contador < listaDeTeclas.length; contador++) {
//
//    const tecla = listaDeTeclas[contador];
//    const instrumento = tecla.classList[1];
//    const idAudio = `#som_${instrumento}`; //template string
//
//    tecla.onclick = function () {
//        tocaSom(idAudio);
//    }
//
//}

//Aqui nao funcionou
//function tocaSom(idElementAudio){
//    document.querySelector(`#som_${idElementAudio}`).play();
//}
//
//let contador = 0;
//
//while (contador < listaDeTeclas.length) {
//    listaDeTeclas[contador].onclick = function() { 
//        tocaSom(listaDeTeclas[contador].classList[1]);
//    }
//    contador++;
//}
//