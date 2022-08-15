import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PersonList = (props) =>{
    const { people } = props;

    const deleteUser = (userId) =>{
        axios.delete('http://localhost:8000/api/user/'+userId)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            {
                people.map((person, idx) =>{
                    return <p key={idx}>
                        <Link to={"/people/"+person._id}>userName: {person.userName}, Email: {person.email}</Link>
                        <button onClick={(e) => {deleteUser(person._id)}}>Delete</button>
                        </p>
                })
            }
            
        </div>
    );
}
export default PersonList;