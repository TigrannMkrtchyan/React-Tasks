import "./Main.css"
import PortfolioButton from "../../Shared/PortfolioButton"
import Picture from "./picture/Picture"
import BarButtons from "../../Shared/BarButtons/BarButtons"
import ProgresBar from "../../Shared/ProgresBar/ProgresBar"
import Charge from "../../Shared/Charge/Charge"
import Contact from "../../Shared/ContactInfoButton/Contact"
import InputWindow from "../../Shared/Input/InputWindow"
import FooterBlogPost from "../../Shared/FooterBlogPost/FooterBlogPost"

let barButtonsArr = ["<<", "1", "2", "3", "4", ">>"]
let ProgresBarArr = [{ width: 95, text: 'Photograpy' }, { width: 85, text: 'Web Design' }, { width: 80, text: 'Photoshop' }]
let contactArr = [{ name: "email@email.com", color: "grey", link: "/assets/Icons/EmailWhiteIcon.png",width:"32%"},
{ name: "Chicago, USChicago, US", color: "cadetblue", link: "/assets/Icons/MapPointWhiteIcon.png" ,width:"32%"},
{ name: "512312311", color: "grey", link: "/assets/Icons/PhoneIcon.png",width:"32%" }]
let inputArr = ["Name", "Email", "Message"]



const Main = () => {
    return (
        <div className="conteiner">
            <h1 className="topheader">My Portfolio</h1>

            <div className="position"> <p className="p">Filter:</p> <button className="all">ALL</button>
                <PortfolioButton icon="/assets/Icons/BrilliantIcon.png" text="Design" />
                <PortfolioButton icon="/assets/Icons/PictureIcon.png" text="Photos" />
                <PortfolioButton icon="/assets/Icons/PinIcon.png" text="Art" /> </div>
            <hr className="hr"></hr>
            <div className="pictures">
                <Picture link="/assets/Pics/Mountains.jpg" topic="Lorem Ipsum" text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
                <Picture link="/assets/Pics/Lights.jpg" topic="Lorem Ipsum" text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
                <Picture link="/assets/Pics/Nature.jpg" topic="Lorem Ipsum" text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
            </div>
            <div className="pictures">
                <Picture link="/assets/Pics/Coffee.jpg" topic="Lorem Ipsum" text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
                <Picture link="/assets/Pics/Smog.jpg" topic="Lorem Ipsum" text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
                <Picture link="/assets/Pics/Bear.jpg" topic="Lorem Ipsum" text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla" />
            </div>
            <div className="barButtons">
                <div className="barButtonsinerdiv">
                    {barButtonsArr.map((num) => (<BarButtons number={num} />))}
                </div>
            </div>
            <div className="personalpictures">
                <img className="personalpicturesimg" src="/assets/Pics/PersonalPic.jpg"></img>
                <img className="personalpicturesimg" src="/assets/Pics/PersonalPic2.jpg"></img>
            </div>
            <div className="cv">
                <h2>About Me </h2>
                <p className="cvp">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. </p>
                <p className="cvTechnical">Technical Skills</p>
                {ProgresBarArr.map((value) => (<ProgresBar width={value.width} text={value.text} />))}
                <div className="cvDownload"> <img className="cvDownloadIcon" src="/assets/Icons/DownloadIcon.png"></img> <p>Download Resume</p> </div>
            </div>
            <p className="chargetext">How much I charge</p>
            <div className="chargeConteiner">
                <Charge header="Basic" storage="1GB" support="mail" amount="10" color={"black"} />
                <Charge header="Pro" storage="50GB" support="Endless" amount="25" color={"cadetblue"} />
                <Charge header="Premium" storage="Unlimited" support="Endless" amount="25" color={"black"} />
            </div>
            <div className="contactinfo">
                <div>
                    <p className="contactInfop">Contact Me</p>
                    <div className="ContactInfoButs">
                        {contactArr.map((value) => (<Contact name={value.name} link={value.link} color={value.color} width={value.width} />))}</div>
                </div>
                <hr className="contactHr"></hr>
                <div>
                    {inputArr.map((value) => (<InputWindow text={value} />))}

                    <div className="SendMessdge "> <img className="cvDownloadIcon" src="/assets/Icons/TelegramIcon.png"></img> Send Message</div>
                </div>

            </div>
            <div className="footer">
                <div className="footerDiv"><h3 className="footerTopics">FOOTER</h3> <p className="footerText">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                    ultricies congue gravida diam non fringilla.</p> <p className="footerText">Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p> </div>
                <div className="footerDiv"><h3 className="footerTopics">BLOG POSTS</h3> <FooterBlogPost topic="Lorem" text="Sed mattis nunc" link="/assets/Pics/Workshop.jpg" /> <hr></hr> <FooterBlogPost topic="Ipsum" text="Praes tinci sed" link="/assets/Pics/Gondol.jpg" /> </div>
                <div className="footerDiv"><h3 className="footerTopics">POPULAR TAGS</h3>   </div>

            </div>

        </div>
    )
}

export default Main
