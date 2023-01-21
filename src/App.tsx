import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import {fetchAllPeoples} from "./store/apiRequest";
import {People} from "./types";
import AppContext from "./store/AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const {state: {peoples}, actions} = useContext(AppContext)


    useEffect(() => {
        peoples.length === 0 && fetchAllPeoples<People[]>().then((data) => {
            actions?.setPeoples(data)
        })
    }, [])


    return (
        <div className="container">
            <ToastContainer />
            <TopNavBar />
            <Outlet/>
        </div>
    );
}


export default App;
