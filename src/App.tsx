import React, {useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";


function App() {
    return (
        <div className="container">
            <TopNavBar />
            <Outlet/>
        </div>
    );
}


export default App;
