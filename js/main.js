var aleatorio = Math.round(Math.random() * 100);

console.log(aleatorio);
var intentos = 0;


function verifyNumber() {

    intentos++;

    document.getElementById("progress").classList.add("show");
    setTimeout(function () { document.getElementById("progress").classList.remove("show"); }, 1000);

    var texto = document.getElementById("number").value;
    var numero = Number(texto);
    console.log(typeof (numero));


    if (numero > aleatorio) {
        document.getElementById("mensaje").innerHTML = "Trata con un numero menor";
    }

    else if (numero == aleatorio) {
        document.getElementById("mensaje").innerHTML = "Felicidades ganaste en " + intentos + " intentos";
        intentos = 0;

    }

    else {
        document.getElementById("mensaje").innerHTML = "Trata con un numero mayor";
    }

}

function KeyPress(e, element) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { // Enter Keycode
        verifyNumber();
    }
}