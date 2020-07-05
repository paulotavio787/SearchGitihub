//Reduz os objects onde armasenamos variaveis como propriedade
const nome = "Paulo Octavio";
const idade = 15;

/*const usuario = {
    nome: nome,
    idade: idade,
    escola: "Visão-SEB"
}; <-- forma usada antes do es6 */
const usuario = {
    nome,
    idade,
    escola: "Visão-SEB"
};//<-- nova forma
console.log(usuario);