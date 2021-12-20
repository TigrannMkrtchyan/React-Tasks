import "./PortfolioButton.css"

const PortfolioButton = (props) => {
    return (
        <div>
            <button className="PortfolioButton"><img src={props.icon} className="PortfolioButtonIcon"></img><p>{props.text}</p></button>
        </div>
    )
}

export default PortfolioButton
