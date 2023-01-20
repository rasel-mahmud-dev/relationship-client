import {createContext} from "react";
import {People} from "../types";

export interface ContextStateType {
    state: {
        peoples: People[]
    },
    actions?: {
        setPeoples: (peoples: People[])=> void
    }
}

export const initialState = {
    state: {peoples: []},
    actions: undefined
}

const AppContext = createContext<ContextStateType>(initialState)

export default AppContext
