import React from 'react'
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="page1">
        <div className="nav">
            <div className="logo">
                <div><p>magboo</p></div>

            </div>

            <div className="navigation">
                <div><Link to="/">HOME</Link></div>
                <div><Link to="/contact">CONTACT</Link></div>
            </div>
        </div>

        <div className="oneBody">
            <div><h1>We Buy Land. Easy,Ethical, Efficient. 
<hr></hr></h1></div>
            <div><p>No Fees, No Commisions And We Pay All The Closing costs</p></div>
           
        </div>
        </div>
    )
}

export default Nav