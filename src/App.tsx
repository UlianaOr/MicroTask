import React from 'react';
import './App.css';
import { Button } from './components/Button';


function App() {
    const Button1Foo =(subscriber:string,age:number, addres:string)=> {
        console.log (subscriber,age,addres)

    }
    
    const Button2Foo =(subscriber:string)=> {
        console.log (subscriber)

    }
   

       
    return (
       <div className='App'>
          
            <Button name={'MyYouTubeChanel-1'} callBack ={()=>Button1Foo("I am Uliana",21, "Live in Valencia")}/>
           <Button name={'MyYouTubeChanel-2'} callBack ={()=>Button2Foo("I am Jane")}/>
            
        </div>
    );
}

export default App;