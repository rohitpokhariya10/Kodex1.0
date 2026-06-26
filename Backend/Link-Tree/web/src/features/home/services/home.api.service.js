import api from "../../../lib/api"
//

export const getLinks = async (username)=>{
    console.log("username in home.api-->" , username);
    //BD api call
    const response = await api.get(`/link/${username}`);
    console.log("response-->" , response)
    return response.data;
}
