import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';



function App () {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [] = useState("")

    const addMessage = (title:string) => {
        let newMessage = {message:title};
        setMessage([newMessage,...message])
    }


    

}

   return (
       <div className={'App'}

       <Button name={'+'} callBack={()=>{}}/>
       {message}
       
       return (
           <div key={index}>{el.message}</div>
       )

       </div> 
   )







{/*

    const [money,setMoney] = useState ([
        {bancnote: "dolar", nominal: 100, number: " a1275869584"},
        {bancnote: "dolar", nominal: 50, number: " a1277769584"},
        {bancnote: "ruble", nominal: 100, number: " g1275869584"},
        {bancnote: "dolar", nominal: 100, number: " y8885869584"},
        {bancnote: "dolar", nominal: 50, number: " b4475869584"},
        {bancnote: "ruble", nominal: 100, number: " a1275877784"},
        {bancnote: "dolar", nominal: 50, number: " s1115869584"},
        {bancnote: "ruble", nominal: 50, number: " q2275869584"},
    ])

    let currentMoney=money.filter((filteredMoney:{})=>filteredMoney.bancnote==="ruble")


    return(
        <>
        <ul>
            {currentMoney.map((objFromMoneyArr: {}, index)=>{
                return(
                    <li key={index}>
                        <span>{objFromMoneyArr.bancnote}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
        

        </>
    )
}

























{/*

    let [a, setA]=useState (1)

    const onClickHandler=()=> {
        setA(++a);
        console.log(a)
    }

    let [b, setB]=useState (2)

    const onClickHandler1=()=> {
        setB(++b);
        console.log (b)

    }



return (
    <div className='App'>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandler1}>0</button>
        
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