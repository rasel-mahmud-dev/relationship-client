import React, {ButtonHTMLAttributes, FC} from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}


const Button: FC<ButtonProps> = ({className = "",  ...attr}) => {
    return (
        <button className={`text-white font-normal text-base outline-none border-none rounded bg-blue-500 py-1.5 px-4 ${className}`} {...attr} />
    );
};

export default Button;