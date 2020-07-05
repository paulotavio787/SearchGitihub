//-->REST
//-------------------------------------Serve para pegarmos o resto das propriedades

//Rest in Objects
{
    const usuario = {
        nome: "Paulo Octavio",
        idade: 15,
        Escola: "Visao-Seb"
    };
    
    //-------------------------------------Atraves da desestruturação armazenamos o objeto nome na constante nome e armazenamos todo o restante na variavel resto
    const {nome, ...resto} = usuario;
    console.log(nome);
    //-------------------------------------Aqui podemos observar que ele mostra todos os outros objetos a não ser o nome
    console.log(resto);
}

console.log("");

//Rest in Arrays
{
    const usuarioArr = [1, 2, 3, 4];
//-------------------------------------Ao contrario do rest aplicado nos objetos os aplicados em arrays utilisao colchetes e não chaves
const [a, b, ...restoArr] = usuarioArr

console.log(a + b);
console.log(restoArr);
}

console.log("");

//Rest in Functions
{
    //-------------------------------------Utilizando o rest em um parametro podemos definir quantos parametros quisermos sem informar na function
    function soma(...params){
        return params.reduce((total, next) => total + next);
    }
    console.log(soma(1, 2, 3, 4))
}