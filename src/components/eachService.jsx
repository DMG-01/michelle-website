import react from "react"

function Service(props) {
    return (
        <div className="service">
            <div className="img"><img src={props.imgUrl} alt="" /></div>
            <div className="imgContent">
                <div><h2>{props.head}</h2></div>
                <div><p>{props.content}</p></div>
            </div>
        </div>
    )
}

export default Service