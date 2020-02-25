import React, {useState} from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import Herodropdown from "./components/Herodropdown";

const App = () => {
    return (
        <Herodropdown />
    )
}
export default hot(module)(App);