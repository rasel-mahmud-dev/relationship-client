import React from 'react';
import {NavLink} from "react-router-dom";

const TopNavBar = () => {
    const navItems = [
        {label: "Peoples", to: "/"},
        {label: "Add People", to: "/add-people"},
    ]
    return (
        <>
            <header className="fixed top-0 left-1/2 -translate-x-1/2 mx-auto max-w-2xl w-full bg-blue-500 rounded-md mt-2">
                <nav className="flex items-center gap-x-4 justify-center">
                    {navItems.map(item=>(
                        <li className="list-none py-2">
                            <NavLink className="text-neutral-200 font-medium text-sm" to={item.to} >{item.label}</NavLink>
                        </li>
                    ))}
                </nav>
            </header>
            <div className="h-16"></div>
        </>
    );
};

export default TopNavBar;