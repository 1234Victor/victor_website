import React from "react";
import Typewriter from "typewriter-effect";

function Type(){
    return(
        <Typewriter
        options = {{
            strings:[
                "Frontend Developer",
                "CompEng Student @UofT",
                "Android App Developer"
            ],
            autoStart: true,
            loop:true,
            deleteSpeed: 50,
        }}
        />
    );  
}

export default Type;