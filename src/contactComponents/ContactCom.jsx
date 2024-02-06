import React, { useState } from 'react';
import './ContactCom.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import StoreIcon from '@mui/icons-material/Store';
import axios from 'axios';
export default function ContactCom() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [city, setCity] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);

    const sendEmails = async (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !city || !company || !message) {
            setError('Please fill out all fields before submitting.');
            return;
        }
        if(!submit){
        try {
            const response = await axios.post('http://localhost:3001/send-email', {
                user: name,
                email: email,
                phone: phone,
                city: city,
                company: company,
                message: message,
            });
            console.log(response.data);
            setSuccess('Thank you for Submittind we will respond you ASAP!');
            setSubmit(true);

            // Reset the form fields
            setName('');
            setEmail('');
            setPhone(null);
            setCity('');
            setCompany('');
            setMessage('');
        } catch (error) {
            console.error('Error sending emails:', error);
            setError('Sorry a temporary Error Occured');
        }
    }else{
        console.log("already submitted");
    }
    };
    return (
        <>
        <div className="contactContainer">
        
            <img src="../../cons-person.png" alt="" />
            <form className="form-inline">
                <div className="formFlex">
                    <PersonIcon className="mailIcon"/>
                    <input type="text" placeholder='Name'
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="formFlex">
                    <MailOutlineIcon className="mailIcon"/>
                    <input type="text" placeholder='email'
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="formFlex">
                    <LocalPhoneIcon className="mailIcon"/>
                    <input type="text" placeholder='Phone'
                    onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>
                <div className="formFlex">
                    <LocationCityIcon className="mailIcon"/>
                    <input type="text" placeholder='City, State, Country'
                    onChange={(e)=> setCity(e.target.value)}
                    />
                </div>
                <div className="formFlex">
                    <StoreIcon className="mailIcon"/>
                    <input type="text" placeholder='Company'
                    onChange={(e)=> setCompany(e.target.value)}
                    />
                </div>
                <div className="formFlex">
                    <textarea type="text" placeholder='message..'
                    onChange={(e)=> setMessage(e.target.value)}
                    />
                </div>
                    <button className="form-submit-button" 
                    onClick={sendEmails}
                     disabled={success}
                    >Submit</button>

                    {success ? (
                        <span className='message'>{success}</span>
                    ) : (
                        <span className='message'>{error}</span>
                    )}
               
            </form>
            

                </div>
        </>
    )
}


