import React, { useState } from 'react';
import './App.css';


function App () {

    let [a, setA]=useState (1)

    const onClickHandler=()=> {
        setA(++a);
        console.log(a)
    }



return (
    <div className='App'>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
    </div>
)
}












{/*function App() {
    const Button1Foo =(subscriber:string,age:number, addres:string)=> {
        console.log (subscriber,age,addres)

    }
    
    const Button2Foo =(subscriber:string)=> {
        console.log (subscriber)

    
    }

    const Button3Foo =() => {
        console.log()
    }
   

       
    return (
       <div className='App'>
          
            <Button name={'MyYouTubeChanel-1'} callBack ={()=>Button1Foo("I am Uliana",21, "Live in Valencia")}/>
           <Button name={'MyYouTubeChanel-2'} callBack ={()=>Button2Foo("I am Jane")}/>
           <Button name={'IamStupidButton'} callBack ={()=>Button3Foo()}/>
            
        </div>
    );
}*/}

export default App;