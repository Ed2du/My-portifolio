import { BiEnvelope } from "react-icons/bi"
import { useState } from "react";


export default function Contact() {
    const [email, setEmail] = useState('emailteste@gmail.com');

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert('Email copied!');
        }).catch(error => {
            console.error('Failed to copy the email', error);
        });
    };

    return (
        <>
            <div className="contact-box" id='Contact'>
                <h1 className="contact-title">
                    Want to Contact me?
                </h1>
                <button className="email-btn" onClick={copyEmailToClipboard}>
                    <BiEnvelope className="email-icon"/>
                    <span>{email}</span>
                </button>
            </div>
        </>
    );
}