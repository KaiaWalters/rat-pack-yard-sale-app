import React from "react";
import { useState } from "react";


function Form(props) {
  
    let [form, setForm] = useState({})
    let [error, setError] = useState({})
    let errorDisplay; 

    const setField = (field, value) => {
        setForm({
            ...form, 
            [field]: value
        })

        if(!!error[field]){
            setError({
                ...error, 
                [field]: null
            }) 
        }
    }

    const validateForm = () => {
        const {username, email, phone, bid} = form
        const newError = {}

        if(!username || username === '') newError.username = 'Please enter a username'
        if(!email || email === '') newError.email = 'Please enter an email'
        if(!phone || phone === '') newError.phone = 'Please enter a phone'
        if(!bid || bid === '') newError.bid = 'Please enter a bid'

        return newError
    }

    const displayError = (error) => {
         errorDisplay =  <div><span>{error}</span></div>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formError = validateForm()
        if(Object.keys(formError).length > 0) {
            setError(formError)
            displayError(formError)
        }else {
            console.log(form)
        }
    }

    

    return (
        <div class="form_container">
            <h2>Interested?</h2>
            <span>Submit a bid!</span>
            <form class="container" action="">
                {errorDisplay}
                <input type="text" name='username' placeHolder="Username" value={form.username} isInvalid={!!error.username} onChange={(e)=> setField("username", e.target.value)} required/>
                <input type="text" name='email' placeHolder="Email" onChange={(e)=> setField("email", e.target.value)}  required/>
                <input type="text" name='phone' placeHolder="Phone number" onChange={(e)=> setField("phone", e.target.value)}  />
                <input type="text" name='bid' placeHolder="Your bid" onChange={(e)=> setField("bid", e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Submit your bid</button>
            </form>
        </div>
    );  
  };

  export default Form; 