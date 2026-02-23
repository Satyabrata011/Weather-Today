import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_aukgduv',
            'template_5i1pjwa',
            form.current,
            '8dqAahbfizFtxdJf9'
        )
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent");
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message.");
        });
    };

    return (
        <div className="page-section">

           <div className="contact-section">
  <div className="contact-wrapper">

    {/* LEFT TEXT */}
    <div className="contact-left">
      <h1 className="contact-title">Weather Today</h1>
      <p className="contact-description">
        Here are the information you can contact us
      </p>
    </div>

       {/* RIGHT FORM */}
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <input
          type="submit"
          value="Send Message"
          className="contact-button"
        />

      </form>
    </div>

  </div>
</div>
</div>
    );
}

export default Contact;
