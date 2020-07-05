const arr = [1, 2, 3, 4];
{
//---------------------------------------------------A função map percorre o array e retorna uma nova informação
//---------------------------------------------------O primeiro preset declarado sempre armazenara os items do array e o segundo sempre armazenara a posição no array
const map = arr.map(function(item, index){
    return item + index;
});

    console.log(map);
}

{
//--------------------------------------------------Consome todo o nosso array e tranforma em um unico valor geralmente um numero
const reduce = arr.reduce(function(total, next){
    return total + next;
});
console.log(reduce);
}

{
//--------------------------------------------------Filtra os itens do array mostrando apenas os que retornam valor true
const filter = arr.filter(function(item){
            //--------------------------------------Uma condicional que afirma que se o resto do item dividido por 2 for = 0 o resultado é true
    return  item % 2 === 0;    
})
console.log(filter)
}

{
//--------------------------------------------------A função find é utilizada para verificar se existe ou se nós podemos encontrar alguma informação no array
const find = arr.find(function(item){
            //----------------------------------------------Verifica se hà um item com valor 4 e o retorna caso haja e se não houver ele nos retorna undefined
    return item === 4 //5;
});
console.log(find);
}