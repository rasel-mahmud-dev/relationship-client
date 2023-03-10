import React, {FC, ReactNode, useState} from 'react';
import AppContext, {AppStateType, initialAppState} from "./AppContext";

import {People} from "../types";


type AppProviderProps = {
    children: ReactNode
}


const AppProvider: FC<AppProviderProps> = (props) => {

    const [appState, setAppState] = useState<AppStateType>(initialAppState)

    const data = {
        state: appState,
        actions: {
            setPeoples: (peoples: People[]) => setAppState(prevState => ({
                ...prevState,
                peoples: peoples
            })),
            setSelectPeople: (peopleName: string) => {
                setAppState((prevState) => {
                    let updateSelectPeople = [...prevState.selectPeople]

                    let ind = updateSelectPeople.indexOf(peopleName)
                    if(ind === -1 && updateSelectPeople.length <= 1){
                        updateSelectPeople.push(peopleName)
                    } else {
                        updateSelectPeople = updateSelectPeople.filter(name => name !== peopleName)
                    }

                    return  {
                        ...prevState,
                        selectPeople: updateSelectPeople
                    }
                })
            },
            addPeople: (people: People) => setAppState(prevState => ({
                ...prevState,
                peoples: [
                    ...prevState.peoples,
                    people
                ]
            })),
            updatedPeople: (people: People) => setAppState(prevState => {
                let updatedPeople = [...prevState.peoples]
                let updatedPeopleIndex = prevState.peoples.findIndex(peo=>peo.name === people.name)
                if(updatedPeopleIndex === -1) return prevState

                updatedPeople[updatedPeopleIndex] = {
                    ...updatedPeople[updatedPeopleIndex],
                    ...people
                }

                return {
                    ...prevState,
                    peoples: updatedPeople
                }
            }),
        }
    }

    return <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
};

export default AppProvider;