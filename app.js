let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
} 

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById ('agregarNumero').value);
    console.log(intentos);
    console.log(numeroDeUsuario === numeroSecreto);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor')
            }else{
                asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#agregarNumero').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');

    }else{

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja()
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute('disabled','true' );

}

condicionesIniciales()
