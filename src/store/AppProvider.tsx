import React, {FC, ReactNode, useState} from 'react';
import AppContext from "./AppContext";

import {People} from "../types";


type AppProviderProps = {
    children: ReactNode
}

interface AppStateType {
    peoples: People[]
}


const initialState: AppStateType = {
    peoples: []
}


const AppProvider:FC<AppProviderProps> = (props) => {

    const [appState, setAppState] = useState<AppStateType>(initialState)

    const data = {
        state: appState,
        actions: {
            setPeoples: (peoples: People[])=> setAppState(prevState => ({
                ...prevState,
                peoples: peoples
            }))
        }
    }

    return <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
};

export default AppProvider;