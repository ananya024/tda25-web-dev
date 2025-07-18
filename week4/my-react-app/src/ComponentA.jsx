//useContext() = React Hook that allows uou to hare Vaues
// betwene multiple leves of components
// wo passing props thru  each level

import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB.jsx"

export const UserContext= createContext();

function ComponentA()
{
    const [user, setUser]= useState("BroCode");
    
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA