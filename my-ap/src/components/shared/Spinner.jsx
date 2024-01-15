import React from "react";
import loading from "../assets/loading.gif"

function Spinner(){
    return (
       <img src={loading} alt="loading" style={{margin: "50px auto", width: "100px", display: 'block'}}/>
    )
}

export default Spinner