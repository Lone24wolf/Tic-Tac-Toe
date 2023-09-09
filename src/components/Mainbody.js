import React from "react"
import boxes from "./boxes";
import Box from "./Box";
export default function Mainbody(){
     
     const [squares,setsquares]=React.useState(boxes);
     const [a,setA]=React.useState(0);
     
     let b=0;
     let c=0;
     let k=-1;
     let s=a%2;
     let win=a%2?"X's Turn":"O's Turn";
     const [scoreO,setScoreO]=React.useState(0);
     const [scoreX,setScoreX]=React.useState(0);
     
     
     function toggle(id,on){
          if(on===-1){
          setsquares(prev=>{
            return prev.map((square)=>{
               
               
                 return square.id === id ? (square.on===-1? {...square, on:a%2?1:0} : square):square
               
     
            })
          })
          setA(x=>++x);
     }
}

for(let i=0;i<3;i++){
     if(squares[i].on===0 && squares[i+3].on===0 && squares[i+6].on===0){    
         b++;
         k=0;

     }
     else if(squares[i].on===1 && squares[i+3].on===1 && squares[i+6].on===1){
         c++;
         k=1;
     } 
     

}
for(let i=0;i<7;i=i+3){
     if(squares[i].on===0 && squares[i+1].on===0 && squares[i+2].on===0){
      
          b++;
          k=0;
           
           
      }
      else if(squares[i].on===1 && squares[i+1].on===1 && squares[i+2].on===1){
               
               c++;
               k=1;
          } 
}

     if(squares[0].on===0 && squares[4].on===0 && squares[8].on===0){
      
          b++;
          k=0;
           
           
      }
      else if(squares[0].on===1 && squares[4].on===1 && squares[8].on===1){
               
               c++;
               k=1;
          } 
     if(squares[2].on===0 && squares[4].on===0 && squares[6].on===0){
               b++;  
               k=0;         
           }
     else if(squares[2].on===1 && squares[4].on===1 && squares[6].on===1){
               c++;
               k=1;
           } 


          
          if(k===1){
               for(let i=0;i<9;i++){
                    if(squares[i].on===-1){
                      squares[i].on=2;
                    }
               }
          }
          else if(k===0){
               for(let i=0;i<9;i++){
                    if(squares[i].on===-1){
                      squares[i].on=2;
                    }
               }
          }
        
             
               
          

          React.useEffect(()=>{
               setScoreO(x=>x+b);
     
              },[b]);
              React.useEffect(()=>{
               setScoreX(x=>x+c);
              },[c]);
     if(k===0){
          k=-1
         win="O won"
         s=0
     } 
     else if(k===1){
          k=-1
         win="X won"
         s=1
     }
     else if(a===9){
          k=-1
          win="Draw"
          s=0
     }
     
    

     

    function reset(){
     setsquares(prev=>{
          return prev.map((square)=>{
               return {...square, on:-1};
          })
     })
     b=0;
     c=0;
     setA(x=>0);
         setScoreO(x=>0);
     setScoreX(x=>0);
    }
    function playagain(){

     setsquares(prev=>{
          return prev.map((square)=>{
               return {...square, on:-1};
          })
     })
     setA(x=>0);
     
    }
     
    


  const elements=squares.map(prev=>(
     
     <Box key={prev.id} on={prev.on}  count={a} toggle={()=>toggle(prev.id,prev.on)}   /> 
  ))

    return(
<div >
     
     <div className="abc">
         
     <div className="menu">
     <ul>
        <li onClick={playagain}>Play Again</li>
        <li onClick={reset}>Reset Score</li> 
          </ul>     
     </div>    
      <div className="score">
         <p><span className="OX">O</span>:{scoreO}</p> <p className="display">{s===0 && win}</p> 
      </div>

            <div className='main'>
        {elements}
        
        </div>
        <div className="score"><p><span className="OX">X</span>:{scoreX}</p><p className="display">{s===1 && win}</p> </div>
        </div>
        
        </div>

    );
}


