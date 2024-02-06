import React, { useRef, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from 'axios';
function NodeMailer() {

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const sendEmails = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send-email', {
                email: email,
                message: message,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending emails:', error);
        }
    };
    return (
        <div>

            <form className="form-inline">
                <div className="formFlex">
                    <MailOutlineIcon className="mailIcon"/>
                    <input type="text" placeholder='email'
                    onChange={(e)=> setEmail(e.target.value)} 
                    />
                </div>
                <div className="formFlex">
                    <textarea type="text" placeholder='text'
                    onChange={(e)=> setMessage(e.target.value)}
                    />
                </div>
                
                    <button className="form-submit-button" onClick={sendEmails}>Submit</button>
               
            </form>
        </div>
    );
};

export default NodeMailer;
