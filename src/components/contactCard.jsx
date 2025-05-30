import react from "react"

function Contact(props) {
     return(
        <div className="contact">
                <div className="image"><img src={props.imageLink} alt="" /></div>
                <div className="contactName"><h2>{props.name}</h2></div>
                <div className="className"><p>{props.content}</p></div>
        </div>
     )
}

export default Contact