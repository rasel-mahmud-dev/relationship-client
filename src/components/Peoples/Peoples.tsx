import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../store/AppContext";
import {fetchAllPeoples} from "../../store/apiRequest";
import {People} from "../../types";
import Button from "../Button/Button";

const Peoples = () => {
    const {state: {peoples, selectPeople}, actions} = useContext(AppContext)

    useEffect(() => {
        peoples.length === 0 && fetchAllPeoples<People[]>().then((data) => {
            actions?.setPeoples(data)
        })
    }, [])

    function handleSelectPeople(peopleName: string) {
        actions?.setSelectPeople(peopleName)
    }

    function makeForSelected(peopleName: string) {
        return (selectPeople[0] === peopleName || selectPeople[1] === peopleName) ? "bg-blue-500/30" : ""
    }

    return (
        <div>
            <h1 className="page-title">All Peoples</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                {peoples?.map((people) => (
                    <label className={`shadow-xss rounded-md ${makeForSelected(people.name)}`}
                           onClick={() => handleSelectPeople(people.name)}>
                        <img className="mx-auto" src="https://i.pravatar.cc/100" alt=""/>
                        <h4 className="text-center font-medium text-sm text-neutral-800 mt-3 py-2">{people.name}</h4>

                    </label>
                ))}
            </div>

            <div className="mt-8">
                <p className="font-normal text-sm text-center text-stone-500">Select two people and click this to see between their relation</p>
                <Button disabled={selectPeople.length < 2} className="block mx-auto mt-2">Find Relation</Button>
            </div>
        </div>
    );
};

export default Peoples;