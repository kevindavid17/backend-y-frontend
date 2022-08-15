import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import PersonList from '../components/PersonList';
import axios from 'axios';

const Main = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(res => {
            setPeople(res.data);
        })
    }, []);

    return (
        <div>
            <Form/>
            <hr/>
            <PersonList people ={people}/>
        </div>
        
    );
}
export default Main;