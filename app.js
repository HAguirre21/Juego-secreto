let numeroSecreto ;
let intentos = 0;


function AsignarTexto(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function VerirficarNumero() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log(intentos);
    if (numeroSecreto == numeroUsuario) {
        AsignarTexto("p", "Felicidades, has adivinado el numero secreto en " + intentos + " intentos");
        document.getElementById("reiniciar").disabled = false;
    } else {
        if (numeroSecreto > numeroUsuario) {
            AsignarTexto("p", "El numero secreto es mayor");
        }else{
            AsignarTexto("p", "El numero secreto es menor");
        }
        intentos++;
        LimpiarInput();
}   
}

function LimpiarInput() {
    document.getElementById("numeroUsuario").value = "";
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random()*10)+1;
}

function Iniciales(){
AsignarTexto("h1", "Juego del numero secreto");
AsignarTexto("p", "Adivina el numero secreto entre 1 y 10");
numeroSecreto = generarNumeroAleatorio();
intentos = 1;
}

function ReiniciarJuego() {
    LimpiarInput();
    Iniciales();
    document.getElementById("reiniciar").disabled = true;

}

Iniciales();
