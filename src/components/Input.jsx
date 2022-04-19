import React from "react";
import { useParams } from 'react-router-dom';

const Input = (props) => {

    const {input} = useParams();
    console.log(input);

    return(
        <h1 style={{textAlign: "center"}}>
            {!isNaN(input) ? "The number is: " + input : "The word is: " + input}
        </h1>
    )
}
export default Input