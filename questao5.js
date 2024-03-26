// 5) Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


//versao navegador
// function inverteString(){

//     let texto = prompt('Digite uma string p/ inverter:');
//     let stringInvertida = '';

//     for (let i = texto.length - 1; i >= 0; i--) {
//         stringInvertida += texto[i];
//     }

//     return stringInvertida;
// };

// console.log(inverteString())



//---------------------


//versao console.log
function inverteString(texto){

    let stringInvertida = '';

    for (let i = texto.length - 1; i >= 0; i--) {
        stringInvertida += texto[i];
    }

    return stringInvertida;
};

console.log(inverteString('Dracula'))
