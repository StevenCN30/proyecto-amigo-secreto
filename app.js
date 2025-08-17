let listaAmigos = [];


function agregarAmigo() {
    let amigos = document.getElementById('amigo').value;
    console.log(listaAmigos);
    if (amigos == '' ){
        alert('Digite un nombre correcto');
    } else {
        listaAmigos.push(amigos); 
        let lista = document.getElementById('listaAmigos'); 
        let elementoLista = document.createElement("li");
        elementoLista.innerHTML = amigos;
        lista.appendChild(elementoLista);
    } return;
}


function sortearAmigos(){

    if (listaAmigos.length != " " ){
        let resultado = document.getElementById('resultado');
        let numeroAmigo = Math.floor(Math.random()*listaAmigos.length);
        const elementoResultado = document.createElement("li");
        elementoResultado.innerHTML = `El amigo secreto sorteado es ${listaAmigos[numeroAmigo]}`;
        resultado.appendChild(elementoResultado);
    } return;
}


agregarAmigo();
sortearAmigos();


