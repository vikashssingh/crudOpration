import React, { useState } from 'react';
import "./AddItem.css";
import axios from 'axios';


const AddItem = ({ getData }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [alert, setAlert] = useState('');

    const onHandelSubmit = () => {
        axios.post('https://66070946be53febb857f0be9.mockapi.io/users', {
            name: name,
            email: email,
            phone: phone
        }).then(() => {
            setAlert(" Data Added ")
            setName(''); setEmail(''); setPhone('');
            getData();
        })
    }
    return (
        <>
            <div className="AddItem">
                <h1>Add Data<span>{alert}</span></h1>
                <center>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Enter Your Phone " value={phone} onChange={(e) => setPhone(e.target.value)} />


                    <button onClick={onHandelSubmit}>Add Item</button>
                </center>


            </div>
        </>
    )
}

export default AddItem
