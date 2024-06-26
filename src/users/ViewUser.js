import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewUser() {

    const [user, setUser] = useState({
        title: "",
        date: "",
        name: ""
    })

    const { id } = useParams()

    useEffect(() => {
        loadUser()
    }, [])


    const loadUser = async () => {
        const result = await axios.get(`https://6564344dceac41c0761d99ac.mockapi.io/api/v1/todoapp/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Detail</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id:
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Title: </b>
                                {user.title}
                            </li>
                            <li className='list-group-item'>
                                <b>Date: </b>
                                {user.date}
                            </li>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {user.name}
                            </li>

                        </ul>
                    </div>

                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
        </div>
    )
}
