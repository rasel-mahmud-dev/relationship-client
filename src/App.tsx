import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import {fetchAllPeoples} from "./store/apiRequest";
import {People} from "./types";
import AppContext from "./store/AppContext";


function App() {

    const {state: {peoples}, actions} = useContext(AppContext)


    useEffect(() => {
        peoples.length === 0 && fetchAllPeoples<People[]>().then((data) => {
            actions?.setPeoples(data)
        })
    }, [])


    return (
        <div className="container">
            <TopNavBar />
            <Outlet/>
        </div>
    );
}


export default App;
