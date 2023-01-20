import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../store/AppContext";
import {fetchAllPeoples} from "../../store/apiRequest";
import {People} from "../../types";

const Peoples = () => {
    const { state: {peoples}, actions} = useContext(AppContext)

    useEffect(()=>{
        fetchAllPeoples<People[]>().then((data )=>{
            actions?.setPeoples(data)
        })
    }, [])

    return (
        <div>
            <h1>Peoples</h1>
            <div>
                { peoples?.map((people)=>(
                    <div role="test">
                        <h3>List</h3>
                        <h4>{people.name}</h4>
                        <img src="https://i.pravatar.cc/100" alt=""/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peoples;