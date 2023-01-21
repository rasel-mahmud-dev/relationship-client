import React, {useContext, useState} from 'react';
import AppContext from "../../store/AppContext";
import Button from "../../components/Button/Button";
import {BsPencilSquare} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../../components/Modal/Modal";

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

    const [isOpenJsonView, setOpenJsonView] = useState(false)

    function handleSelectPeople(peopleName: string) {
        actions?.setSelectPeople(peopleName)
    }

    function makeForSelected(peopleName: string) {
        return (selectPeople[0] === peopleName || selectPeople[1] === peopleName) ? "bg-blue-500/30" : ""
    }

    function handleJsonViewData() {
        setOpenJsonView(true)
    }


    return (
        <div className="mt-4">
            <div className="flex justify-between">
                <h1 className="page-title">All Peoples</h1>
                <Button onClick={handleJsonViewData} className="text-sm">JSON View Data</Button>
            </div>


            {/****** render data as json structure *******/}
            <Modal isOpen={isOpenJsonView} onClose={() => setOpenJsonView(false)} className="max-w-xl mx-auto">
                <pre>
                    <code>
                        {JSON.stringify(peoples, undefined, 2)}
                    </code>
                </pre>
            </Modal>


            {/******* show all peoples views *******/}
            <div className="flex flex-col md:flex-row  mt-10 gap-x-6">
                <div className="order-2 sm:order-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4 ">
                    {peoples?.map((people, index) => (
                        <div key={index} className={`shadow-xss rounded-md py-2 ${makeForSelected(people.name)}`}
                             onClick={() => handleSelectPeople(people.name)}>
                            <img className="mx-auto" src={`/images/${images[index]}`} alt=""/>
                            <h4 className="text-center font-medium text-sm text-neutral-800 mt-3 mb-2 ">{people.name}</h4>
                            <div className="w-max mx-auto">
                                <Link to={`/update-friends/${people.name}`}><BsPencilSquare
                                    className="text-neutral-500 text-sm"/></Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="order-1 sm:order-2 w-full sm:w-52 bg-blue-500/10 p-3 rounded-md mb-4 sm:mb-0">
                    <h2 className="text-sm font-semibold border-b-2 border-blue-400">Select People</h2>
                    <div className="mt-4">
                        <h2 className="text-sm font-semibold">Source</h2>
                        <span className="text-sm">{selectPeople[0] ? selectPeople[0] : "Not selected"}</span>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-sm font-semibold">Target</h2>
                        <span className="text-sm">{selectPeople[1] ? selectPeople[1] : "Not selected"}</span>
                    </div>
                </div>

            </div>

            <div className="mt-8">
                {selectPeople.length < 2 &&
                    <p className="font-normal text-sm text-center text-stone-500">Select two people and click this to
                        see between their relation</p>}
                <Button onClick={() => navigate(`/relation/${selectPeople[0]}/${selectPeople[1]}`)}
                        disabled={selectPeople.length < 2} className="block mx-auto mt-2">Find Relation</Button>
            </div>
        </div>
    );
};

export default Peoples;