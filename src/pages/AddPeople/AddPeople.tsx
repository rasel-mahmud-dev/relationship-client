import React, {useContext, useEffect, useState} from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import AppContext from "../../store/AppContext";
import MultiSelect from "../../components/MultiSelect/MultiSelect";
import axios from "axios";
import API from "../../apis";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

import getServerErrorMessage from "../../utils/getServerErrorMessage"
import {People} from "../../types";

const AddPeople = () => {

    const {state: {peoples, selectPeople}, actions} = useContext(AppContext)

    const {peopleName} = useParams()

    const [peopleData, setPeopleData] = useState<{
        name: string,
        friends: string[]
    }>({
        name: "",
        friends: []
    })


    const navigate = useNavigate()

    useEffect(() => {
        if (peopleName && peoples.length) {
            let people = peoples.find(people => people.name === peopleName)
            if (people) {
                setPeopleData({name: people.name, friends: people.friends})
            }
        }
    }, [peopleName, peoples])


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

        try {
            if (peopleName) {
                let {status, data} = await axios.patch(API + "/api/peoples/" + peopleName, peopleData)
                if (status === 201) {
                    actions?.updatedPeople(peopleData)
                    toast.success("People has been updated")
                    navigate("/")
                }
            } else {
                let {status, data} = await axios.post(API + "/api/peoples", peopleData)
                if (status === 201) {
                    actions?.addPeople(data)
                    toast.success("People has been successfully added")
                }
            }
        } catch (ex) {
            toast.error(getServerErrorMessage(ex))
        }
    }


    function chooseFriends() {
        let options: People[] = []
        if (peoples.length > 0) {
            if (peopleName) {
                options = peoples.filter(people => people.name !== peopleName)
            } else {
                options = peoples
            }
        }
        return options
    }

    return (
        <div>
            <h1 className="page-title">{peopleName ? "Update Friend" : "Add People"}</h1>

            <form onSubmit={handleAddPeople}>
                <div className=" shadow-xl bg-white mt-8 p-4 rounded-md">
                    <div>
                        <Input
                            disabled={!!peopleName}
                            onChange={handleChange}
                            value={peopleData.name}
                            label="People Name"
                            name="name"
                            placeholder="Enter People Name"/>
                    </div>
                    <div className="mt-4">
                        <MultiSelect
                            defaultSelected={peopleData.friends}
                            onUpdate={handleUpdateFriends} options={chooseFriends()}
                            label="Friends"
                            name="friends" placeholder="Enter People Name"/>

                    </div>

                    <Button role="button" disabled={!peopleData.name} type="submit"
                            className="mt-4">{peopleName ? "Update" : "Add"} </Button>
                </div>
            </form>
        </div>
    );
};

export default AddPeople;