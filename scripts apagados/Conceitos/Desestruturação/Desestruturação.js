const ussuario = {
    nome: "Paulo Octavio",
    idade: 15,
    endereco: {
        rua: "Clepino Antonio de Araujo n51",
        cidade: "Itumbiara",
        estado: "GO"
        
    },
};
console.log(ussuario);

const {nome, idade, endereco: {cidade}} = ussuario;
console.log(nome)
console.log(idade)
console.log(cidade);


function mostra({idade, nome, endereco: {cidade}}){
    return console.log("nome: " + nome + " idade: " + idade + " cidade: " + cidade);
}

mostra(ussuario);