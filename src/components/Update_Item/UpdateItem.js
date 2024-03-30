import React from 'react'
import axios from 'axios';
import "./UpdateItem.css";
const UpdateItem = ({ id, uname, uemail, uphone, setUname, setEmail, setPhone, getData }) => {
    const upHandel = (id) => {
        axios.put(`https://66070946be53febb857f0be9.mockapi.io/users/${id}`, {
            name: uname,
            email: uemail,
            phone: uphone

        }).then(() => {
            getData()
        })
        document.querySelector('.updateitem').classList.remove('show')

    }
    return (
        <>
            <div className="updateitem">
                <h1>Update form Item</h1>

                <div className="form_div">
                    <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
                    <input type="text" value={uemail} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={uphone} onChange={(e => setPhone(e.target.value))} />
                    <button onClick={() => upHandel(id)}>Update</button>
                </div>

            </div>
        </>
    )
}

export default UpdateItem
