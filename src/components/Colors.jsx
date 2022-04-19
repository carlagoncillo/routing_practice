import React from "react";
import {useParams} from 'react-router-dom';

const Colors = (props) => {

    const {input, color, backgroundColor} = useParams()
    console.log(input);

    return(
        <h1 style={{textAlign: "center", color: color, backgroundColor: backgroundColor}}>
            {!isNaN(input) ? "The number is: " + input : "The word is: " + input}
        </h1>
    )
}
export default Colors 