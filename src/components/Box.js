import React from "react";


export default function Box(props){
    




let show="";
if(props.on===1){
    show="X";
}
else if(props.on===0){
    show="O";
}


   

    return(
        <div className="box" onClick={props.toggle}>
            
           <h1>{show}</h1>
                          
             
        </div>
        
    )
}