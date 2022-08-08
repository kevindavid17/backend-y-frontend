import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
    const[userName, setUserName] = useState("");
    const[email, setEmail] = useState("");

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/new', {userName,email})
        .then(res => console.log('Petición exitosa:', res))
        .catch(err => console.log('Petición fallida:', err));

    }
    return (
        <form className='frmPeticion' onSubmit={onSubmitHandler}>
            <div>
                <label>Nombre de usuario: </label>
                <input type="text" className="txtUser" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
            </div>
            <div>
                <label>Correo: </label>
                <input type="text" className="txtEmail" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
                <button type="submit" className='btn'>
                    Enviar</button> 
            </div>
        </form>
        
    );
    
}
export default Form;
