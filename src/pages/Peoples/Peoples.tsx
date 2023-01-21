import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../store/AppContext";
import Button from "../../components/Button/Button";

const images = [
    "100.jpg",
    "100 (1).jpg",
    "100 (2).jpg",
    "100 (3).jpg",
    "100 (4).jpg",
    "100 (5).jpg",
    "100 (6).jpg",
    "100 (7).jpg",
    "100 (8).jpg",
    "100 (9).jpg",
    "100 (10).jpg",
    "100 (11).jpg",
    "100 (12).jpg",
    "100 (13).jpg",
    "100 (14).jpg",
    "100 (15).jpg",
    "100 (16).jpg",
]



const Peoples = () => {
    const {state: {peoples, selectPeople}, actions} = useContext(AppContext)

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
                {peoples?.map((people, index) => (
                    <label className={`shadow-xss rounded-md ${makeForSelected(people.name)}`}
                           onClick={() => handleSelectPeople(people.name)}>
                        <img className="mx-auto" src={`/images/${images[index]}`} alt=""/>
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