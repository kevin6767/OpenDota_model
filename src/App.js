import React  from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import Herodropdown from "./components/Herodropdown";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
const App = () => {
    return (
        <Herodropdown />
    )
}
export default hot(module)(App);