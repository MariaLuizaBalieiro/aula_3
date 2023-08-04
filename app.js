/*
* Objetivo: Manipular entrada de dados 
Autora: Maria Luiza 
Data: 04/08/2023
Versão: 1.0
*/
//Criando Variáveis
//var: permite criar uma variavel que pode mudar o conteúdo o escopo global
//let: permite criar uma variavel que pode mudar o conteúdo no escopo local (apenas dentro de um bloco de programação)
//const: permite criar uma constante que nunca muda o seu conteúdo (podendo ser no escopo global ou local)



// Import da bíblioteca readline (node), que recebe dados digitados pelo usuário no terminal 
var readline = require('readline');


//cria um elemento para entrada de dados do usuário
var entradaDados = readline.createInterface ({
input: process.stdin,
output: process.stdout
});
 
entradaDados.question('Digite seu nome' , function (nomeUsuario){
    //Recebe na variavel nome o conteúdo digitado
    let nome = nomeUsuario;
   
    
    
    entradaDados.question('Digite a primeira nota:' ,function(primeiraNota){
        let nota1 = primeiraNota;
        
        
        entradaDados.question('Digite a segunda nota:' ,function(segundaNota){
            let nota2 = segundaNota;
        
             
        entradaDados.question('Digite a terceira nota:' ,function(terceiraNota){
                let nota3 = terceiraNota;

                entradaDados.question('Digite a quarta nota:',function(quartaNota){
                    let nota4 = quartaNota

                    nota1 = parseFloat (primeiraNota)
                    nota2 = parseFloat(segundaNota)
                    nota3 = parseFloat(terceiraNota)
                    nota4 = parseFloat(quartaNota)

                    var mediaFinal = (nota1 + nota2 + nota3 + nota4) /4

                    console.log('Bem vindo(a) ao aplicativo,');
                    console.log('A primeira nota é:: ' + nota1);
                    console.log('A segunda nota é: ' + nota2);
                    console.log('A terceira nota é: ' + nota3);
                    console.log('A quarta nota é: ' + nota4);
                    console.log('a sua média é:' + mediaFinal);
                });
            });
        });
    });
});