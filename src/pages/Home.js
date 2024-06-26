import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [user, setUser] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadUser();
    })

    const loadUser = async () => {
        const result = await axios.get("https://6564344dceac41c0761d99ac.mockapi.io/api/v1/todoapp")
        setUser(result.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`https://6564344dceac41c0761d99ac.mockapi.io/api/v1/todoapp/${id}`)
        loadUser()
    }

    const viewUser = async (id) => {
        await axios.get(`https://6564344dceac41c0761d99ac.mockapi.io/api/v1/todoapp/${id}`)
        loadUser()
    }


    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.title}</td>
                                    <td>{user.date}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <Link className='btn btn-outline-primary mx-2'
                                            to={`/viewuser/${user.id}`}
                                        >View</Link>
                                        <Link className='btn btn-outline-primary mx-2'
                                            to={`/edituser/${user.id}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
