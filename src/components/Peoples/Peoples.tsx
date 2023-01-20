import React, {useContext, useEffect} from 'react';
import AppContext from "../../store/AppContext";
import {fetchAllPeoples} from "../../store/actions";
import useDispatch from "../../hooks/useDispatch";

const Peoples = () => {

    const {peoples, dispatch} = useContext(AppContext)

    // let dispatch = useDispatch()

    useEffect(()=>{

        fetchAllPeoples(dispatch).then(r => {})

    }, [])

    return (
        <div>
            <h1>Peoples</h1>
            <div>
                { peoples.map((people)=>(
                    <div>
                        <h4>{people.name}</h4>
                        <img src="https://i.pravatar.cc/100" alt=""/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peoples;