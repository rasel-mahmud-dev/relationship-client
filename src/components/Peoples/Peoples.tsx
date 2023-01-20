import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../store/AppContext";
import {fetchAllPeoples} from "../../store/apiRequest";
import {People} from "../../types";
import Button from "../Button/Button";

const Peoples = () => {
    const { state: {peoples}, actions} = useContext(AppContext)

    useEffect(()=>{
        peoples.length === 0 && fetchAllPeoples<People[]>().then((data )=>{
            actions?.setPeoples(data)
        })
    }, [])

    return (
        <div>
            <h1 className="page-title">All Peoples</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                { peoples?.map((people)=>(
                    <div className="shadow-xss rounded-md">
                        <img className="mx-auto" src="https://i.pravatar.cc/100" alt=""/>
                        <h4 className="text-center font-medium text-sm text-neutral-800 mt-3 py-2">{people.name}</h4>
                    </div>
                ))}
            </div>


            <Button className="block mx-auto mt-8">Find Relation</Button>
        </div>
    );
};

export default Peoples;