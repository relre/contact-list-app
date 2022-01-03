import React from 'react'
import { useState } from 'react'
import Contacts from '../contracts';

function Form( {addContact, contacts}) {
    const initialFormValue = {fullname: "", phone_number: ""};
    const [form, setForm] = useState(initialFormValue);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})}

    const onSubmit = (e) => {
        e.preventDefault();
        

        if(form.fullname === "" || form.phone_number === ""){
            return false;
        }
        addContact([...contacts, form]);
        setForm(initialFormValue);
        
    }
    return (
        <form onSubmit={onSubmit}>
        <div>
         <div>
             <input 
             name="fullname" 
             placeholder='Full Name'
             onChange={onChangeInput}
             value={form.fullname}
             />
         </div>
        
        
         <div>
             <input 
             name="phone_number" 
             placeholder='Phone Number'
             onChange={onChangeInput}
             value={form.phone_number}
             />
         </div>
         <div  className="btn">
             <button>
                Add
             </button>
         </div>
         </div>
         </form>
        
    )
}

export default Form
