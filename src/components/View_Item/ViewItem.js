import React, { useEffect, useState } from 'react'
import AddItem from '../Add_Item/AddItem';
import axios from 'axios';
import "./ViewItem.css";
import UpdateItem from '../Update_Item/UpdateItem';
const ViewItem = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState('');
    function getData() {
        axios.get('https://66070946be53febb857f0be9.mockapi.io/users').then((res) => {
            console.log(res.data)
            setData(res.data)

        })
    }
    //delHnadler
    const delHandler = (id) => {
        axios.delete(`https://66070946be53febb857f0be9.mockapi.io/users/${id}`).then(() => {
            getData()
            setAlert("Data Has Deleted")
        })
    }
    //upHandler
    const [myid, setId] = useState('');
    const [uname, setUname] = useState('');
    const [uemail, setEmail] = useState('');
    const [uphone, setPhone] = useState('');
    const upHandler = (id) => {
        axios.get(`https://66070946be53febb857f0be9.mockapi.io/users/${id}`).then((res) => {
            console.log(res)
            setId(id)
            setUname(res.data.name);
            setEmail(res.data.email);
            setPhone(res.data.phone);

        })
        document.querySelector('.updateitem').classList.add('show')

    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <AddItem getData={getData} />
            <div className="ViewItem">
                <h1>view Items  <span className="alert">{alert}</span></h1>

                {/* create table */}
                <table className="table_view">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td><button className="del_button" onClick={() => delHandler(item.id)}>Delete</button></td>
                                <td><button className="up_button" onClick={() => upHandler(item.id)}>Update</button></td>
                            </tr>
                        ))
                    }
                </table>
            </div >
            <UpdateItem id={myid} uname={uname} uemail={uemail} uphone={uphone} setUname={setUname} setEmail={setEmail} setPhone={setPhone} getData={getData} />


        </>

    )
}

export default ViewItem
