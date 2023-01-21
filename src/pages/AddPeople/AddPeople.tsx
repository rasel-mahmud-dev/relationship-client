import React, {useContext, useEffect, useState} from 'react';
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import AppContext from "../../store/AppContext";
import MultiSelect from "../../components/MultiSelect/MultiSelect";
import axios from "axios";
import apis from "../../apis";
import API from "../../apis";

const AddPeople = () => {

    const {state: {peoples, selectPeople}, actions} = useContext(AppContext)


    const [peopleData, setPeopleData] = useState<{
        name: string,
        friends: string[]
    }>({
        name: "",
        friends: []
    })


    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        let {name, value} = e.target as HTMLInputElement
        setPeopleData(p => ({
            ...p,
            [name]: value
        }))
    }


    function handleUpdateFriends(friends: string[]) {
        setPeopleData(p => ({
            ...p,
            friends: friends
        }))
    }

    async function handleAddPeople(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        let {status, data} = await axios.post(API + "/api/peoples", peopleData)
        if(status === 201){
            actions?.addPeople(data)
        }

    }

    return (
        <div>
            <h1 className="page-title">Add People</h1>

            <form onSubmit={handleAddPeople}>
                <div className=" shadow-xl bg-white mt-8 p-4 rounded-md">
                    <div>
                        <Input onChange={handleChange} label="People Name" name="name" placeholder="Enter People Name"/>
                    </div>
                    <div className="mt-4">
                        <MultiSelect onUpdate={handleUpdateFriends} options={peoples} label="Friends" name="friends" placeholder="Enter People Name"/>

                    </div>

                    <Button disabled={!peopleData.name} type="submit" className="mt-4">Add</Button>
                </div>
            </form>
        </div>
    );
};

export default AddPeople;