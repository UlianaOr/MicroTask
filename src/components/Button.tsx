import React from 'react';

type ButtonPropsType ={
    name:string
    callBack:()=>void
}

export const Button =(props: ButtonPropsType) =>{

    const onClicButtonkHandler =() => {
        props.callBack()

        
    }
    return(
        <button onClick={onClicButtonkHandler}>{props.name}</button>


    )
}