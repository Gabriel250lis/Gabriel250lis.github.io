let nome = prompt('nome');
alert('Bem vindo(a) ' + nome);
function conentar(){
    let divnona = document.createElement("div");
    let input = document.querySelector("#comenta");
    let comentario = document.createTextNode(`${nome}: ${input.value}`);

    let foo = document.querySelector("#com");
    divnona.appendChild(comentario);
    document.body.appendChild(divnona);
    foo.appendChild(divnona)
}

let botao = document.querySelector("#enviar");
botao.onclick = conentar;

console.log()