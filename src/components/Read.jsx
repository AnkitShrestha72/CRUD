import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data , setData] = useState([]);



    function getData() {
        axios.get('https://65ff0107df565f1a6144a286.mockapi.io/crud-react')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        
        })
    }

    useEffect(() => {
     getData();
    }, [])

    function handleDelete(id) {
        axios.delete(`https://65ff0107df565f1a6144a286.mockapi.io/crud-react/${id}`)
        .then(()=> {
            getData();
        })
    }

    function setLocalStorage(id, name , email) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);  
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
            {
                data.map((eachData) => {
                    return (
                        <>
                    <tbody >
                        <tr>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td>
                                <Link to="/update">
                                <button className='btn btn-primary' onClick={()=> setLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=> handleDelete(eachData.id)}>Delete</button>
                            </td>
                        </tr>


                    </tbody>
                        </>
                    )
                })

                }
             
            </table>
        </>
    )
}

export default Read
