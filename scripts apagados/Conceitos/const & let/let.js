function teste(x){
        //--------------let é o comando utilisado para criar uma variavel de escopo
        //--------------Escopo é o nome atribuido ao espaço entre as chaves da função senco que esta variavel so podde ser utilizada dentro do escopo onde ela foi criada
        let y = 2;
    if(x > 5){
       //---------------Lembrando que este espaço ainda faz parte do escopo da função
       y = 4;
        console.log(x, y)
    }

}
//este comando nao pode ser usado pois esta fora do escopo da função e utiliza a var y
//console.log(y);
teste(10);