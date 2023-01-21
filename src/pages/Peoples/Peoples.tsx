import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../store/AppContext";
import Button from "../../components/Button/Button";
import {BsPencilSquare} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";

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

    const navigate = useNavigate()

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
                    <div key={index} className={`shadow-xss rounded-md py-2 ${makeForSelected(people.name)}`}
                           onClick={() => handleSelectPeople(people.name)}>
                        <img className="mx-auto" src={`/images/${images[index]}`} alt=""/>
                        <h4 className="text-center font-medium text-sm text-neutral-800 mt-3 mb-2 ">{people.name}</h4>
                        <div className="w-max mx-auto">
                            <Link to={`/update-friends/${people.name}`}><BsPencilSquare  className="text-neutral-500 text-sm" /></Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                {selectPeople.length < 2 && <p className="font-normal text-sm text-center text-stone-500">Select two people and click this to see between their relation</p> }
                <Button onClick={()=>navigate(`/relation/${selectPeople[0]}/${selectPeople[1]}`)} disabled={selectPeople.length < 2} className="block mx-auto mt-2">Find Relation</Button>
            </div>
        </div>
    );
};

export default Peoples;