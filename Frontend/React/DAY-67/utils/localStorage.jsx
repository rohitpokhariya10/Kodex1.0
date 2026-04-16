export let storage = {
      set:(key,value)=>{ localStorage.setItem(key , JSON.stringify(value))},
      get:(key)=>{
        let data = localStorage.getItem(key)
        data ? JSON.parse(data) : null 
    },
      remove:(key)=>{localStorage.removeItem(key)}
}