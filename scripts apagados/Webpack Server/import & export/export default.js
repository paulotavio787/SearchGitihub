//=>Atraves da key-word default nos dizemos que apenas exportaremos esta estrutura neste arquivo
//=>Tornando desnescessario o uso de chaves na importação
//=>E torna possivel a alteração do nome da função na importação sem a key-word as

//=>Só é possivel usar o export default uma vez por arquivo
//=>Só é possivel a exportação de functions neste caso
export default function sub(c, d){
    return c - d;
}

//=>Porém é posivel utilizar um export default e exports comums no mesmo arquivo
export const multi = (c, d) => c * d;