//-->Spread
//Repassa as informações de uma estrutura de array ou de objeto para outra estrutura de dados

//Spread in Array
{
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//--------------------------------Neste escopo os (...) sendo utilizados desta forma copia cada uma das iformações dos arrays e coloca aqui 
const arr3 = [...arr1, ...arr2];
console.log(arr3);
}

console.log("");

//Spread in object
{
    const usuario1 = {
        nome: "Paulo Octavio",
        idade: 15,
        escola: "Visão-SEB"
    };

    //------------------------------------------Altera apenas uma das propriedades no caso a propriedade idade
    const usuario2 = {...usuario1, idade: 16}
    console.log(usuario2);
}