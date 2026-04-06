import { createContext, useState } from "react";

//  Ek context bana rahe hain jisme hum data store karenge (global storage)
export let MyStore = createContext(); // consumer isse data access karega

//  Ye ek provider component hai jo data sabko share karega
export let ContextProvider = ({ children }) => {
    
    console.log("Mycontext rendering..."); 
    //  Check karne ke liye ki component kab render ho raha hai

    const [count, setCount] = useState(0);
    //  count ek state hai (initial value = 0)
    //  setCount se hum count ko update kar sakte hain

    return (
        //  Provider ke andar jo value pass karenge wahi sab components use kar paayenge
        <MyStore.Provider value={{ count, setCount }}>
            
            {/*  children ka matlab hai jo bhi component iske andar wrap hoga (like <App/>) */}
            {children}

        </MyStore.Provider>
    );
};