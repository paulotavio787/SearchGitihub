class Matematica{
    //--------------------static torna o metodo estatica e isolando ela do restante da classe nao permitindo que ela o enchergue
    //--------------------e torna desnecessario o uso do new para chamar a classe e o uso do constructor por ela ser um metodo isolado
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));