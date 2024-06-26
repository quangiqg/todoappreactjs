import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {


    const { id } = useParams()
    let navigate = useNavigate()

    const [user, setUser] = useState({
        title: "",
        date: "",
        name: ""
    })

    const { title, date, name } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`https://6564344dceac41c0761d99ac.mockapi.io/api/v1/todoapp/${id}`, user)
        navigate("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`https://6564344dceac41c0761d99ac.mockapi.io/api/v1/todoapp/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Title' className='form-label'>
                            Title
                        </label>
                        <input
                            type={'text'}
                            className='form-control'
                            placeholder='Enter title'
                            name="title"
                            value={title}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Date' className='form-label'>
                            Date
                        </label>
                        <input
                            type={'text'}
                            className='form-control'
                            placeholder='Enter date'
                            name="date"
                            value={date}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input
                            type={'text'}
                            className='form-control'
                            placeholder='Enter name'
                            name="name"
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger ms-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    )
}
