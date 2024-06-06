import { createContext, useState } from "react";

export const post_Context=createContext(null)

function Post ({children}){

    const[postDetails,setPostDetails]=useState()

return (

    <post_Context.Provider value={{postDetails,setPostDetails}}>
        {children}
    </post_Context.Provider>
)
}

export default Post