lista = [
    { "id": 1, "imagen": "images/buho.jpg" },
    { "id": 2, "imagen": "images/tigre.jpg" },
    { "id": 3, "imagen": "images/tortuga.jpg" },
    { "id": 4, "imagen": "images/elefante.jpg" },
    { "id": 5, "imagen": "images/jirafa.jpg" },
    { "id": 6, "imagen": "images/lobo.png" },
    { "id": 7, "imagen": "images/loro.jpg" },
    { "id": 8, "imagen": "images/pinguino.jpg" },
    { "id": 9, "imagen": "images/perro.jpg" },
    { "id": 10, "imagen": "images/kanguro.jpg" }
];
imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var posActual = 0;
function inicio() {
    for (i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (10));
    }
    posActual = 0;
    verificar();
    imprimir();
}
function imprimir() {
    console.log(imagenes);
    var texto = "<img src=" + lista[imagenes[posActual]].imagen + ">";
    window.document.getElementById("imagen").innerHTML = texto;
}
function verificar() {
    if (posActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    }
    else if (posActual == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}
function anterior() {
    posActual--;
    verificar();
    imprimir();
}
function siguiente() {
    posActual++;
    verificar();
    imprimir();
}