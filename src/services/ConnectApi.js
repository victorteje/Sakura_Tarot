import axios from "axios";

export default async function ConnectApi(cardId){
    try{
        const response = await axios.get(`https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${cardId}`);
        return response.data;  
    }
    catch(error){
        console.log(error);
    }
}

/*
const APIURL = https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/

async function getAllRequest(user) {
    await axios.get(`${APIURL}${user}`)
            .then((response) => {
                    return response;
            })
            .catch((error) => console.log(error));
}
*/