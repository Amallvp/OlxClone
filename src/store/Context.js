import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)

export const AuthContext = createContext(null)



//  usernte details evideyum store cheyynilla , so store cheyyan oru state create cheyyanam 
//so that it can be used in every component of the project 

export default function Context({ children }) {

    const [user,setUser] = useState(null)

    return (

        <AuthContext.Provider value={{user,setUser}}>

            {children}
        </AuthContext.Provider>
    )

}