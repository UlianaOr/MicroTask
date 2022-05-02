import React from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header}  from './site/Header';
import {Footer}  from './site/Footer';

function App() {
   

       const foo1 =()=>{
           console.log (100200)
       }

       const foo2 =(num:number) =>{
           console.log(num)
       }

    return (
       <div className='App'>
           <button onClick={foo1}>1</button>
           <button onClick={()=>foo2(100200)}>2</button>
           
            
        </div>
    );
}

export default App;