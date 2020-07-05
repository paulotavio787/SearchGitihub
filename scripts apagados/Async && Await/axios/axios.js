//                          =>Axios é uma biblioteca que nos da assesso a uma API para podermos trabalharmos com requisições assincronas a protocolos http
//                          =>como por exemplo a api do github
import axios from "axios";

class Api {
    static async getUserInfo(username) {
        
        try{
        const response = await axios.get(`https://api.github.com/users/${username}`)
        
        console.log(response);
        
        } catch (err) {
            alert("Erro na API");
        }
        
    }
}

Api.getUserInfo('paulotavio787');