import "./Picture.css"

const Picture = (props) => {
    return (
        <div className="PictureConteiner">
            <img className="PictureImg" src={props.link}></img>
            <div className="PictureText"> <h3>{props.topic}</h3><br></br> <p>{props.text}</p>  </div>
        </div>
    )
}

export default Picture
