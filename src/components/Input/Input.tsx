import React, {FC, HTMLAttributes, InputHTMLAttributes} from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}


const Input: FC<InputProps> = ({className = "", name, label, ...attr}) => {
    return (
        <div>
            {label && <label className="text-stone-700 text-base font-medium" htmlFor={name}>{label}</label> }
            <input className={`w-full border border-blue-600/10 transition transition-colors focus:border-blue-500 outline-none rounded border-1 py-1 px-3 ${className}`} {...attr} name={name} id={name} />
        </div>
    );
};

export default Input;