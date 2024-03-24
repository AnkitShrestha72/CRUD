import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        if(name === "") return ;
        e.preventDefault();
        console.log("clicked");
        axios.post(
            "https://65ff0107df565f1a6144a286.mockapi.io/crud-react",
            { name: name, email: email },
        )   
        .then(()=> {
            navigate("/read");
        })
    };


    return (
        <>
            <h1>Create</h1>

            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Create
