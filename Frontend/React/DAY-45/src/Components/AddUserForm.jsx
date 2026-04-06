import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useEffect } from "react";
 function AddUserForm({setUsers , setIsToggle , editUser , setEditUser , setIsDisabled , isDisabled}) {
   console.log("AddForm rendering...")
  console.log("AddForm editUser --->" , editUser)
  //console.log("setUsers-->",setUsers)

 
  let {register ,
     handleSubmit ,
      reset,
      formState : {errors , isValid},
    } = useForm({
      mode:"onChange"
    , 
    defaultValues:editUser//form me default value ayegi editUser ki
  })
  //console.log(isValid)


  // defaultValues:{
  //   name:"Popppy",
  //   role:"Developer",
  //   email:"rohit.pokhariya123@gmail.com",
  //   mobile:"9012464329",
  //   department:"Engineering"

  // }
  //useState me jo ye defaultValues di hai usme ye jo key hai vo vo vali keys hai jo {...register("name")} karte waqt pass kri and hum ab usse defaultValues show kar rhe hai form pe
  //mode:"onChange --->  isse input field me focus kryte hi rhf error ha ndling krne lagjayega like in mobile we pass min/max length validation in mobile"



  //console.log(errors)//by default empty object
//edge case

useEffect(() => {
  if (editUser) {
    setIsDisabled((prev)=>!prev); // ya jo logic chahiye
    console.log("editUser in AddForm-->" , isDisabled)
  }
}, [editUser]);

  let handleFormSubmit = (data)=>{

    console.log("current form data",data)//this is curent user data jo user ki detail form me bhar rhehunge latest details
    //Main logic
   if(editUser){
    console.log("hello i am in editUser")
    setUsers((prev)=>{
      return prev.map((user)=>{
        console.log("user.id--->", user.id)
        console.log("editUser.id--->", editUser.id)
        return user.id === editUser.id ? {...user , ...data} : user
      })
    })
    setEditUser(null) //
    console.log("------>",editUser)
    setIsDisabled((prev)=>!prev)

   }
   else{
     setUsers((prev) => [...prev, {...data , id:nanoid()}])    //set juser data into user State
   }
  //ye always run hoga
   setIsToggle((prev) => !prev)
    reset()
  }
  return (
    
      <div className="h-[100%] w-full max-w-md mt-[40px]">
       
        {/* Card */}
        <form 
        // handleFormSubmit--> ye tab chalega jab form submit hoga
        onSubmit = {handleSubmit(handleFormSubmit)}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 ">
          <div className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                //{required : true}---> page render
                {...register('name' , {required:"Employe name is required"})}
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-transparent text-white placeholder-zinc-600 text-sm outline-none"
                />
               
              </div>
               {errors.name && <p className="text-red-700">{errors.name.message}</p>}
            </div>

            {/* Role */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Role
              </label>
              <div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <select 
                {...register('role' , {required : "Employe role is required"})}
                className="w-full bg-transparent text-zinc-500 text-sm outline-none appearance-none cursor-pointer [&>option]:bg-zinc-900">
                  <option value="">Select a role</option>
                  <option>Manager</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Analyst</option>
                  <option>Executive</option>
                  <option>Intern</option>
                  <option>Lead</option>
                </select>
                <svg className="w-4 h-4 text-gray-600 shrink-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                 
              </div>
               {errors.role && <p className="text-red-700">{errors.role.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                {...register("email" , {required : "Employe email is required"})}
                  type="email"
                  placeholder="e.g. rahul@company.com"
                  className="w-full bg-transparent text-white placeholder-zinc-600 text-sm outline-none"
                />
               
              </div>
               {errors.email && <p className="text-red-700">{errors.email.message}</p>}
            </div>

            
            {/* Contact */}
            {/* <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
               Contact
              </label>
              <div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                {...register("mobile" , {required : "Employe contact is required" , 
                  minLength:{
                  value:10,
                  message:"Minimum length of a mobile Number should be 10"},
                  maxLength:{
                  value:10,
                  message:"Maximum length of a mobile Number should be 10"
                  }
                })}
                  type="number"
                  placeholder="901367490"
                  className="w-full bg-transparent text-white placeholder-zinc-600 text-sm outline-none"
                />
               
              </div>
               {errors.mobile && <p className="text-red-700">{errors.mobile.message}</p>}
            </div> */}

            {/* Department */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Department
              </label>
              <div className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <select 
                {...register("department" , {required : "Employe department is required"})}
                className="w-full bg-transparent text-zinc-500 text-sm outline-none appearance-none cursor-pointer [&>option]:bg-zinc-900">
                  <option value="">Select a department</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Operations</option>
                </select>
                <svg className="w-4 h-4 text-gray-600 shrink-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {errors.department && <p className="text-red-700">{errors.department.message}</p>}
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-800 pt-1" />

            {/* Submit Button */}
            <button 
            disabled={!isValid}
           className={` ${!isValid ? 'bg-gray-400 cursor-none' :' bg-blue-800 cursor-pointer'} w-full py-3 rounded-xl  text-black text-sm font-semibold tracking-wide active:scale-97 `}>
              Register Employee
            </button>

          </div>
        </form>



      </div>
    
  );
}

export default AddUserForm