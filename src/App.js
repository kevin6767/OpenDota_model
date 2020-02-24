import React, { Component } from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import Fetchheroes from "./components/Fetchheroes";
const App = () => {
    return(
        <Fetchheroes />
    )
}
export default hot(module)(App);