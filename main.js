// Codigo para tornar calendario interativo
// Utilizando função declarativa
function colorirDia(){
// bloco de variaveis (escopo de função)
let days = document.getElementById('day').value;
let color = document.getElementById('color').value;
let calendario = document.getElementById('calendario')

// Bloco de validação de informações
if(!days){
    alert("Favor, informar um dia existente no calendário");
}
else{
    if((days > 0 )&&(days < 31)){
        let td = calendario.getElementsByTagName('td');
        td.style.backgroundColor = color;
    }
    else{
        alert("Favor informar uma data constante no calendário");
    }
}

var elementos = document.querySelectorAll('td');

// Contador de cores utilizados
var contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;
for(let i = 0; i < elementos.length; i++){
    // Obtem o estilo aplicado do elemento atual
    var estilo = window.getComputedStyle(elementos[i]);
    // obtem a cor de fundo atual da celula
    var corEstilo = estilo.backgroundColor;

    // verifica a cor e incrementa o contador correspondente
    if(corEstilo == "rgb(173,216, 230" || "Lightblue"){
        contadorAzul++;
    }
    else if(corEstilo == "rgb(152, 251, 152)" || corEstilo == "palegreen"){
        contadorVerde++;
    }
    else if(corEstilo == "rgb(255, 182, 193)" || corEstilo == "lightPink"){
        contadorRosa++;
    }
    else if(corEstilo == "rgb(106, 90, 205)" || corEstilo == "slateBlue"){
        contadorAzul++;
}

}