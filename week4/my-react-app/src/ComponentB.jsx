//useContext() = React Hook that allows uou to hare Vaues
// betwene multiple leves of components
// wo passing props thru  each level

import React, {useContext} from "react";
import {UserContext} from "./ComponentA";
import ComponentC from "./ComponentC.jsx"

function ComponentB({/*props}*/})
{
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{`HI there ${user}`}</h2>
            <ComponentC/> {/*user={props.user}/>*/}
        </div>
    );
}
export default ComponentB