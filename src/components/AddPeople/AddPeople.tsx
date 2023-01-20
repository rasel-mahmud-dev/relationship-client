import React from 'react';
import Input from "../Input/Input";

const AddPeople = () => {
    return (
        <div className="max-w-3xl mx-auto shadow-xl bg-white">
            <div>
                <Input label="People Name" name="name" placeholder="Enter People Name" />
            </div>
        </div>
    );
};

export default AddPeople;