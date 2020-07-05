const arr = [1, 2, 3, 4];

const newArr = arr.map(function(item){
    return item * 2;
});
console.log("sem o arrow function " + newArr);

//---------------------------------------------------------O arow function reduz o nosso codigo tornando desnecessario:
//---------------------------------------------------------O  uso dos parenteses do preset (quando só ha 1)
//---------------------------------------------------------O uso da key-word function
//---------------------------------------------------------O uso das chaves quando a function não executa nenhuma ação a não ser retornar uma simples info
//---------------------------------------------------------O uso da key-word return quando a function não executa nenhuma ação a nao ser retornar uma info
const newArr2 = arr.map(item => item * 2);
console.log("com o arrow function " + newArr2 + " repare que o resultado foi igual porem o codigo esta mais limpo");

//---------------------------------------------------------Caso seja necessario a criação de um objeto deve-se adicionar parenteses entre ele
const teste = () => ({nome: "Paulo Octavio"})  ;
console.log(teste());