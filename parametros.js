//parâmetros de função

function soma(n1, n2){
    return n1 + n2;
}

// console.log(soma(2, 2))
// console.log(soma(252, 20))
// console.log(soma(500, 60))

//parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Smith", 35))

function multiplica(n1 = 1, n2 = 2) {
    return n1 * n2;
}

console.log(multiplica(soma(4, 5)))