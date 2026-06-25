import axios from "axios";
//
 const linkApiInstance = axios.create({
    baseURL:"/api/link",
 });
//
export const getLinks = async (username)=>{
    console.log("username in home.api-->" , username);
    //BD api call
    const response = await linkApiInstance.get(`/${username}`);
    console.log("response-->" , response)
    return response.data;
}
