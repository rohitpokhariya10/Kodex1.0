import { getLinks } from "../services/home.api.service"

export const useHome = ()=>{
    const fetchLinks = async (username)=>{
        try{
            const links = await getLinks(username);
            console.log("allLinks-->" , links);
        }
        catch(error){
            console.error("Error in home api" , error);
        }
        

    }
    return {
            fetchLinks
        }
}