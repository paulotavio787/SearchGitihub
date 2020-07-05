class List{
    //-----------------------------Primeiro metodo utlizado para instanciar objetos a partir de uma classe no nosso caso a classe TodoList
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }

}

//---------------------------------Extends informa ao sistema que nossa classe TodoList é uma extenção da classe List
class TodoList extends List{
    constructor(){
        //-------------------------Chama o metodo Constructor da nossa classe pai que no caso é  a classe List
        super()

        this.usuario = "Paulo Octavio";
    }

    MostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();
document.getElementById("NovoTodo").onclick = function(){
    //-----------------------------graças ao comando extend a nossa classe TodoList herda os metodos da classe List
    //-----------------------------("Novo Todo") é a informação que sera armazenada na dependencia data do metodo add
    MinhaLista.add("Novo Todo");
}

MinhaLista.MostraUsuario();