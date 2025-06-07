import react from "react"
import { Link } from "react-router-dom";


function Subscribe() {
    return (
        <div className="subscribe">
            <div><h2>CONTACT</h2></div>
            <div>
                <p>The process is super fast and super simple. If you're interested or want to know more, complete this form or email us at hello@magboo.co</p>
            </div>

            <div>
                <Link to="/contact">
                    <button>Send Email</button>
                </Link>
            </div>
        </div>
    );
}

export default Subscribe