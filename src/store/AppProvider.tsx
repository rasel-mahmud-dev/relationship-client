import React, {Dispatch, FC, ReactNode, useReducer} from 'react';
import AppContext, {ContextStateType} from "./AppContext";
import {ACTION_TYPES, ActionTypes} from "./actionTypes";
import {People} from "../types";


export let dispatch: Dispatch<ActionTypes>

type AppProviderProps = {
    children: ReactNode
}

interface AppStateType {
    peoples: People[]
}


const initialState: AppStateType = {
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

    const [state, appDispatch] = useReducer(reducer, {peoples: []}, undefined)

    // reference dispatch method
    dispatch = appDispatch;

    return <AppContext.Provider value={{...state, dispatch}}>{props.children}</AppContext.Provider>
};

export default AppProvider;