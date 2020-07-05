//Uma nova forma de nos trabalharmos com programação assincrona no js
const minhaPromise = () => new Promise((resolve, reject) => {
    //                                                         =>(setTimeout) diz que a função deve esperar um tempo no caso 2000 milesimos para executar
    setTimeout(() => {
        resolve("Deu certo") 
        reject("deu errado")
    }, 2000);
});

/*minhaPromise()
.then(response => {
    console.log(response);
})

.catch(err => {
    console.log(err);
})<-- METODO USADO ANTES DO ES6*/


//                                                             =>A sintaxe do async await torna nosso codigo muito menos verboso
//                                                             =>Nesta sintaxe o preset response não é mais um preset armazenado pelo then mas sim uma constante que armazena o await
async function executaPromise(){
    //                                                         =>Tem a mesma função do .then\
    const response = await minhaPromise();
    console.log(response)
}

executaPromise();


async function playPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
playPromise();