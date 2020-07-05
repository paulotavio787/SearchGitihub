function soma(a, b){
    return a + b
}

//----------------------------O console retorna "NaN" que quer dizer que o resultado é inesistente porque ele não indentificou quais numeros é pra ele somar
console.log(soma(2));
console.log(soma());


//----------------------------Aqui nós definimos que o valor padrao para a = 1 e para b = 2
function soma2(a = 1, b = 2){
    return a + b
}
//----------------------------Neste caso ele atribui o valor 1 para a e utiliza o valor padrao para b
console.log(soma2(2));
//----------------------------Aqui ele atribui o valor padrão para os dois
console.log(soma2());


//----------------------------E o mesmo pode ser utiizado para arrow functions
const soma3 = (a = 1, b = 2) => a + b;
console.log(soma2(2));
console.log(soma2());