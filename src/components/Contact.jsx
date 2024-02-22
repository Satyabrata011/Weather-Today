
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_aukgduv', 'template_5i1pjwa', form.current, '8dqAahbfizFtxdJf9')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent")
        }, (error) => {
            console.log(error.text);
        });
    }
    const containerStyle = {
        backgroundColor: '#F7E6C4', // Replace with your desired color
    }
    return(
        <>
        <div className="background" style={containerStyle}>
        <div className ="container5"> 
             <h1>
             Weather Today </h1>
             <p>Here are the information you can contact us</p>


     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
         </div>
        </div>
       
        </>
    )
 
}

export default Contact;