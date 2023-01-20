import React, {FC, HTMLAttributes} from 'react';


interface SelectProps extends HTMLAttributes<HTMLSelectElement> {

}


const Select: FC<SelectProps> = ({className = "", ...attr}) => {
    return (
        <div>
            <select className={`${className}`} {...attr}>

            </select>
        </div>
    );
};

export default Select;