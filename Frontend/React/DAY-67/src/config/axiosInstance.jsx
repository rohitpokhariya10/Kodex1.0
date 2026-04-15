import axios from 'axios'


//We are creating our own custom axios object
//So instead of writing this every time: axios.get("https://fakestoreapi.com/products");

//We can now write: axiosInstance.get("/products");
export let axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com",
})