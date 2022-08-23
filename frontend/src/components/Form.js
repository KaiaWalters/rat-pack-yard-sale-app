import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

function FormComponent(props) {
    let [form, setForm] = useState({})
    let [error, setError] = useState({})
    let errorDisplay; 

    // const navigate = useNavigate();

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
        <div className="form_container">
            <h2>Submit an offer!</h2>
            <Form>
            {errorDisplay}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" onChange={(e)=> setField("username", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setField("email", e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone number" onChange={(e)=> setField("phone", e.target.value)}/>
                <Form.Text className="text-muted">
                You're number may be used to notify you. We'll never share your number with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBid">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="bid" placeholder="Enter Bid" onChange={(e)=> setField("bid", e.target.value)}/>
                <Form.Text className="text-muted">
                    How much will you offer for this item?
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>

            </Form>
        </div>
    );  
  };

  export default FormComponent; 