import {createContext} from "react";
import {People} from "../types";


export interface AppStateType {
    peoples: People[],
    selectPeople: string[]
}

export interface ContextStateType {
    state: AppStateType,
    actions?: {
        setPeoples: (peoples: People[])=> void
        setSelectPeople: (peopleName: string)=> void
        addPeople: (people: People)=> void
        updatedPeople: (people: People)=> void
    }
}



export const initialAppState = {
    peoples: [],
    selectPeople: []
}

export const initialState = {
    state: initialAppState,
    actions: undefined
}

const AppContext = createContext<ContextStateType>(initialState)

export default AppContext
