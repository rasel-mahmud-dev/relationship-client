import {createContext} from "react";
import {People} from "../types";

export interface ContextStateType {
    peoples: People[]
}

const AppContext = createContext<ContextStateType>({peoples: []})

export default AppContext
