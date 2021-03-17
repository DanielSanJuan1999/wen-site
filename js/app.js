//Animation
setTimeout(function() {
    $('body')
    .removeClass('loading')
    .addClass('loaded');
}, 2438);

//FORMULARIO:

//  Variables

eventListener();

//  Funciones

function eventListener(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp(){
    console.log('Iniciando...');
}