import "./SideBar.css"
import SideBarButton from "../../Shared/SideBarButton"
import Icon from "../../Shared/Icon/Icon"

const Sidebar = () => {
    return (
        <div className="bar"> 
            <div className="avatar">
            </div>
            <b className="pad">PORTFOLIO</b>
            <p className="pad" style={{color:"grey"}}>Template by W3.css</p>
            <SideBarButton text="PORTFOLIO" icon="/assets/Icons/WindowsIcon.png"/>
            <SideBarButton  text="ABOUT" icon="/assets/Icons/UserIcon.png" />
            <SideBarButton  text="CONTACT" icon="/assets/Icons/EmailIcon.png" />
            <div className="ico">
                <Icon icon="/assets/Icons/FacebookIcon.png"/>
                <Icon icon="/assets/Icons/InstagramIcon.png"/> 
                <Icon icon="/assets/Icons/SnapchatIcon.png"/>  
                <Icon icon="/assets/Icons/PinterestIcon.png"/>
                <Icon icon="/assets/Icons/TwitterIcon.png"/>
                <Icon icon="/assets/Icons/LinkedinIcon.png"/>
            </div>
    
        </div>
    )
}

export default Sidebar
