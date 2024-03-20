var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var saida = document.getElementById("saída-de-dados");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento= document.getElementById("logradouro");
var bairro = document.getElementById("logradouro");
var cidade = document.getElementById("logradouro");
var estado = document.getElementById("logradouro");

function alertar(event){
   // alert("Você clicou no botão!!! " + " " + nome.value);
   // var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
    //    alert("este número é par!");
   // }
   saida.innerText = "Nome: " + nome.value +
   "\n Email: " + email.value;
   "\n telefone: " + telefone.value;
   "\n cep: " + cep.value;
   "\n logradouro: " + logradouro.value;
   "\n numero: " + numero.value;
   "\n complemento: " + complemento.value;
   "\n bairro: " + bairro.value;
   "\n cidade: " + cidade.value;
   "\n estado: " + estado.value;
}


