import react from "react"
import Nav from "./nav"
import {Link} from "react-router-dom"
function ContactUs() {

    return(
        
        <div className="contactUs">
            <div className="navigation">
                <div><h3>magboo</h3></div>
                <div><Link to="/"><p>HOME</p></Link></div>
            </div>
            <div className="header">
                <div><h2>Contact Us</h2></div>
                <div><p>Any question or remarks?just write us a message</p></div>
            </div>
            <div className="contactUsBody">
            <div className="contactInfo">
                <div><h1>Contact Information</h1></div>
                <div><p>Say something to start a live chat!</p></div>
                <div><i class="bi bi-telephone-forward"></i></div>
                <div><p>+101 234 5678</p></div>
                <div><i class="bi bi-envelope-fill"></i></div>
                <div><p>Michelle@magboo.co</p></div>
                <div><i class="bi bi-geo-alt-fill"></i></div>
                <div><p>1942 West Gray St, Suite 202, Houston, TX 77019 | 210-819-5893
                </p></div>
            </div>
            <div className="contactForm">
                <div className="names">
                    <div className="firstName">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="John"/>
                    </div>
                    <div className="lastName">
                        <div><label htmlFor="">Last Name</label></div>
                        <div><input type="text" placeholder="Doe" /></div>
                    </div>
                </div>
                
                <div className="contactInformation">
                    <div className="email">
                        <div><label htmlFor="">E-mail</label></div>
                        <div><input type="text" placeholder="example@gmail.com" /></div>
                    </div>

                    <div className="phoneNumber">
                        <div><label htmlFor="">Phone Number</label></div>
                        <div><input type="text" placeholder="+123 456 7890" /></div>
                    </div>
                </div>

                <div className="selectSubject">
                    <div class="subjectHead">
                        <div><h3>Select Subject?</h3></div>
                    </div>
                    <div className="selectSubject">
                        <div className="generalInquiry">
                            <div><input type="checkbox" /></div>
                             <div><label htmlFor="">Buy Land</label></div>
                        </div>

                        <div className="generalInquiry">
                            <div><input type="checkbox" /></div>
                             <div><label htmlFor="">Sell Land</label></div>
                        </div>

                        <div className="generalInquiry">
                            <div><input type="checkbox" /></div>
                             <div><label htmlFor="">General Question</label></div>
                        </div>
                    </div>
                </div>

                <div className="message">
                    <div><label htmlFor="">Message</label></div>
                    <div><input type="" placeholder="Write your message" /></div>
                </div>

                <div className="sendMessage">
                    <div><button>Send Message</button></div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default ContactUs