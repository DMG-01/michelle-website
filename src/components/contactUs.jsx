import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6vmargj',               
            'template_42fzp3f',     
            form.current,
            'BS6o3mad70D5hbLoF'                  
        ).then((result) => {
            alert("Message sent!");
            console.log(result.text);
        }, (error) => {
            alert("Message failed to send.");
            console.error(error.text);
        });

        e.target.reset(); // Clear the form
    };

    return (
        <div className="contactUs">
            <div className="navigation">
                <h3>magboo</h3>
                <Link to="/"><p>HOME</p></Link>
            </div>

            <div className="header">
                <h2>Contact Us</h2>
                <p>Any question or remarks? Just write us a message</p>
            </div>

            <div className="contactUsBody">
                <div className="contactInfo">
                    <h1>Contact Information</h1>
                    <i className="bi bi-envelope-fill"></i>
                    <p>Michelle@magboo.co</p>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>1942 West Gray St, Suite 202, Houston, TX 77019 | 210-819-5893</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <div className="names">
                        <div className="firstName">
                            <label>Full Name</label>
                            <input type="text" name="name" required placeholder="John Doe" />
                        </div>
                    </div>

                    <div className="contactInformation">
                        <div className="email">
                            <label>E-mail</label>
                            <input type="email" name="email" required placeholder="example@gmail.com" />
                        </div>
                        <div className="phoneNumber">
                            <label>Phone Number</label>
                            <input type="text" name="phone" placeholder="+123 456 7890" />
                        </div>
                    </div>

                    <div className="selectSubject">
                        <label>Subject</label>
                        <input type="text" name="title" placeholder="e.g. Buy Land, General Inquiry..." />
                    </div>

                    <div className="message">
                        <label>Message</label>
                        <textarea class="text_area"name="message" required placeholder="Write your message" />
                    </div>

                    <div className="sendMessage">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
