import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


const {PORT} = process.env

function Form(props) {
    let [form, setForm] = useState({})
    let [error, setError] = useState({})
    let errorDisplay; 

    const navigate = useNavigate();

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

    async function handleSubmit(e) {
        e.preventDefault();
        
        const formError = validateForm()
        if(Object.keys(formError).length > 0) {
            setError(formError)
            displayError(formError)
        }else {
            console.log(form)
        }
        const newBid = { ...form, ...{item:`${props.product}`} };
      
        await fetch('http://localhost:8001/api/v1/yard-sale-items/postBid', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBid),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
        setForm({ username: "", email: "", phone: "", bid: ""});
        // navigate("/"); //should nav to success screen
      }

    

    return (
        <div class="form_container">
            <h2>Interested?</h2>
            <span>Submit a bid!</span>
            <form class="container" action="">
                {errorDisplay}
                <input type="text" name='username' placeholder="Username" value={form.username} isInvalid={!!error.username} onChange={(e)=> setField("username", e.target.value)} required/>
                <input type="text" name='email' placeholder="Email" onChange={(e)=> setField("email", e.target.value)}  required/>
                <input type="text" name='phone' placeholder="Phone number" onChange={(e)=> setField("phone", e.target.value)}  />
                <input type="text" name='bid' placeholder="Your bid" onChange={(e)=> setField("bid", e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Submit your bid</button>
            </form>
        </div>
    );  
  };

  export default Form; 