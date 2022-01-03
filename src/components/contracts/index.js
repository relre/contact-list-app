import { useState, useEffect } from 'react';
import List from "../List";
import Form from "../Form";
import "./style.css";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Okan",
            phone_number: "054446496464554"
        },
        {
            fullname: "Mehmet",
            phone_number: "0554678678889"
        },
        {
            fullname: "Ayşe",
            phone_number: "05557879456498"
        },
        {
            fullname: "Buket",
            phone_number: "0538497494512"
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
