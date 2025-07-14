//useContext() = React Hook that allows uou to hare Vaues
// betwene multiple leves of components
// wo passing props thru  each level

import React, {useContext} from "react";
import {UserContext} from "./ComponentA";
import ComponentD from "./ComponentD.jsx"

function ComponentC({/*props}*/})
{
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/> {/*user={props.user}/>*/}
        </div>
    );
}
export default ComponentC