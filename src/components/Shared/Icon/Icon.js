import "./icon.css"
const Icon = (props) => {
    return (
        <div >
            <img className="SideBarButtonIcons" src={props.icon}></img>
        </div>
    )
}

export default Icon
