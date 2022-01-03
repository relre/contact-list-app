import { useState, useEffect } from 'react';
import List from "../List";
import Form from "../Form";
import "./style.css";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Okan",
            phone_number: "05444649646"
        },
        {
            fullname: "Mehmet",
            phone_number: "05546786789"
        },
        {
            fullname: "Ayşe",
            phone_number: "None"
        },
        {
            fullname: "Buket",
            phone_number: "05384994512"
        }
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div id="container">
        <h1>Contacts</h1>
         <List contacts={contacts} /> 
         <Form contacts={contacts} addContact={setContacts}/>
        </div>
    )
}

export default Contacts
