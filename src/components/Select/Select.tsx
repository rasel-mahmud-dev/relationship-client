import React, {FC, SelectHTMLAttributes} from 'react';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: {name: string}[]
    name: string,
    label?: string
}


const Select: FC<SelectProps> = ({className = "", name, label, options, ...attr}) => {
    return (
        <div>
            {label && <label className="text-stone-700 text-base font-medium" htmlFor={name}>{label}</label> }
            <select className={`w-full border border-blue-600/10 transition transition-colors focus:border-blue-500 outline-none rounded border-1 py-1 px-3 ${className}`} id={name} name={name} {...attr}>
                <option value="">Select Fiends</option>
                {options.map(opt=>(
                    <option value={opt.name}> {opt.name} </option>
                ))}
            </select>
        </div>
    );
};

export default Select;