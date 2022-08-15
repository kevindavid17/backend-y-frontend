import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const Detail = () =>{

    const {id} = useParams();
    const [person, setPerson] = useState([]);
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then(res => setPerson({ ...res.data}))
        .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <p>Username: {person.userName}</p>
            <p>Email: {person.email}</p>
            <Link to={"/people/"+ person._id + "/edit/"}>Link</Link> 
        </div>
    );
}
export default Detail;