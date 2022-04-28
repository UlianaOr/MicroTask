import React from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header}  from './site/Header';
import {Footer}  from './site/Footer';

function App() {
    const myFirstSubscriber = () => {
        console.log ("Hello Im Vasia")

    }
    return (
        <>
        <Header title = {"New Body"}/>
        <Body titleFofBody ={"New Body For!"}/>
        <Footer titleForFooter ={"New Footer For!"}/>

         {/*<button onClick={()=>{console.log("Hello")}}>MyYouTubeChanel-1</button>*/}
        <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>

        </>
    );
}

export default App;