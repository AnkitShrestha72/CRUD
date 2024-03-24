import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     axios.put(`https://65ff0107df565f1a6144a286.mockapi.io/crud-react/${id}`,
    //     {
    //         name: name,
    //         email: email,
    //     }
    //     )
    //     .then(() => {
    //         navigate('/read')
    //     })
    // }


  return (
      <>
          <h1>Update</h1>

          <form >
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />

              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Name</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />

              </div>

              <div className="d-flex">
                  <button type="submit" className="btn btn-primary " onClick={handleUpdate}>Update</button>
                  <button className="btn btn-primary mx-2" onClick={() => { navigate('/read') }}>Back</button>
            </div>
          </form>

        
      </>
  )
}

export default Update
