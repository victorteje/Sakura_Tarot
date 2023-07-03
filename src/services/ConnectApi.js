export default async function ConnectApi(cardId){
    try{
        const response = await axios.get(`https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${cardId}`);
        return response;  
    }
    catch(error){
        console.log(error);
    }
}