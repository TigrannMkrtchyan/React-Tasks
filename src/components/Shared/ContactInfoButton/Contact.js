import "./Contact.css"

const Contact = ({ name, color, link,width }) => {
    return (
        <div style={{ backgroundColor: color,width:width}} className="info">
            <img className="contactImage" src={link}></img> <p>{name}</p>
        </div>
    )
}

export default Contact
