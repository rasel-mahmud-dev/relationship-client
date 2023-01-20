import React, {Dispatch, FC, ReactNode, useReducer} from 'react';
import AppContext, {ContextStateType} from "./AppContext";
import {ACTION_TYPES, ActionTypes} from "./actionTypes";

export let dispatch: Dispatch<ActionTypes>

type AppProviderProps = {
    children: ReactNode
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

    const [state, appDispatch] = useReducer(reducer, {peoples: []}, undefined)

    // reference dispatch method
    dispatch = appDispatch;

    return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
};

export default AppProvider;