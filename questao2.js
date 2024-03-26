// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function fibonacci(num) {
    //evitando erro de num negativo
    if(num < 0)
    return `Número inválido.`;

    //determinar o 0 e 1 em uma lista para reutilizar a partir das posições
     let fibSequencia = [0,1]
    let proxNum = fibSequencia[0] + fibSequencia[1];

    while (proxNum <= num) {
        fibSequencia.push(proxNum);
        proxNum = fibSequencia[fibSequencia.length - 1] + fibSequencia[fibSequencia.length - 2]
    }

    if (fibSequencia.includes(num)) {
        return `O número ${num} pertence à sequencia de Fibonacci`;
    } else {
        return `O número ${num} não  à sequencia de Fibonacci`;
    }
}


console.log(fibonacci(21))
console.log(fibonacci(30))