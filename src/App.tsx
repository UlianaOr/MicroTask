import React from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header}  from './site/Header';

function App() {
    return (
        <>
        <Header title = {"New Body"}/>
        <Body/>
        </>
    );
}

export default App;