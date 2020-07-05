//------------------------------------=>Explicação no arquivo export default
import subtraindo, {multi} from "./math";


//------------------------------------=>Atraves desta sintaxe podemos importar estruturas de informações (functions, arrays, objects, etc...)
//------------------------------------=>Indicando a key-word import 
//------------------------------------=>Indicando o nome dado a estrutura entre chaves
//------------------------------------=>Indicando a key-word from
//------------------------------------=>Indicando a key-word as podemos alterar o nome da função
//------------------------------------=>E indicando de qual arquivo você está importando
//------------------------------------=>Podemos importar mais de uma estrutura através da virgula

//-->import {soma as somando} from "./fuções"; <--Utilize para o inicio

//------------------------------------=>A key-word (* as) transforma todas as estruturas de info em um objeto onde os nomes das funções são as propriedades
import * as funcoes from "./funcoes";

console.log(subtraindo(4, 3));
console.log(multi(5, 3));

console.log("");

//-->console.log(somando(1, 2)); <--Utilize para o inicio

console.log(funcoes.soma(1, 2));
console.log(funcoes.subtracao(5, 2));
console.log(funcoes.multiply(15, 2));
console.log(funcoes.divs(10, 2));