import React, {FC, HTMLAttributes} from 'react';


interface InputProps extends HTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}


const Input: FC<InputProps> = ({className = "", name, label, ...attr}) => {
    return (
        <div>
            {label && <label className="text-stone-700 text-base font-medium" htmlFor={name}>{label}</label> }
            <input className={`w-full border border-blue-500 outline-none rounded border-2 py-1 px-3 ${className}`} {...attr} name={name} id={name} />
        </div>
    );
};

export default Input;