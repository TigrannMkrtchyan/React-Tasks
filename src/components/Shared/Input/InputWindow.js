import "./Input.css"

const InputWindow = ({text}) => {
    return (
        <div>
        <p className="inputp">{text}</p>
        <input className="inputclass" type="text" name="name" />
        </div>
    )
}

export default InputWindow
