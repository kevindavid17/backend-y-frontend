import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Update = () =>{
    const {id} = useParams();
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user/'+id)
        .then(res => {
            setUsername(res.data.userName);
            setEmail(res.data.email);
        })
        .catch(err => console.log(err))
    }, [id]);

    const handlerUpdateUser = e => {
        //Función para realizar una petición PUT y actualizar un usuario
        e.preventDefault(); 
        axios.put('http://localhost:8000/api/user/'+ id, {
            userName,
            email
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Updating an user</h1>
            <form onSubmit={handlerUpdateUser}>
                <p>
                    <label>Username:</label>
                    <input type="text" value={userName} onChange={(e) => {setUsername(e.target.value)}}/>
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" value={email} onChange={ (e) => {setEmail(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
        </div>

    );
}
export default Update;