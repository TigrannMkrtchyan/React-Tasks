import "./SideBarButton.css"

const SideBarButton = (props) => {
    return (
        <div >
            <a className='SideBarButton' > <img className="img" src={props.icon}></img> {props.text}</a>
        </div>
    )
}

export default SideBarButton
