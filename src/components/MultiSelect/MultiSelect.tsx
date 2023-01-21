import React, {FC, HTMLAttributes, SelectHTMLAttributes, useEffect, useState} from 'react';
import {BiTrash} from "react-icons/bi";


interface MultiSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: {name: string}[]
    label?: string
    onUpdate: (friends: string[])=>void
    defaultSelected?: string[]
}


const MultiSelect: FC<MultiSelectProps> = ({className = "", defaultSelected  = [], name, label, options, onUpdate, ...attr}) => {

    const [state, setState] = useState<string[]>([])

    useEffect(()=>{
        if(defaultSelected && defaultSelected.length > 0 ){
            setState(defaultSelected)
        }
    }, [defaultSelected])

    function handleAdd(e: React.ChangeEvent<HTMLSelectElement>){
       let updateState = [...state]
        let { value} = e.target

        if(value ===  "") return

        if(updateState.includes(value)){
            updateState = updateState.filter(item=> item !== value)
        } else {
            updateState.push(value)
        }
        onUpdate(updateState)
        setState(updateState)

        // @ts-ignore
        e.target.value = ""
    }

    function removeItem(name: string){
        let updateState = [...state]
        updateState = updateState.filter(item=> item !== name)
        onUpdate(updateState)
        setState(updateState)
    }

    return (
        <div>
            {label && <label className="text-stone-700 text-base font-medium" htmlFor={name}>{label}</label> }

            {(state && state.length ) ? (
                <div className="flex items-center gap-2 mb-1">
                    {state.map(item=>(
                        <div key={item} onClick={()=>removeItem(item)} className="flex items-center gap-x-1 text-xs font-medium bg-blue-600/30 px-3 py-1  rounded cursor-pointer">
                            {item}
                           <BiTrash />
                        </div>
                    ))}
                </div>
            ): null }

            <select
                className={`w-full border border-blue-600/10 transition transition-colors focus:border-blue-500 outline-none rounded border-1 py-1 px-3 ${className}`}
                id={name}
                name={name}
                onChange={handleAdd}
                {...attr}>
                    <option value="">Select Fiends</option>
                    {options.map(opt=>(
                        <option value={opt.name} key={opt.name}> {opt.name} </option>
                    ))}
            </select>
        </div>
    );
};

export default MultiSelect;