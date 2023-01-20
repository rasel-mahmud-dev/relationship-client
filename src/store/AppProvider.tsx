import React, {FC, ReactNode, useReducer} from 'react';
import AppContext from "./AppContext";
import {ACTION_TYPES, ActionTypes} from "./actionTypes";
import {People} from "../types";


type AppProviderProps = {
    children: ReactNode
}

interface ContextStateType {
    peoples: People[]
}

const initialState: ContextStateType = {
    peoples: []
}

function reducer(state = initialState, action: ActionTypes){
    switch (action.type){

        case ACTION_TYPES.FETCH_PEOPLES:
            return {
                ...state,
                peoples: action.payload
            }


        default:
            return state
    }
}


const AppProvider:FC<AppProviderProps> = (props) => {

    const [state, dispatch] = useReducer(reducer, {peoples: []}, undefined)

    return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
};

export default AppProvider;